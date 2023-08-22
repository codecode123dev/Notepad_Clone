<template>
  <div class="containerMain">
    <div class="container">
      <p id="msgDanger" class="alert alert-danger displaynone"></p>
      <p id="msgWarning" class="alert alert-warning displaynone"></p>
      <p id="msgInfo" class="alert alert-info displaynone"></p>
      <p id="msgSuccess" class="alert alert-success displaynone"></p>
      <div id="edit_content">
        <div class="note_form">
          <form
            method="post"
            name="note_form"
            id="note_form"
            role="form"
            class="form-horizontal"
            onsubmit="return false;"
          >
            <div class="form-group">
              <div class="col-sm-9">
                <input
                  type="text"
                  name="notetitle"
                  id="edit_title"
                  class="form-control title"
                  placeholder="Note Title"
                  tabindex="1"
                  maxlength="200"
                  autocomplete="off"
                />
                <input
                  type="hidden"
                  name="notetype"
                  id="notetype"
                  value="PlainText"
                />
                <input type="hidden" name="notenumber" id="notenumber" />
                <input
                  type="hidden"
                  name="autosavenotenumber"
                  id="autosavenotenumber"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <!-- <span class="topLinks dropdown">
                    <a
                      id="notetyoeLabel"
                      data-target="#"
                      href="#"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <strong id="noteTypeDropdown"> Plain Text Note </strong>
                      <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="notetyoeLabel">
                      <li>
                        <a href="#">Plain Text Note</a>
                      </li>
                      <li>
                        <a href="#">Rich Text Note</a>
                      </li>
                      <li>
                        <a href="#">Task List</a>
                      </li>
                    </ul>
                  </span> -->

                <v-menu :location="bottom" class="topLinks dropdown">
                  <template v-slot:activator="{ props }">
                    <a id="notetyoeLabel" role="button">
                      <strong v-bind="props" id="noteTypeDropdown">
                        Plain Text Note
                      </strong>
                      <span class="caret"></span>
                    </a>
                    <!-- <v-btn  v-bind="props" id="notetyoeLabel"> Dropdown </v-btn> -->
                  </template>

                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <v-list-item-title >{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <!-- <span class="topLinks">
                    <strong>
                      <a class="link-import"> Import Word/Pdf </a>
                    </strong>
                  </span> -->

                <v-dialog v-model="dialog" width="auto">
                  <template v-slot:activator="{ props }">
                    <!-- <v-btn color="primary" v-bind="props"> Open Dialog </v-btn> -->
                    <span class="topLinks" v-bind="props" type="button">
                      <strong>
                        <a class="link-import"> Import Word/Pdf </a>
                      </strong>
                    </span>
                  </template>

                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          aria-label="Close"
                          @click="dialog = false"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                        <h4 class="modal-title" id="importFileModalLabel">
                          Import Note from Word/PDF File
                        </h4>
                      </div>
                      <div class="modal-body" id="importFileContent">
                        <div class="fileuploader fileuploader-theme-dragdrop">
                          <input
                            type="hidden"
                            name="fileuploader-list-importFiles"
                            value="[]"
                          />
                          <input
                            type="file"
                            name="importFiles"
                            style="
                              position: absolute;
                              z-index: -9999;
                              height: 0px;
                              width: 0px;
                              padding: 0px;
                              margin: 0px;
                              line-height: 0;
                              outline: 0px;
                              border: 0px;
                              opacity: 0;
                            "
                          />
                          <div class="fileuploader-input">
                            <div class="fileuploader-input-inner">
                              <div class="fileuploader-icon-main">
                                <i class="fas fa-cloud-upload-alt"></i>
                              </div>
                              <h3 class="fileuploader-input-caption">
                                <span>Drag and drop document here</span>
                              </h3>
                              <p>or</p>
                              <button
                                type="button"
                                class="fileuploader-input-button"
                              >
                                <span>Browse files</span>
                              </button>
                            </div>
                          </div>
                          <div class="fileuploader-items">
                            <ul class="fileuploader-items-list"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-dialog>

                <a class="addthis_button_compact link-share">
                  <strong>Share</strong>
                </a>
              </div>
            </div>

            <div class="form-group" id="textNoteContainer">
              <div class="col-sm-12">
                <textarea
                  name="notecontent"
                  class="form-control textarea"
                  id="edit_textarea"
                  placeholder="Note Content"
                  tabindex="2"
                  rows="19"
                >
                </textarea>
              </div>
            </div>

            <!-- <div class="form-group">
              <div class="col-sm-12">
                <span class="topLinks">
                  <strong>
                    <a title="Attach Images and Files to Note"  class="link-attach" @click="dialog_attach_file = true">
                      Attach Files
                    </a>
                  </strong>
                </span>
                <span id="noteFileList"></span>
              </div>
            </div>


              <v-dialog v-model="dialog_attach_file" width="auto">
               <div class="modal in" id="attachFileModal" tabindex="-1" role="dialog" aria-labelledby="attachFileModalLabel" style="display: block;">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="dialog_attach_file = false">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4 class="modal-title" id="attachFileModalLabel">Attach Files to Note</h4>
                    </div>

                    <div class="modal-body" id="attachFileContent">
                      <div class="alert alert-warning">
                        This feature is available in Premium plan only. 
                        <a href="#">Upgrade Now</a>
                         to access more great features.
                      </div>

                      <div class="fileuploader fileuploader-theme-dragdrop">
                        <input type="hidden" name="fileuploader-list-attachFiles" value="[]">
                        <input type="file" name="attachFiles" style="position: absolute; z-index: -9999; height: 0px; width: 0px; padding: 0px; margin: 0px; line-height: 0; outline: 0px; border: 0px; opacity: 0;">
                        <div class="fileuploader-input">
                          <div class="fileuploader-input-inner">
                            <div class="fileuploader-icon-main"></div>
                            <h3 class="fileuploader-input-caption">
                              <span>Drag and drop files here</span>
                              <p>or</p>
                            </h3>
                            <button type="button" class="fileuploader-input-button">
                              <span>Browse files</span>
                            </button>
                          </div>
                        </div>
                        <div class="fileuploader-items">
                          <ul class="fileuploader-items-list"></ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

               </div>
              </v-dialog> -->


                 <v-dialog
                  v-model="dialog_attach_file"
                  width="auto"
                >
                  <template v-slot:activator="{ props }">
                    <!-- <v-btn
                      color="primary"
                      v-bind="props"
                    >
                      Open Dialog
                    </v-btn> -->
                    <div class="form-group" v-bind="props">
                      <div class="col-sm-12">
                        <span class="topLinks">
                          <strong>
                            <a title="Attach Images and Files to Note"  class="link-attach">
                              Attach Files
                            </a>
                          </strong>
                        </span>
                        <span id="noteFileList"></span>
                      </div>
                    </div>
                  </template>

                  
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" @click="dialog_attach_file = false">
                            <span>×</span>
                          </button>
                          <h4 class="modal-title" id="attachFileModalLabel">Attach Files to Note</h4>
                        </div>
                        <div class="modal-body" id="attachFileContent">
                          <div class="alert alert-warning">
                            This feature is available in Premium plan only. 
                            <a href="#">Upgrade Now</a>
                            to access more great features.
                          </div>
                          <div class="fileuploader fileuploader-theme-dragdrop">
                            <input type="hidden" name="fileuploader-list-attachFiles">
                            <input type="file" name="attachFiles" style="position: absolute; z-index: -9999; height: 0px; width: 0px; padding: 0px; margin: 0px; line-height: 0; outline: 0px; border: 0px; opacity: 0;">
                            <div class="fileuploader-input">
                              <div class="fileuploader-input-inner">
                                <div class="fileuploader-icon-main">
                                  <i class="fas fa-cloud-upload-alt"></i>
                                </div>
                                <h3 class="fileuploader-input-caption">
                                  <span>Drag and drop files here</span>
                                </h3>
                                <p>or</p>
                                <button type="button" class="fileuploader-input-button">
                                  <span>Browse files</span>
                                </button>
                              </div>
                            </div>

                            <div class="fileuploader-items">
                              <ul class="fileuploader-items-list"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </v-dialog>






            <div class="form-group" id="taskContainer" style="display: none">
              <div class="col-sm-12">
                <div id="taskList" class="task-list ui-sortable"></div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12" style="margin-bottom: 20px">
                <input
                  type="button"
                  class="btn btn-primary"
                  value="Save"
                  id="btnSaveNote"
                  tabindex="3"
                />
                <span class="topLinks dropdown">
                    
                    <v-dialog v-model="dialog_public_note" width="auto">
                      <template v-slot:activator="{ props }">
                        <a id="noteAccessLabel" class="link-lockopen" v-bind="props">
                          <strong id="noteAccessText">Public Note</strong>
                          <span class="caret"></span>
                        </a>
                      </template>

                      

                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              @click="dialog_public_note = false"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                            <h4 class="modal-title" id="noteAccessModalLabel">
                              Note Read Permission
                            </h4>
                          </div>
                          <div class="modal-body">
                            <div class="radio">
                              <label>
                                <input
                                  type="radio"
                                  name="access"
                                  id="accesspublic"
                                  value="2"
                                  checked="checked"
                                />

                                Public Note
                              </label>
                            </div>
                            <div class="radio">
                              <label>
                                <input
                                  type="radio"
                                  name="access"
                                  id="accessprivate"
                                  value="1"
                                />

                                Private Note
                              </label>
                            </div>
                            <div class="radio">
                              <label>
                                <input
                                  type="radio"
                                  name="access"
                                  id="accesspasswordprotected"
                                  value="3"
                                />

                                Password Protected Note
                                <input type="text" name="password" placeholder="Password" />
                              </label>
                            </div>
                            <hr />

                            <h4>Note Edit Permission</h4>
                            <div class="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  name="quickedit"
                                  id="quickedit"
                                  value="true"
                                />

                                Allow other people with editor password to edit this note

                                <input
                                  type="text"
                                  name="quickeditpassword"
                                  id="quickeditpassword"
                                  placeholder="Editor Password"
                                />
                              </label>
                            </div>
                          </div>

                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" @click="dialog_public_note = false">
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                      
                    </v-dialog>
                </span>



                <span
                  id="actionMessage"
                  style="display: none"
                  class="alert-success"
                ></span>
              </div>



              <div class="col-md-12">
                
                <v-dialog
                  v-model="dialog_remove_file"
                  width="auto"
                >
                  <template v-slot:activator="{ props }">
                    <div v-bind="props">
                      <a>Remove all Ads</a>
                    </div>
                  </template>

                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          @click="dialog_remove_file = false"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                        <h4 class="modal-title" id="premiumPlanModalLabel">
                          Upgrade to Premium
                        </h4>
                      </div>
                      <div class="modal-body" id="premiumPlanContent">
                        <form
                          method="POST"
                          action="/premiumupgrade"
                          id="formUpgradeToPremium"
                        >
                          <div class="premium-features">
                            <div>
                              <b>aNotepad Premium</b>
                              enables the following additional features:
                            </div>
                            <ul>
                              <li>
                                <b> No Ads </b>
                                - No Ads in note editing and viewing
                              </li>
                              <li>
                                <b>File attachment</b>
                                - Upload and attach files to notes
                              </li>
                              <li>
                                <b>Image upload</b>
                                - Upload and insert images to notes
                              </li>
                              <li>
                                <b>Note version history</b>
                                - View note edit history versions
                              </li>
                              <li>
                                <b>Email notes</b>
                                - Send notes in email or as PDF attachment
                              </li>
                              <li>Priority support</li>
                              <li>
                                Only
                                <span class="price">$0.99</span>
                                /month, cancel anytime
                              </li>
                            </ul>
                            <div>
                              <button
                                type="button"
                                id="btnUpgradeNow"
                                class="btn"
                                value="Upgrade Now"
                              >Upgrade Now</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </v-dialog>

                <div
                  align="center"
                  data-freestar-ad="__336x280 __336x280"
                  id="anotepad_leaderboard_btf"
                  name="anotepad_leaderboard_btf"
                  data-google-query-id="CKGUne-w44ADFZGalgodKXcGkA"
                ></div>


              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        class="modal"
        id="manageNoteAccessModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="noteAccessLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title" id="noteAccessModalLabel">
                Note Read Permission
              </h4>
            </div>
          </div>
          <div class="modal-body">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="access"
                  id="accesspublic"
                  value="2"
                  checked="checked"
                />

                Public Note
              </label>
            </div>
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="access"
                  id="accessprivate"
                  value="1"
                />

                Private Note
              </label>
            </div>
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="access"
                  id="accesspasswordprotected"
                  value="3"
                />

                Password Protected Note
                <input type="text" name="password" placeholder="Password" />
              </label>
            </div>
            <hr />

            <h4>Note Edit Permission</h4>
            <div class="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="quickedit"
                  id="quickedit"
                  value="true"
                />

                Allow other people with editor password to edit this note

                <input
                  type="text"
                  name="quickeditpassword"
                  id="quickeditpassword"
                  placeholder="Editor Password"
                />
              </label>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>

      <div
        class="modal"
        id="noteVersionsModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="noteVersionsModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">
                Note Version History
              </h4>
            </div>
            <div class="modal-body" id="noteVersionsContent"></div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal"
        id="emailNoteModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="emailNoteModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title" id="emailNoteModalLabel">
                Send Note by Email
              </h4>
            </div>

            <div class="modal-body" id="emailNoteContent">
              <div class="alert alert-warning">
                This feature is available in Premium plan only.
                <a href="#">Upgrade Now</a>
                to access more great features.
              </div>
              <form role="form" class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label"> Send to Email </label>
                  <div class="col-sm-6">
                    <input
                      type="email"
                      name="emailNoteEmail"
                      id="emailNoteEmail"
                      placeholder="Email Address"
                      class="form-control"
                      maxlength="50"
                      value
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-3 control-label"> Note Format </label>
                  <div class="col-sm-6">
                    <div>
                      <input
                        name="emailNoteType"
                        id="emailNoteTypeHtml"
                        type="radio"
                        value="html"
                        checked="checked"
                      />
                      <label for="emailNoteTypeHtml" style="font-weight: normal"
                        >Email body</label
                      >
                    </div>

                    <div>
                      <input
                        name="emailNoteType"
                        id="emailNoteTypePdf"
                        type="radio"
                        value="pdf"
                      />
                      <label for="emailNoteTypePdf" style="font-weight: normal"
                        >PDF attachment</label
                      >
                    </div>

                    <div>
                      <input
                        name="emailNoteType"
                        id="emailNoteTypeDocx"
                        type="radio"
                        value="docx"
                      />
                      <label for="emailNoteTypeDocx" style="font-weight: normal"
                        >Word attachment</label
                      >
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-3 control-label"></label>
                  <div class="col-sm-6">
                    <div
                      id="emailNoteError"
                      class="alert alert-danger"
                      style="padding: 5px; display: none"
                    >
                      Invalid email address
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal"
        id="premiumPlanModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="premiumPlanModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title" id="premiumPlanModalLabel">
                Upgrade to Premium
              </h4>
            </div>
            <div class="modal-body" id="premiumPlanContent">
              <form
                method="POST"
                action="/premiumupgrade"
                id="formUpgradeToPremium"
              >
                <div class="premium-features">
                  <div>
                    <b>aNotepad Premium</b>
                    enables the following additional features:
                  </div>
                  <ul>
                    <li>
                      <b> No Ads </b>
                      - No Ads in note editing and viewing
                    </li>
                    <li>
                      <b>File attachment</b>
                      - Upload and attach files to notes
                    </li>
                    <li>
                      <b>Image upload</b>
                      - Upload and insert images to notes
                    </li>
                    <li>
                      <b>Note version history</b>
                      - View note edit history versions
                    </li>
                    <li>
                      <b>Email notes</b>
                      - Send notes in email or as PDF attachment
                    </li>
                    <li>Priority support</li>
                    <li>
                      Only
                      <span class="price">$0.99</span>
                      /month, cancel anytime
                    </li>
                  </ul>
                  <div>
                    <button
                      type="button"
                      id="btnUpgradeNow"
                      class="btn btn-primary"
                      value="Upgrade Now"
                    ></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal"
        id="importFileModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="importFileModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title" id="importFileModalLabel">
                Import Note from Word/PDF File
              </h4>
            </div>
            <div class="modal-body" id="importFileContent">
              <div class="fileuploader fileuploader-theme-dragdrop">
                <input
                  type="hidden"
                  name="fileuploader-list-importFiles"
                  value="[]"
                />
                <input
                  type="file"
                  name="importFiles"
                  style="
                    position: absolute;
                    z-index: -9999;
                    height: 0px;
                    width: 0px;
                    padding: 0px;
                    margin: 0px;
                    line-height: 0;
                    outline: 0px;
                    border: 0px;
                    opacity: 0;
                  "
                />
                <div class="fileuploader-input">
                  <div class="fileuploader-input-inner">
                    <div class="fileuploader-icon-main"></div>
                    <h3 class="fileuploader-input-caption">
                      <span>Drag and drop document here</span>
                    </h3>
                    <p>or</p>
                    <button type="button" class="fileuploader-input-button">
                      <span>Browse files</span>
                    </button>
                  </div>
                </div>
                <div class="fileuploader-items">
                  <ul class="fileuploader-items-list"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div class="displayNotes clearfix">
        <div>
          <form action="/search" role="form">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-8">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    name="keyword"
                    value="Search"
                    id="search"
                  />
                  <span class="input-group-btn">
                    <button
                      class="btn btn-primary"
                      type="submit"
                      id="search"
                      formaction="/search"
                    >
                      Search
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="notes">
          <div style="font-size: 16px; font-weight: bold">My Saved Notes</div>
          <div class="my_notes">
            <div class="topLinks">
              <strong>
                <a
                  href="#"
                  role="button"
                  title="Sort Alphabetically"
                  class="link-az"
                >
                  Sort by Title
                </a>
                <a
                  role="button"
                  href="#"
                  title="Most Recent First"
                  class="link-sort"
                >
                  Sort by Updated
                </a>
              </strong>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-3">
                <ul class="folder-list" id="folderList">
                  <li id="folder_ALL" class="folder-item active">
                    <a href="#">All Notes</a>
                  </li>
                  <li
                    id="folder_DEFAULT"
                    class="folder-item droppable ui-droppable"
                    title="Default Folder"
                  >
                    <a href="#">Inbox</a>
                  </li>
                </ul>
                <!-- <ul class="folder-option" id="folderOption">
                    <li>
                      <a href="#">Manage Folders</a>
                    </li>
                  </ul> -->

                <v-dialog v-model="dialog_folder_manager" width="auto">
                  <template v-slot:activator="{ props }">
                    <!-- <v-btn color="primary" v-bind="props"> Open Dialog </v-btn> -->
                    <ul
                      class="folder-option"
                      id="folderOption"
                      v-bind="props"
                      type="button"
                    >
                      <li>
                        <a>Manage Folders</a>
                      </li>
                    </ul>
                  </template>

                  <!-- <v-card>
                      <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog_folder_manager = false"
                          >Close Dialog</v-btn
                        >
                      </v-card-actions>
                    </v-card> -->

                  <div>
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="close"
                            @click="dialog_folder_manager = false"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <h4 class="modal-title" id="myModalLabel">
                            Manage Folders
                          </h4>
                        </div>
                        <div class="modal-body" id="manageFolderContent">
                          <div class="row">
                            <div class="col-xs-8">
                              <input
                                class="button_xs_8"
                                type="text"
                                id="newFolder"
                                maxlength="50"
                                placeholder="Folder Name"
                              />
                            </div>
                            <div class="col-xs-4">
                              <input
                                class="button_xs_4"
                                type="button"
                                value="Create New"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-default"
                            @click="dialog_folder_manager = false"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-dialog>
              </div>

              <div class="col-xs-12 col-sm-9">
                <ul class="saved_notes" id="savedNotes">
                  <div>No note here.</div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal"
        id="manageFolderModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="manageFolderModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">Manage Folders</h4>
            </div>
            <div class="modal-body" id="manageFolderContent"></div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal"
        id="shareFolderModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="shareFolderModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title">Share Folder</h4>
            </div>
            <div class="modal-body" id="shareFolderContent"></div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Plain Text Note" },
      { title: "Rich Text Note" },
      { title: "Task List" },
    ],
    dialog: false,
    dialog_folder_manager: false,
    dialog_attach_file: false,
    dialog_remove_file: false,
    dialog_public_note: false
  }),
  name: "HomeView",
  components: {},
};
</script>

<style>
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .containerMain {
    min-height: 385px;
  }
}
.containerMain {
  margin-top: 2%;
  min-height: 305px;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

p {
  margin: 0 0 10px;
}

.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.displaynone {
  display: none;
}
.alert-danger {
  font-weight: bold;
}

.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.displaynone {
  display: none;
}

.form-group {
  margin-bottom: 15px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

input {
  line-height: normal;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
}
.form-control {
  font-size: 16px;
}
.title,
.textarea {
  font-size: 14pt !important;
}
.title {
  font-weight: bold;
}
.topLinks {
  display: inline-block;
  height: 34px;
  padding: 6px 0;
}
.dropdown,
.dropup {
  position: relative;
}
.containerMain a {
  color: #10589b;
}
.topLinks a {
  padding: 5px;
  border-radius: 3px;
}

b,
strong {
  font-weight: 700;
}
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}
.topLinks {
  display: inline-block;
  height: 34px;
  padding: 6px 0;
}
a {
  color: #337ab7;
  text-decoration: none;
}
.link-add,
.link-read,
.link-email,
.link-import,
.link-share,
.link-attach,
.link-delete,
.link-download,
.link-move,
.link-history,
.link-lock,
.link-lockopen,
.link-lockpassword,
.link-sort,
.link-az,
.link-edit {
  display: inline-block;
  margin-left: 5px;
  padding-left: 22px !important;
  position: relative;
}
.containerMain a {
  color: #10589b;
}
.topLinks a {
  padding: 5px;
  border-radius: 3px;
}

:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.containerMain .link-add::after,
.containerMain .link-read::after,
.containerMain .link-email::after,
.containerMain .link-share::after,
.containerMain .link-import::after,
.containerMain .link-attach::after,
.containerMain .link-lock::after,
.containerMain .link-lockopen::after,
.link-lockpassword::after,
.containerMain .link-delete::after,
.containerMain .link-download::after,
.containerMain .link-move::after,
.containerMain .link-history::after,
.containerMain .link-sort::after,
.containerMain .link-az::after,
.containerMain .link-edit::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 800px 20px;
  background-image: url(../../assets/home_img/icon_sprites.png);
}
.containerMain .link-import::after {
  background-position: left -640px center;
}
.containerMain .link-share::after {
  background-position: left -560px center;
}
.btn-group-vertical > .btn-group:after,
.btn-group-vertical > .btn-group:before,
.btn-toolbar:after,
.btn-toolbar:before,
.clearfix:after,
.clearfix:before,
.container-fluid:after,
.container-fluid:before,
.container:after,
.container:before,
.dl-horizontal dd:after,
.dl-horizontal dd:before,
.form-horizontal .form-group:after,
.form-horizontal .form-group:before,
.modal-footer:after,
.modal-footer:before,
.modal-header:after,
.modal-header:before,
.nav:after,
.nav:before,
.navbar-collapse:after,
.navbar-collapse:before,
.navbar-header:after,
.navbar-header:before,
.navbar:after,
.navbar:before,
.pager:after,
.pager:before,
.panel-body:after,
.panel-body:before,
.row:after,
.row:before {
  display: table;
  content: " ";
}
.btn-group-vertical > .btn-group:after,
.btn-toolbar:after,
.clearfix:after,
.container-fluid:after,
.container:after,
.dl-horizontal dd:after,
.form-horizontal .form-group:after,
.modal-footer:after,
.modal-header:after,
.nav:after,
.navbar-collapse:after,
.navbar-header:after,
.navbar:after,
.pager:after,
.panel-body:after,
.row:after {
  clear: both;
}

.title,
.textarea {
  font-size: 14pt !important;
}
textarea.form-control {
  height: auto;
}
#edit_textarea.textarea {
  width: 100%;
  line-height: 140%;
}

.task-list {
  background-color: #fff;
  padding: 6px 12px 6px 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 200px;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

input {
  line-height: normal;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
.link-add,
.link-read,
.link-email,
.link-import,
.link-share,
.link-attach,
.link-delete,
.link-download,
.link-move,
.link-history,
.link-lock,
.link-lockopen,
.link-lockpassword,
.link-sort,
.link-az,
.link-edit {
  display: inline-block;
  margin-left: 5px;
  padding-left: 22px !important;
  position: relative;
}

.containerMain .link-lockopen::after {
  background-position: left -360px center;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
[data-freestar-ad] {
  vertical-align: top;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}
[data-freestar-ad*="__336x280"] {
  --height: 280px;
  height: 280px;
  height: calc(var(--height) + 0px) !important;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9 {
    float: left;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-12 {
    width: 100%;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.notes {
  margin: 2% 0;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 768px) {
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9 {
    float: left;
  }
}
@media (min-width: 768px) {
  .col-sm-8 {
    width: 66.66666667%;
  }
}
@media (min-width: 992px) {
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9 {
    float: left;
  }
}
@media (min-width: 992px) {
  .col-md-6 {
    width: 50%;
  }
}
@media (min-width: 1200px) {
  .col-lg-1,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9 {
    float: left;
  }
}

@media (min-width: 1200px) {
  .col-lg-4 {
    width: 33.33333333%;
  }
}

.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group .form-control,
.input-group-addon,
.input-group-btn {
  display: table-cell;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group .form-control,
.input-group-addon,
.input-group-btn {
  display: table-cell;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.btn-group-vertical > .btn-group:after,
.btn-group-vertical > .btn-group:before,
.btn-toolbar:after,
.btn-toolbar:before,
.clearfix:after,
.clearfix:before,
.container-fluid:after,
.container-fluid:before,
.container:after,
.container:before,
.dl-horizontal dd:after,
.dl-horizontal dd:before,
.form-horizontal .form-group:after,
.form-horizontal .form-group:before,
.modal-footer:after,
.modal-footer:before,
.modal-header:after,
.modal-header:before,
.nav:after,
.nav:before,
.navbar-collapse:after,
.navbar-collapse:before,
.navbar-header:after,
.navbar-header:before,
.navbar:after,
.navbar:before,
.pager:after,
.pager:before,
.panel-body:after,
.panel-body:before,
.row:after,
.row:before {
  display: table;
  content: " ";
}

.btn-group-vertical > .btn-group:after,
.btn-toolbar:after,
.clearfix:after,
.container-fluid:after,
.container:after,
.dl-horizontal dd:after,
.form-horizontal .form-group:after,
.modal-footer:after,
.modal-header:after,
.nav:after,
.navbar-collapse:after,
.navbar-header:after,
.navbar:after,
.pager:after,
.panel-body:after,
.row:after {
  clear: both;
}

.notes {
  margin: 2% 0;
}
.notes .my_notes {
  margin: 1% 0;
}
.topLinks {
  display: inline-block;
  height: 34px;
  padding: 6px 0;
}
.containerMain a {
  color: #10589b;
}
.topLinks a {
  padding: 5px;
  border-radius: 3px;
}
.containerMain .link-az::after {
  background-position: left -680px center;
}
.containerMain .link-sort::after {
  background-position: left -600px center;
}

ul.folder-list {
  list-style: none;
  list-style-position: inside;
  margin: 1em 0 0 0;
  padding: 0;
}
ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}

ul.folder-list li.folder-item.active {
  font-weight: bold;
}

ul.folder-list li.folder-item {
  background: url(../../assets/home_img/folder.svg) no-repeat;
  background-size: 24px 24px;
  padding: 0 2px 0 32px;
  font-size: 16px;
  margin: 1em 0;
  line-height: 150%;
  vertical-align: middle;
}
ul.folder-option {
  list-style: none;
  list-style-position: inside;
  margin: 0 0 0 0;
  padding: 0;
}
ul.folder-option li {
  background: url(../../assets/home_img/folder_manage.svg) no-repeat;
  background-size: 24px 24px;
  padding: 0 2px 0 32px;
  font-size: 16px;
  margin: 1em 0;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  z-index: 2;
  margin-left: -1px;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group-btn > .btn {
  position: relative;
}

@media (min-width: 768px) {
  .col-sm-3 {
    width: 25%;
  }
}

.containerMain a:hover,
.containerMain a:focus {
  color: #55a1e0;
}
.containerMain .folder-action a:hover,
.containerMain .topLinks a:hover,
.containerMain .public {
  color: #fff;
  background-color: #4682b4;
}

.containerMain a:hover,
.containerMain a:focus {
  color: #55a1e0;
}
.topLinks {
    display: inline-block;
    height: 34px;
    padding: 6px 0;
}
.containerMain .link-add::after, .containerMain .link-read::after, .containerMain .link-email::after, .containerMain .link-share::after, .containerMain .link-import::after, .containerMain .link-attach::after, .containerMain .link-lock::after, .containerMain .link-lockopen::after, .link-lockpassword::after, .containerMain .link-delete::after, .containerMain .link-download::after, .containerMain .link-move::after, .containerMain .link-history::after, .containerMain .link-sort::after, .containerMain .link-az::after, .containerMain .link-edit::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 800px 20px;
    background-image: url(../../assets/home_img/icon_sprites.png);
}
.containerMain .link-attach::after {
    background-position: left -40px center;
}

.dropdown, .dropup {
    position: relative;
}
.topLinks {
    display: inline-block;
    height: 34px;
    padding: 6px 0;
}
.topLinks a {
    padding: 5px;
    border-radius: 3px;
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid\9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
.btn-primary {
    color: #fff !important;
    background-color: #337ab7;
    border-color: #2e6da4;
}
.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}


/* dialog */

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

.containerMain .modal-dialog {
  color: #1e1e1e;
}

.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  outline: 0;
}
.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}

button.close {
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.close {
  float: right;
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: 0.2;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button,
select {
  text-transform: none;
}

button {
  overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

.modal-header .close {
  margin-top: -2px;
}

.modal-title {
  margin: 0;
  line-height: 1.42857143;
}
.h4,
h4 {
  font-size: 18px;
}
.h4,
.h5,
.h6,
h4,
h5,
h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

.modal-body {
  position: relative;
  padding: 15px;
}
.checkbox,
.radio {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
.checkbox label,
.radio label {
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  cursor: pointer;
}

.checkbox,
.radio {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.checkbox + .checkbox,
.radio + .radio {
  margin-top: -5px;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
input {
  line-height: normal;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 4px 0 0;
  margin-top: 1px\9;
  line-height: normal;
}
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"],
.radio input[type="radio"],
.radio-inline input[type="radio"] {
  position: absolute;
  margin-top: 4px\9;
  margin-left: -20px;
}
.containerMain .modal-dialog input,
.containerMain .modal-dialog textarea,
.containerMain .modal-dialog select {
  background: #fff;
  color: #1e1e1e;
  border-radius: 4px;
  border: 1px solid #666;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
input {
  line-height: normal;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.containerMain .modal-dialog input,
.containerMain .modal-dialog textarea,
.containerMain .modal-dialog select {
  background: #fff;
  color: #1e1e1e;
  border-radius: 4px;
  border: 1px solid #666;
}
hr {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
.h4,
.h5,
.h6,
h4,
h5,
h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.h4,
h4 {
  font-size: 18px;
}

.checkbox,
.radio {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}

.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}

a {
  background-color: transparent;
}
a {
  color: #337ab7;
  text-decoration: none;
}
.containerMain a {
  color: #10589b;
}
.form-group {
  margin-bottom: 15px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger {
  font-weight: bold;
}

.premium-features {
  font-size: 14px;
  line-height: 180%;
}
b,
strong {
  font-weight: 700;
}

.premium-features li {
  list-style-position: inside;
}

.premium-features .price {
  font-weight: bold;
  color: #cb4b16;
}
.premium-features #btnUpgradeNow {
  margin: 10px 0;
}

.fileuploader,
.fileuploader *,
.fileuploader :after,
.fileuploader :before,
.fileuploader-popup,
.fileuploader-popup *,
.fileuploader-popup :after,
.fileuploader-popup :before {
  box-sizing: border-box;
}
.fileuploader,
.fileuploader-popup {
  font-family: Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  text-align: left;
}
.fileuploader {
  display: block;
  width: 100%;
  padding: 16px;
  margin: 16px 0;
  background: #fafbfd;
  border-radius: 6px;
}
.fileuploader {
  background: #fff;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
input {
  line-height: normal;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.fileuploader,
.fileuploader *,
.fileuploader :after,
.fileuploader :before,
.fileuploader-popup,
.fileuploader-popup *,
.fileuploader-popup :after,
.fileuploader-popup :before {
  box-sizing: border-box;
}
.containerMain .modal-dialog input,
.containerMain .modal-dialog textarea,
.containerMain .modal-dialog select {
  background: #fff;
  color: #1e1e1e;
  border-radius: 4px;
  border: 1px solid #666;
}

.fileuploader-input {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border: 1px solid transparent;
  border-radius: 30px;
  cursor: pointer;
}
.fileuploader-theme-dragdrop .fileuploader-input {
  display: block;
  padding: 40px 0;
  background: #fff;
  border: 2px dashed #c2cdda;
  border-radius: 14px;
  text-align: center;
}

.fileuploader-icon-main {
  display: inline-block;
  font-size: 18px;
  color: #789bec;
}
.fileuploader-theme-dragdrop .fileuploader-input .fileuploader-icon-main {
  display: block;
  font-size: 56px;
  margin: 0 auto;
  margin-bottom: 26px;
}
.fileuploader-theme-dragdrop .fileuploader-input .fileuploader-input-inner > * {
  -webkit-transition: 500ms cubic-bezier(0.17, 0.67, 0, 1.01);
  transition: 500ms cubic-bezier(0.17, 0.67, 0, 1.01);
}

.fileuploader-input .fileuploader-input-button,
.fileuploader-input .fileuploader-input-caption,
.fileuploader-items .fileuploader-item .fileuploader-action,
.fileuploader-items .fileuploader-item .fileuploader-progressbar .bar,
.fileuploader-items
  .fileuploader-item
  .progress-bar2
  .fileuploader-progressbar
  .bar,
.fileuploader-items .fileuploader-item span.fileuploader-action-popup,
.fileuploader-popup
  .fileuploader-popup-footer
  .fileuploader-popup-tools
  li
  [data-action],
.fileuploader-popup
  .fileuploader-popup-footer
  .fileuploader-popup-zoomer
  button[data-action],
.fileuploader-popup .fileuploader-popup-header .fileuploader-popup-button,
.fileuploader-popup
  .fileuploader-popup-header
  .fileuploader-popup-button.button-success {
  -webkit-transition: 0.7s cubic-bezier(0.17, 0.67, 0, 1.01);
  -o-transition: 0.7s cubic-bezier(0.17, 0.67, 0, 1.01);
  transition: 0.7s cubic-bezier(0.17, 0.67, 0, 1.01);
}
.fileuploader-input .fileuploader-input-caption {
  position: relative;
  display: inline-block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-item-align: start;
  align-self: flex-start;
  padding: 13px 16px;
  margin-right: 16px;
  background: #fff;
  border: 1px solid #ebeef1;
  border-radius: 30px;
  color: #789bec;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.01);
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.fileuploader-theme-dragdrop .fileuploader-input h3 {
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  font-size: 18px;
  font-weight: bold;
  color: #5b5b7b;
  white-space: normal;
  box-shadow: none;
}
.fileuploader-theme-dragdrop .fileuploader-input .fileuploader-input-inner > * {
  -webkit-transition: 500ms cubic-bezier(0.17, 0.67, 0, 1.01);
  transition: 500ms cubic-bezier(0.17, 0.67, 0, 1.01);
}

.fileuploader-theme-dragdrop .fileuploader-input p {
  margin: 0;
  padding: 0;
  color: #90a0bc;
  margin-bottom: 12px;
}
.fileuploader-items .fileuploader-items-list {
  display: block;
  margin: 0 -16px;
  padding: 0;
  list-style: none;
}

.containerMain .modal-dialog {
  color: #1e1e1e;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}

.fileuploader-input {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border: 1px solid transparent;
  border-radius: 30px;
  cursor: pointer;
}
.fileuploader-theme-dragdrop .fileuploader-input {
  display: block;
  padding: 40px 0;
  background: #fff;
  border: 2px dashed #c2cdda;
  border-radius: 14px;
  text-align: center;
}
.fileuploader-items .fileuploader-items-list {
  display: block;
  margin: 0 -16px;
  padding: 0;
  list-style: none;
}

@media (min-width: 768px) {
  .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
}
@media (min-width: 768px) {
  .col-sm-3 {
    width: 25%;
  }
}
@media (min-width: 768px) {
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9 {
    float: left;
  }
}

.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.form-group {
  margin-bottom: 15px;
}

.containerMain .modal-dialog {
  color: #1e1e1e;
}

.fileuploader-input .fileuploader-input-button,
.fileuploader-popup .fileuploader-popup-header .fileuploader-popup-button,
.fileuploader-popup
  .fileuploader-popup-header
  .fileuploader-popup-button.button-success {
  display: inline-block;
  margin: 0;
  padding: 14px 22px;
  border: none;
  border-radius: 30px;
  outline: 0;
  font-weight: 700;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
}
.fileuploader-input .fileuploader-input-button,
.fileuploader-popup
  .fileuploader-popup-header
  .fileuploader-popup-button.button-success {
  background: #9658fe;
  background: -moz-linear-gradient(-45deg, #3a8ffe 0, #9658fe 100%);
  background: -webkit-linear-gradient(-45deg, #3a8ffe 0, #9658fe 100%);
  background: linear-gradient(135deg, #3a8ffe 0, #9658fe 100%);
  background-size: 140% auto;
  background-position: center;
  color: #fff;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
}
.fileuploader-input .fileuploader-input-button,
.fileuploader-items .fileuploader-item .fileuploader-item-icon,
.fileuploader-items .fileuploader-item .progress-bar2 .fileuploader-progressbar,
.fileuploader-popup .fileuploader-cropper,
.fileuploader-popup .fileuploader-cropper *,
.fileuploader-popup
  .fileuploader-popup-footer
  .fileuploader-popup-tools
  li
  [data-action],
.fileuploader-popup .fileuploader-popup-header .fileuploader-popup-button,
.fileuploader-popup
  .fileuploader-popup-header
  .fileuploader-popup-button.button-success,
.fileuploader-popup .fileuploader-popup-move,
.fileuploader-popup .fileuploader-popup-node .fileuploader-popup-file-icon {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.fileuploader-theme-dragdrop .fileuploader-input .fileuploader-input-inner > * {
  -webkit-transition: 500ms cubic-bezier(0.17, 0.67, 0, 1.01);
  transition: 500ms cubic-bezier(0.17, 0.67, 0, 1.01);
}

.fileuploader,
.fileuploader *,
.fileuploader :after,
.fileuploader :before,
.fileuploader-popup,
.fileuploader-popup *,
.fileuploader-popup :after,
.fileuploader-popup :before {
  box-sizing: border-box;
}

#manageFolderContent .row {
  margin: 0 0 1em 0;
  display: flex;
  flex-direction: row;
}
.col-xs-8 {
  width: 66.66666667%;
}
.containerMain .modal-dialog input,
.containerMain .modal-dialog textarea,
.containerMain .modal-dialog select {
  background: #fff;
  color: #1e1e1e;
  border-radius: 4px;
  border: 1px solid #666;
}
.col-xs-4 {
  width: 33.33333333%;
}
.modal-body {
  position: relative;
  padding: 15px;
}

@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
  .col-sm-3 {
    width: 25%;
  }
  .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
  .col-sm-6 {
    width: 50%;
  }
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .col-sm-12 {
    width: 100%;
  }
}

.button_xs_4 {
  background: #fff;
  color: #1e1e1e;
  border-radius: 4px;
  border: 1px solid #666;
}
.button_xs_8 {
  background: #fff;
  color: #1e1e1e;
  border-radius: 4px;
  border: 1px solid #666;
}

.fileuploader-theme-dragdrop .fileuploader-input {
    display: block;
    padding: 40px 0;
    background: #fff;
    border: 2px dashed #c2cdda;
    border-radius: 14px;
    text-align: center;
}
/* End Dialog */


.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}

.containerMain .modal-dialog {
  color: #1e1e1e;
}
.modal.in .modal-dialog {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    -o-transform: translate(0,0);
    transform: translate(0,0);
}
.modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 9px rgba(0,0,0,.5);
    box-shadow: 0 3px 9px rgba(0,0,0,.5);
    outline: 0;
}

.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
}


.close {
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
}
button.close {
  padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  
.modal-header .close {
    margin-top: -2px;
}

.h4, h4 {
    font-size: 18px;
}
.modal-title {
    margin: 0;
    line-height: 1.42857143;
}
.modal-body {
    position: relative;
    padding: 15px;
}
.alert {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
}
.alert-warning {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
}

.fileuploader, .fileuploader *, .fileuploader :after, .fileuploader :before, .fileuploader-popup, .fileuploader-popup *, .fileuploader-popup :after, .fileuploader-popup :before {
    box-sizing: border-box;
}
.fileuploader, .fileuploader-popup {
    font-family: Roboto,"Segoe UI","Helvetica Neue",Arial,sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: normal;
    text-align: left;
}
.fileuploader {
    display: block;
    width: 100%;
    padding: 16px;
    margin: 16px 0;
    background: #fafbfd;
    border-radius: 6px;
}
.fileuploader {
    background: #fff;
}
.modal-dialog input, .containerMain .modal-dialog textarea, .containerMain .modal-dialog select {
    background: #fff;
    color: #1e1e1e;
    border-radius: 4px;
    border: 1px solid #666;
}
input[type=file] {
    display: block;
}

.fileuploader-input {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 1px solid transparent;
    border-radius: 30px;
    cursor: pointer;
}
.fileuploader-theme-dragdrop .fileuploader-input {
    display: block;
    padding: 40px 0;
    background: #fff;
    border: 2px dashed #c2cdda;
    border-radius: 14px;
    text-align: center;
}
.fileuploader-theme-dragdrop .fileuploader-input .fileuploader-icon-main {
    display: block;
    font-size: 56px;
    margin: 0 auto;
    margin-bottom: 26px;
}
.fileuploader-theme-dragdrop .fileuploader-input .fileuploader-input-inner>* {
    -webkit-transition: 500ms cubic-bezier(.17,.67,0,1.01);
    transition: 500ms cubic-bezier(.17,.67,0,1.01);
}
.fileuploader-input .fileuploader-input-caption {
    position: relative;
    display: inline-block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-item-align: start;
    align-self: flex-start;
    padding: 13px 16px;
    margin-right: 16px;
    background: #fff;
    border: 1px solid #ebeef1;
    border-radius: 30px;
    color: #789bec;
    box-shadow: 0 4px 18px rgba(0,0,0,.01);
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}


.fileuploader-theme-dragdrop .fileuploader-input h3 {
    margin: 0;
    margin-bottom: 8px;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    font-size: 18px;
    font-weight: bold;
    color: #5b5b7b;
    white-space: normal;
    box-shadow: none;
}

.fileuploader-theme-dragdrop .fileuploader-input .fileuploader-input-inner>* {
    -webkit-transition: 500ms cubic-bezier(.17,.67,0,1.01);
    transition: 500ms cubic-bezier(.17,.67,0,1.01);
}
.fileuploader-theme-dragdrop .fileuploader-input p {
    margin: 0;
    padding: 0;
    color: #90a0bc;
    margin-bottom: 12px;
}
.fileuploader-items .fileuploader-items-list {
    display: block;
    margin: 0 -16px;
    padding: 0;
    list-style: none;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}
button#btnUpgradeNow {
    background: #fff;
    color: #1e1e1e;
    border-radius: 4px;
    border: 1px solid #666;
}
.premium-features #btnUpgradeNow {
    margin: 10px 0;
}

.containerMain a {
  cursor: pointer;
}

.v-list.v-theme--light.v-list--density-default.v-list--one-line {
    width: 158px;
}
.v-list-item--density-default.v-list-item--one-line {
    min-height: 36px;
    padding-top: 4px;
    padding-bottom: 4px;
}
.v-list-item-title {
  font-size: 0.9rem;
}
@media (min-width: 768px){
  .modal-dialog {
      width: 600px;
      margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0,0,0,.5);
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
}

}
</style>
