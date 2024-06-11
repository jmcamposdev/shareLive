import Activity, { ACTIVITY_TYPES } from '../models/Activity.js'
import Role, { ROLES } from '../models/Role.js'
import User from '../models/User.js'
import dotenv from 'dotenv'
import { sendEmail } from '../utils/email.utils.js'
import { CLOUDINARY_FOLDERS, checkAndCreateFolder } from '../storage/cloudinary.js'

// Cargar variables de entorno según el entorno
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

export const signIn = async (req, res) => {
  // Extract the user from the request
  const { user } = req

  // Generate a token
  const token = await User.generateToken(user)

  // Register the login activity
  Activity.createUserActivity(ACTIVITY_TYPES.LOGIN, user._id, user, user)

  // Send the token
  res.json({ token, user })
}

export const signUp = async (req, res) => {
  // Extract the user from the request
  const { username, firstName, lastName, email, password } = req.body

  const roles = await Role.find()
  const userRole = roles.find(role => role.id === ROLES.USER)

  // Create a new user
  const newUser = new User({
    username,
    email,
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    avatar: process.env.DEFAULT_AVATAR_URL,
    password: await User.encryptPassword(password),
    roles: [userRole._id],
    joinDate: new Date()
  })

  // Register the create user activity
  Activity.createUserActivity(ACTIVITY_TYPES.CREATE, newUser._id, newUser, newUser)
  // Create the cloudinary folder for the user
  await checkAndCreateFolder(`${CLOUDINARY_FOLDERS.USERS}/${newUser._id}`)
  // Create the avatar folder for the user
  await checkAndCreateFolder(`users/${newUser._id}/avatar`)

  // Save the user in the database
  await newUser.save()

  // Populate the user's roles
  await newUser.populate('roles')
  await newUser.populate('reviews')

  // Generate a token
  const token = await User.generateToken(newUser)

  // Send the token
  res.json({ token, user: newUser })
}

export const sendResetPasswordEmail = async (req, res) => {
  const { email, OPT } = req.body

  // Find the user by email
  const user = await User.findOne({ email })

  // If the user does not exist, return an error
  if (!user) {
    return res.json({ error: 'User not found' })
  }

  // Send the email
  await sendEmail(
    email,
    'Sharelive - Reset your password',
    `Use this code to reset your password: ${OPT}`,
    `
    <table
  class="nl-container"
  width="100%"
  border="0"
  cellpadding="0"
  cellspacing="0"
  role="presentation"
  style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff0e3"
>
  <tbody>
    <tr>
      <td>
        <table
          class="row row-1"
          align="center"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="mso-table-lspace: 0; mso-table-rspace: 0"
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row-content stack"
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    color: #000;
                    width: 680px;
                    margin: 0 auto;
                  "
                  width="680"
                >
                  <tbody>
                    <tr>
                      <td
                        class="column column-1"
                        width="100%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="
                            height: 30px;
                            line-height: 30px;
                            font-size: 1px;
                          "
                        >
                          
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="row row-2"
          align="center"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="mso-table-lspace: 0; mso-table-rspace: 0"
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row-content stack"
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    color: #000;
                    width: 680px;
                    margin: 0 auto;
                  "
                  width="680"
                >
                  <tbody>
                    <tr>
                      <td
                        class="column column-1"
                        width="33.333333333333336%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="height: 0; line-height: 0; font-size: 1px"
                        >
                          
                        </div>
                      </td>
                      <td
                        class="column column-2"
                        width="33.333333333333336%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <table
                          class="image_block block-1"
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="pad"
                                style="
                                  width: 100%;
                                  padding-right: 0;
                                  padding-left: 0;
                                "
                              >
                                <div
                                  class="alignment"
                                  align="center"
                                  style="line-height: 10px"
                                >
                                  <img
                                    src="https://res.cloudinary.com/djwmudirg/image/upload/v1717696814/defaults/ie4rnbqzgax3zwcdey2w.png"
                                    style="
                                      display: block;
                                      height: auto;
                                      border: 0;
                                      max-width: 147.33333333333331px;
                                      width: 100%;
                                    "
                                    width="147.33333333333331"
                                    alt="Company Logo"
                                    title="Company Logo"
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td
                        class="column column-3"
                        width="33.333333333333336%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="height: 0; line-height: 0; font-size: 1px"
                        >
                          
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="row row-3"
          align="center"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="mso-table-lspace: 0; mso-table-rspace: 0"
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row-content stack"
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    color: #000;
                    width: 680px;
                    margin: 0 auto;
                  "
                  width="680"
                >
                  <tbody>
                    <tr>
                      <td
                        class="column column-1"
                        width="100%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="
                            height: 10px;
                            line-height: 10px;
                            font-size: 1px;
                          "
                        >
                          
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="row row-4"
          align="center"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="mso-table-lspace: 0; mso-table-rspace: 0"
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row-content stack"
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    color: #000;
                    width: 680px;
                    margin: 0 auto;
                  "
                  width="680"
                >
                  <tbody>
                    <tr>
                      <td
                        class="column column-1"
                        width="100%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <table
                          class="image_block block-1"
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                          <tbody>
                            <tr>
                              <td class="pad" style="width: 100%">
                                <div
                                  class="alignment"
                                  align="center"
                                  style="line-height: 10px"
                                >
                                  <img
                                    src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_top.png"
                                    style="
                                      display: block;
                                      height: auto;
                                      border: 0;
                                      max-width: 680px;
                                      width: 100%;
                                    "
                                    width="680"
                                    alt="Top round corners"
                                    title="Top round corners"
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="row row-5"
          align="center"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="mso-table-lspace: 0; mso-table-rspace: 0"
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row-content stack"
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    background-color: #fff;
                    color: #000;
                    width: 680px;
                    margin: 0 auto;
                  "
                  width="680"
                >
                  <tbody>
                    <tr>
                      <td
                        class="column column-1"
                        width="100%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <table
                          class="image_block block-1"
                          width="100%"
                          border="0"
                          cellpadding="15"
                          cellspacing="0"
                          role="presentation"
                          style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                          <tbody>
                            <tr>
                              <td class="pad">
                                <div
                                  class="alignment"
                                  align="center"
                                  style="line-height: 10px"
                                >
                                  <img
                                    class="fullWidth"
                                    src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/password_reset.png"
                                    style="
                                      display: block;
                                      height: auto;
                                      border: 0;
                                      max-width: 374px;
                                      width: 100%;
                                    "
                                    width="374"
                                    alt="Resetting Password"
                                    title="Resetting Password"
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          class="spacer_block block-2"
                          style="
                            height: 35px;
                            line-height: 35px;
                            font-size: 1px;
                          "
                        >
                          
                        </div>
                        <table
                          class="heading_block block-3"
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="pad"
                                style="text-align: center; width: 100%"
                              >
                                <h1
                                  style="
                                    margin: 0;
                                    color: #101010;
                                    direction: ltr;
                                    font-family: Arial, Helvetica Neue,
                                      Helvetica, sans-serif;
                                    font-size: 27px;
                                    font-weight: 400;
                                    letter-spacing: normal;
                                    line-height: 120%;
                                    text-align: center;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                  "
                                >
                                  <strong>Your Reset Password Code</strong>
                                </h1>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="row row-6"
          align="center"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="mso-table-lspace: 0; mso-table-rspace: 0"
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row-content stack"
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    background-color: #fff;
                    color: #000;
                    width: 680px;
                    margin: 0 auto;
                  "
                  width="680"
                >
                  <tbody>
                    <tr>
                      <td
                        class="column column-1"
                        width="16.666666666666668%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="height: 0; line-height: 0; font-size: 1px"
                        >
                          
                        </div>
                      </td>
                      <td
                        class="column column-2"
                        width="66.66666666666667%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <table
                          class="paragraph_block block-1"
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            word-break: break-word;
                          "
                        >
                          <tbody>
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 10px;
                                  padding-left: 20px;
                                  padding-right: 10px;
                                  padding-top: 10px;
                                "
                              >
                                <div
                                  style="
                                    color: #848484;
                                    font-family: Arial, Helvetica Neue,
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    line-height: 180%;
                                    text-align: center;
                                    mso-line-height-alt: 25.2px;
                                  "
                                >
                                  <p style="margin: 0; word-break: break-word;font-size: 30px">
                                    <strong>${OPT}</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          class="spacer_block block-2"
                          style="
                            height: 10px;
                            line-height: 10px;
                            font-size: 1px;
                          "
                        >
                          
                        </div>
                        <div
                          class="spacer_block block-4"
                          style="
                            height: 20px;
                            line-height: 20px;
                            font-size: 1px;
                          "
                        >
                          
                        </div>
                      </td>
                      <td
                        class="column column-3"
                        width="16.666666666666668%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="height: 0; line-height: 0; font-size: 1px"
                        >
                          
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="row row-7"
          align="center"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="mso-table-lspace: 0; mso-table-rspace: 0"
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row-content stack"
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    color: #000;
                    width: 680px;
                    margin: 0 auto;
                  "
                  width="680"
                >
                  <tbody>
                    <tr>
                      <td
                        class="column column-1"
                        width="100%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <table
                          class="image_block block-1"
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                          <tbody>
                            <tr>
                              <td class="pad" style="width: 100%">
                                <div
                                  class="alignment"
                                  align="center"
                                  style="line-height: 10px"
                                >
                                  <img
                                    src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7631/round_corner_bottom.png"
                                    style="
                                      display: block;
                                      height: auto;
                                      border: 0;
                                      max-width: 679px;
                                      width: 100%;
                                    "
                                    width="679"
                                    alt="Bottom round corners"
                                    title="Bottom round corners"
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="row row-8"
          align="center"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="mso-table-lspace: 0; mso-table-rspace: 0"
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row-content stack"
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    color: #000;
                    width: 680px;
                    margin: 0 auto;
                  "
                  width="680"
                >
                  <tbody>
                    <tr>
                      <td
                        class="column column-1"
                        width="100%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="
                            height: 20px;
                            line-height: 20px;
                            font-size: 1px;
                          "
                        >
                        </div>
                        <table
                          class="social_block block-2"
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 15px;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 10px;
                                  text-align: center;
                                "
                              >
                                <div class="alignment" align="center">
                                  <table
                                    class="social-table"
                                    width="144px"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0;
                                      mso-table-rspace: 0;
                                      display: inline-block;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.facebook.com"
                                            target="_blank"
                                            ><img
                                              src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png"
                                              width="32"
                                              height="32"
                                              alt="Facebook"
                                              title="facebook"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.twitter.com"
                                            target="_blank"
                                            ><img
                                              src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png"
                                              width="32"
                                              height="32"
                                              alt="Twitter"
                                              title="twitter"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.linkedin.com"
                                            target="_blank"
                                            ><img
                                              src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/linkedin@2x.png"
                                              width="32"
                                              height="32"
                                              alt="Linkedin"
                                              title="linkedin"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.instagram.com"
                                            target="_blank"
                                            ><img
                                              src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png"
                                              width="32"
                                              height="32"
                                              alt="Instagram"
                                              title="instagram"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                          /></a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          class="menu_block block-3"
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="mso-table-lspace: 0; mso-table-rspace: 0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="pad"
                                style="
                                  color: #101010;
                                  font-family: inherit;
                                  font-size: 14px;
                                  text-align: center;
                                "
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                  "
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="alignment"
                                        style="text-align: center; font-size: 0"
                                      >
                                        <!--[if !mso
                                        ]><!--><input
                                          class="menu-checkbox"
                                          id="memu-r7c0m2"
                                          type="checkbox"
                                          style="
                                            display: none !important;
                                            max-height: 0;
                                            visibility: hidden;
                                          "
                                        /><!--<![endif]-->
                                        <div
                                          class="menu-trigger"
                                          style="
                                            display: none;
                                            max-height: 0;
                                            max-width: 0;
                                            font-size: 0;
                                            overflow: hidden;
                                          "
                                        >
                                          <label
                                            class="menu-label"
                                            for="memu-r7c0m2"
                                            style="
                                              height: 36px;
                                              width: 36px;
                                              display: inline-block;
                                              cursor: pointer;
                                              mso-hide: all;
                                              user-select: none;
                                              align: center;
                                              text-align: center;
                                              color: #fff;
                                              text-decoration: none;
                                              background-color: #000;
                                              border-radius: 0;
                                            "
                                            ><span
                                              class="menu-open"
                                              style="
                                                mso-hide: all;
                                                font-size: 26px;
                                                line-height: 31.5px;
                                              "
                                              >☰</span
                                            ><span
                                              class="menu-close"
                                              style="
                                                display: none;
                                                mso-hide: all;
                                                font-size: 26px;
                                                line-height: 36px;
                                              "
                                              >✕</span
                                            ></label
                                          >
                                        </div>
                                        <div class="menu-links">
                                          <!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><!
                                          [endif]-->[endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]-->
                                          <a
                                            href="www.example.com"
                                            target="_self"
                                            style="
                                              mso-hide: false;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-left: 15px;
                                              padding-right: 15px;
                                              display: inline-block;
                                              color: #101010;
                                              font-family: Arial, Helvetica Neue,
                                                Helvetica, sans-serif;
                                              font-size: 14px;
                                              text-decoration: none;
                                              letter-spacing: normal;
                                            "
                                            >Unsubscribe</a
                                          >><!--[if mso]></td><!
                                          [endif]-->[endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]-->
                                          <a
                                            href="www.example.com"
                                            target="_self"
                                            style="
                                              mso-hide: false;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-left: 15px;
                                              padding-right: 15px;
                                              display: inline-block;
                                              color: #101010;
                                              font-family: Arial, Helvetica Neue,
                                                Helvetica, sans-serif;
                                              font-size: 14px;
                                              text-decoration: none;
                                              letter-spacing: normal;
                                            "
                                            >Help</a
                                          >><!--[if mso]></td><!
                                          [endif]-->[endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]-->
                                          <a
                                            href="www.example.com"
                                            target="_self"
                                            style="
                                              mso-hide: false;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-left: 15px;
                                              padding-right: 15px;
                                              display: inline-block;
                                              color: #101010;
                                              font-family: Arial, Helvetica Neue,
                                                Helvetica, sans-serif;
                                              font-size: 14px;
                                              text-decoration: none;
                                              letter-spacing: normal;
                                            "
                                            >Login</a
                                          >><!--[if mso]></td><!
                                          [endif]-->[endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]-->
                                          <a
                                            href="www.example.com"
                                            target="_self"
                                            style="
                                              mso-hide: false;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-left: 15px;
                                              padding-right: 15px;
                                              display: inline-block;
                                              color: #101010;
                                              font-family: Arial, Helvetica Neue,
                                                Helvetica, sans-serif;
                                              font-size: 14px;
                                              text-decoration: none;
                                              letter-spacing: normal;
                                            "
                                            >Privacy</a
                                          >><!--[if mso]></td><!
                                          [endif]-->[endif]--><!--[if mso]></tr></table><![endif]-->
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          class="row row-9"
          align="center"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="mso-table-lspace: 0; mso-table-rspace: 0"
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row-content stack"
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="
                    mso-table-lspace: 0;
                    mso-table-rspace: 0;
                    color: #000;
                    width: 680px;
                    margin: 0 auto;
                  "
                  width="680"
                >
                  <tbody>
                    <tr>
                      <td
                        class="column column-1"
                        width="16.666666666666668%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="height: 0; line-height: 0; font-size: 1px"
                        >
                      
                        </div>
                      </td>
                      <td
                        class="column column-2"
                        width="66.66666666666667%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="
                            height: 35px;
                            line-height: 35px;
                            font-size: 1px;
                          "
                        >
                          
                        </div>
                      </td>
                      <td
                        class="column column-3"
                        width="16.666666666666668%"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          font-weight: 400;
                          text-align: left;
                          padding-bottom: 5px;
                          padding-top: 5px;
                          vertical-align: top;
                          border-top: 0;
                          border-right: 0;
                          border-bottom: 0;
                          border-left: 0;
                        "
                      >
                        <div
                          class="spacer_block block-1"
                          style="height: 0; line-height: 0; font-size: 1px"
                        >

                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

    `
  )

  // Send a success message
  res.json({ message: 'Email sent' })
}
