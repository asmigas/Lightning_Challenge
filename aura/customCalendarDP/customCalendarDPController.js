({ 
    doInit : function(component, event, helper) {
        //event.stopPropagation();
        let currentDate = component.get("v.currentDate");
        let date = new Date(currentDate);  
        let format = component.get("v.format");
        component.set("v.currentDateTemp", date);
        component.set("v.currentDate", $A.localizationService.formatDate(date, format));
        component.set("v.informCurrentDate", $A.localizationService.formatDate(date, "MMMM - YYYY"));
        component.set("v.headerDate", $A.localizationService.formatDate(date, "EEEE, MMM. DD"));
        component.set("v.headerYear", $A.localizationService.formatDate(date, "YYYY"));
        component.set("v.activeSelectPickerDayMonthYear", 0);

        helper.createDateCurrent(component, event, date);
        //helper.deleteContentAnimation(component, event);
        //console.log('init started');
        helper.selectAnimationReverce(component, event);         
    },

    selectMothYear : function(component, event, helper) { 
        event.stopPropagation();
        let currentDate = component.get("v.currentDateTemp");
        let date = new Date(currentDate);
 
		let activeSelect = component.get("v.activeSelectPickerDayMonthYear");
        if(parseInt(activeSelect) == 0) {
            component.set("v.activeSelectPickerDayMonthYear", 1);
            component.set("v.informCurrentDate", date.getFullYear());
        	helper.createMonth(component, event, date);             
        } else if(parseInt(activeSelect) == 1) {
            component.set("v.activeSelectPickerDayMonthYear", 2);
        	helper.createYear(component, event, date.getFullYear());
        }
        
        helper.selectAnimation(component, event);      
    },
    
    next : function(component, event, helper) {
        event.stopPropagation();
        let activeSelect = component.get("v.activeSelectPickerDayMonthYear");              
        if(parseInt(activeSelect) == 0) {
            helper.nextDay(component, event);   
        } else if(parseInt(activeSelect) == 1) {
        	helper.nextMonth(component, event);       
        } else {
        	helper.nextYear(component, event);   
        }   
        helper.nextAnimation(component, event);
    },
    
    preview : function(component, event, helper) {
        event.stopPropagation();
        let activeSelect = component.get("v.activeSelectPickerDayMonthYear");
        if(parseInt(activeSelect) == 0) {
            helper.previewDay(component, event);
        } else if(parseInt(activeSelect) == 1) {
        	helper.previewMonth(component, event);    
        } else {
        	helper.previewYear(component, event);    
        } 
        helper.prewAnimation(component, event);
    },    
        
    setCurrentDate : function(component, event, helper){
        event.stopPropagation();
        helper.setDatePicker(component, event, event.target.getAttribute("data-currentdate"));              
    },
    
    setToday : function(component, event, helper){
        let date = new Date();   
        helper.setDatePicker(component, event, date.toISOString()); 
    },
    
    setCurrentMonth : function(component, event, helper){
        event.stopPropagation();
    	let month = event.target.getAttribute("data-currentmonth"); 
        let currentDate = component.get("v.currentDateTemp");
        let d = new Date(currentDate);
        let date = new Date(d.getFullYear(), month, d.getDate()); 
        component.set("v.informCurrentDate", $A.localizationService.formatDate(date, "MMMM - YYYY"));
        //component.set("v.informCurrentDate", date.toLocaleString("en-us", {month: "long"}));  
        component.set("v.currentDateTemp", date);
        component.set("v.activeSelectPickerDayMonthYear", 0);
        
        helper.createDateCurrent(component, event, date);
        helper.selectAnimationReverce(component, event);
    },
    
    setCurrentYear : function(component, event, helper){
        event.stopPropagation();
    	let year = event.target.getAttribute("data-current_year"); 
        let currentDate = component.get("v.currentDateTemp");
        let d = new Date(currentDate);
        let date = new Date(year, d.getMonth(), d.getDate());
        component.set("v.informCurrentDate", date.toLocaleString("en-us", {year: "numeric"}));  
        component.set("v.currentDateTemp", date);
        component.set("v.activeSelectPickerDayMonthYear", 1);
        
        helper.createMonth(component, event, date);
        helper.selectAnimationReverce(component, event);
    },
    
   closeModalWindow : function(component, event, helper) {
       let device = $A.get("$Browser.formFactor");
       if(device != "DESKTOP") {
   			component.find("overlayLib").notifyClose();  
       }
   },
})