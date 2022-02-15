import { usercontext } from './js/usercontext.js';
var externalPreviewPopup;
//window.ExternalPreviewPopup = (function() {
    var ExternalPreviewPopup ={
    
     close :function() {
        console.log(usercontext.TemplateName);
        backtoParentPage();
        // externalPreviewPopup.style.visibility = 'none'; 
    },

     initPreviewPopup : function() {
        var div = document.createElement('div');
        div.innerHTML = '\
            <div id="externalPreviewPopup" class="cls-externalPreviewPopup-visible">\
                <div class="modal-container">\
                    <div class="modal-header-container">\
                        <div class="cls-modal-header-section">\
                            <button id="previewback" type="button" class="cls-left-icon-modal cls-icon-customize-btn cls-custom-padding-back-icon close tooltip">\
                                <span class="tooltiptext">Back to Editor</span>\
                                <img src="./img/svg-icons/back-svg.svg" alt="back">\
                            </button>\
                            <h4 class="modal-title">'+usercontext.TemplateName+'</h4>\
                            <button id="eseBtn" type="button" class="close modal-close-button">\
                                <span>× esc</span>\
                            </button>\
                        </div>\
                    </div>\
                    <div id="content"  class="preview-container-fluid">\
                       <div class="preview-row">\
                            <div class="preview-col-sm-8">\
                                <div class="esdev-desktop-device">\
                                    <div class="esdev-email-window-panel">\
                                    <div class="esdev-email-subject" style="min-height: 20px"></div>\
                                    </div>\
                                    <div class="esdev-desktop-device-screen">\
                                        <iframe id="iframeDesktop" frameborder="0" ></iframe>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="preview-col-sm-4 esdev-no-padding-left">\
                                <div class="cls-mobile-device-responsive">\
                                    <div class="esdev-mobile-device center-block">\
                                        <div class="esdev-mobile-device-screen">\
                                            <img src="mobile-view-top-bar.png" alt="">\
                                            <iframe id="iframeMobile" frameborder="0" width="100%" height="75%"></iframe>\
                                            <img class="esdev-mail-bottom-bar" src="mobile-view-bottom-bar.png" alt="">\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                       </div>\
                    </div>\
                </div>\
            </div>';
        document.body.appendChild(div);

        externalPreviewPopup = document.getElementById('externalPreviewPopup');
        externalPreviewPopup.querySelector('.close').addEventListener('click', this.close);
        $('#previewback').on('click', function(){
            console.log(usercontext.TemplateName);
            backtoParentPage();
            // externalPreviewPopup.style.visibility = 'hidden';            
        });
        $('#eseBtn').on('click', function(){
            console.log(usercontext.TemplateName);
            backtoParentPage();
            // externalPreviewPopup.style.visibility = 'hidden';            
        });
    },
    
     openPreviewPopup : function(html) {
        if (!externalPreviewPopup) {
           this.initPreviewPopup();
        }
        this.updateContent(html);
        const modalPopUpElement = document.getElementById('externalPreviewPopup');
        modalPopUpElement.style.bottom = '0%';
        // externalPreviewPopup.style.visibility = 'visible';
    },
    
     updateContent : function(html) {
        var iframeDesktop = document.querySelector('#iframeDesktop');
        iframeDesktop.contentWindow.document.open('text/html', 'replace');
        iframeDesktop.contentWindow.document.write(html);
        iframeDesktop.contentWindow.document.close();

        var iframeMobile = document.querySelector('#iframeMobile');
        iframeMobile.contentWindow.document.open('text/html', 'replace');
        iframeMobile.contentWindow.document.write(html);
        iframeMobile.contentWindow.document.close();
    },

    
       
        
     
    // return {
    //     openPreviewPopup: openPreviewPopup
    // };
    }
        
    function backtoParentPage(){
        const modalPopUpElement = document.getElementById('externalPreviewPopup');        
        const previewBtnElement = document.getElementById('previewButton');
        const previewIconElement = document.getElementById('preview-icon');
        const btnLoaderElement = document.getElementById('btn-loader');        
        previewBtnElement.classList.remove("cls-loader-customize-padding-icon");
        modalPopUpElement.classList.add("cls-externalPreviewPopup-hidden");       
        modalPopUpElement.style.bottom = '100%';
        previewIconElement.style.display = 'unset';
        btnLoaderElement.style.display = 'none';
    }
export{ExternalPreviewPopup ,backtoParentPage}