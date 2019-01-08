({     
    handleShowModal : function (component, event) {    
        event.stopPropagation();
        let modalBody;
        $A.createComponent("c:customCalendarDP", 
                           {
                            "currentDate" : component.get("v.currentDate"),
                            "formatDay" : component.get("v.formatDay"), 
                            "color" : component.get("v.color"), 
                            "bgcolor" : component.get("v.bgcolor"),
                            "format" : component.get("v.format"),
                            "header" : component.get("v.header"), 
                            "animation" : component.get("v.animation"),                              
                            "setDateEvent": component.getReference("c.setDatebyEvent")
                            },
                           function(components, status) {
                               //console.log(components);
                               if (status === "SUCCESS") {
                                   modalBody = components;//content;
                                   component.find('overlayLib').showCustomModal({
                                       //header: "Entered Details",
                                       body: modalBody,
                                       showCloseButton: false,
                                      // cssClass: "slds-slide-up-open",
                                       closeCallback: function() {
                                           console.log('Yoused the alert!');
                                       }
                                   }).then(function (overlay) {
             /*                          setTimeout(function(){ 
                                            //close the popover after 3 seconds
                                            overlay.close(); 
                                        }, 3000);
             */                           
                                    });
                               }
                           });
    },
  
    createDatePickerCustom : function (component, event) { 
        //event.stopPropagation();   
        var isExpandable = $A.util.hasClass(component.find("enablePicker-content"), "ease");
        //console.log(isExpandable);
        if(isExpandable )
        $A.createComponent("c:customCalendarDP",
                           {
                            "currentDate" : component.get("v.currentDate"),
                            "formatDay" : component.get("v.formatDay"), 
                            "color" : component.get("v.color"), 
                            "bgcolor" : component.get("v.bgcolor"),
                            "format" : component.get("v.format"),
                            "header" : component.get("v.header"), 
                            "animation" : component.get("v.animation"),                              
                            "setDateEvent": component.getReference("c.setDatebyEvent")
                            },
                           function (components, status, errorMessage) {
                                 if (status === 'SUCCESS') {
                                    component.set("v.datePickerCustom", []);
                                    let pageBody = component.get("v.datePickerCustom");                 
                                    pageBody.push(components);
                                    component.set("v.datePickerCustom", pageBody);
                                }
                                else 
                                {
                                    let toastEvent = $A.get("e.force:showToast");
                                    toastEvent.setParams({
                                        "title": "Error!",
                                        "message": "Failed to create list components."
                                    });
                                    toastEvent.fire();
                                }
                        	});        
    },
    
    blurtoggleVisibility : function(component, event) {
    	component.set("v.datePickerCustom", []);
        //event.stopPropagation();
        let cmpTarget = component.find("enablePicker-content");
        //console.log(cmpTarget);
        //component.set("v.isOpen", false);
        $A.util.addClass(cmpTarget, 'ease'); 
        //$A.get('e.force:refreshView').fire();
    },
    
})