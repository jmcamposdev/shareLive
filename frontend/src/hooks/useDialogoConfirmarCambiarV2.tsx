import React, { useEffect } from "react";
import { useState } from "react";
import DialogConfirmDel from "../components/common/Dialogs/DialogConfirmDel";

export const useDialogoConfirmarCambiarV2 = ({
  tabInicial,
  onCambiar,
}: {
  tabInicial?: number;
  esGestionarCambioEntidad?: boolean;
  onCambiar?: VoidFunction;
}) => {
  const [tabActual, setTabActual] = useState<number>(tabInicial ?? 0);
  const [tabSiguiente, setTabSiguiente] = useState<number>(tabInicial ?? 0);
  const [esModificado, setEsModificado] = useState<boolean>(() => false);
  const [esMostrarDialogo, setEsMostrarDialogo] = useState<boolean>(false);
  const [esGuardarConfirmacion, setEsGuardarConfirmacion] = useState<boolean>(false);
  const [esGuardar, setEsGuardar] = useState<boolean>(false);
  const labelsDefecto = {
    titulo: "mensajes.¿Quieres salir sin guardar?",
    texto1: "mensajes.Has realizado cambios en la pantalla Si pulsas el boton Salir sin guardar, estos se perderan",
    texto2: "mensajes.Si quieres, puedes continuar editando",
    accionPrincipalLabel: "label.Continuar editando",
    accionDescartarLabel: "label.Salir sin guardar",
  };
  const labelsTabChange = {
    titulo: "estructura.mensajes.¿Quieres guardar estos datos?",
    texto1: "estructura.mensajes.Al cambiar de pestaña sin guardar, los datos que has introducido se perderan",
    texto2: "estructura.mensajes.¿Quieres guardar los cambios realizados en esta pestana?",
    accionPrincipalLabel: "estructura.label.Guardar y continuar",
    accionDescartarLabel: "estructura.label.Cambiar sin guardar",
  };

  const [labelsDialogo, setLabelsDialogo] = useState(labelsDefecto);

  const children = (
    <div className="flex flex-column gap-2">
      <p>{labelsDialogo.texto1}</p>
      <p>{labelsDialogo.texto2}</p>
    </div>
  );

  const dialogoProps = {
    onAccionPrincipal: () => (esGuardar ? setEsGuardarConfirmacion(true) : setEsMostrarDialogo(false)),
    onAccionDescartar: () => handleCambiar(),
    onHide: () => handleCerrarDialogo(),
    visible: esMostrarDialogo,
    children,
    size: "md",
    ...labelsDialogo,
  };
  const handleMostrarDialogo = (esGuardar: boolean, labels?: any) => {
    setEsGuardar(esGuardar ?? false);
    setLabelsDialogo(labelsDefecto);
    setEsMostrarDialogo(true);
  };
  const handleCerrarDialogo = () => {
    setEsMostrarDialogo(false);
    setEsGuardar(false);
    setEsGuardarConfirmacion(false);
  };
  const handleTabChange = (index: number) => {
    if (esModificado) {
      handleMostrarDialogo(true, labelsTabChange);
      setTabSiguiente(index);
    } else setTabActual(index);
  };
  const handleGuardarFallido = () => {
    handleCerrarDialogo();
    setTabSiguiente(tabActual);
  };
  const handleCambiar = () => {
    setEsModificado(false);
    handleCerrarDialogo();
    if (onCambiar) {
      onCambiar();
    } else {
      setTabActual(tabSiguiente);
      setTabSiguiente(tabInicial ?? 0);
    }
  };
  const handleCancelar = () => {
    if (esModificado) {
      handleMostrarDialogo(false);
      setTabSiguiente(tabInicial ?? 0);
    } else handleCambiar();
  };

  const DialogoConfirmarCambiar = <DialogConfirmDel {...dialogoProps} />;

  return {
    dialogoProps,
    tabActual,
    esModificado,
    esGuardarConfirmacion,
    setEsModificado,
    setEsMostrarDialogo,
    handleCambiar,
    handleCancelar,
    handleTabChange,
    handleGuardarFallido,
    handleCerrarDialogo,
    handleMostrarDialogo,
    DialogoConfirmarCambiar,
  };
}