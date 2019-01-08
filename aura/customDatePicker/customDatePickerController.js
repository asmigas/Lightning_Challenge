({ 
    doInit : function(component, event, helper) {
        let currentDate = component.get("v.currentDate");
        let date = new Date(currentDate);  
        let format = component.get("v.format");
        component.set("v.currentDate", $A.localizationService.formatDate(date, format));       
    },
    
    myAction : function(component, event, helper) {
       //event.stopPropagation();
        let device = $A.get("$Browser.formFactor");
        let enablePicker = component.get("v.enablePicker");
            if(enablePicker) {
                if(device != "DESKTOP") {
                    event.target.setAttribute("disabled", "true");                    
                    window.setTimeout(
                        $A.getCallback(function() {
                            event.stopPropagation();
                            event.target.removeAttribute("disabled");
                        }), 100
                    ); 
                    helper.handleShowModal(component, event);    
                } else {                    	
                        let format = component.get("v.format");
                        let dateInput = component.find('date-input').getElement();
                        
                        let timestamp = new Date(dateInput.value); //$A.localizationService.formatDate(dateInput.value, format)
                        let date;
                        if (isNaN(timestamp) == false) {
                           date = new Date(timestamp);
                        } else { date = new Date(); }
                        component.set("v.currentDate", $A.localizationService.formatDate(date, format)); 
                    	helper.blurtoggleVisibility(component, event);  
                    	 
                    	window.setTimeout(
                            $A.getCallback(function() { 
                                helper.createDatePickerCustom(component, event);
                        		let cmpTarget = component.find('enablePicker-content');
                        		$A.util.removeClass(cmpTarget, 'ease');    
								event.stopPropagation();
                            }), 1
                        );                                                         
                    }
          }        
    }, 

    setDatebyEvent: function(component, event, helper) {
        //event.stopPropagation();
        let setCurrentDate = event.getParam("setCurrentDate");
        //console.log('set date =',setCurrentDate);
        let date = new Date(setCurrentDate);
        let format = component.get("v.format");
        component.set("v.currentDateTemp", date);
        component.set("v.currentDate", $A.localizationService.formatDate(date, format));  
        helper.blurtoggleVisibility(component, event);
    },
/*    
    blurtoggleVisibility : function(component, event) {
        console.log('onblur');
        //event.stopPropagation();
    	component.set("v.datePickerCustom", []);
        let cmpTarget = component.find("enablePicker-content");
        $A.util.addClass(cmpTarget, 'ease'); 
    },
*/
})