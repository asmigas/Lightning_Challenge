({ 
    doInit : function(component, event, helper) {
        var root_nav = component.find('root--nav');

        var header = component.get("v.header");
        if(header) {
        	$A.util.addClass(root_nav, 'mydatepicker--nav--color-none'); 
        }
 
        var currentDate = component.get("v.currentDate");
        var date = new Date(currentDate);  
        var format = component.get("v.format");
        component.set("v.currentDateTemp", date);
        component.set("v.currentDate", $A.localizationService.formatDate(date, format));
 //       component.set("v.informCurrentDate", $A.localizationService.formatDate(date, "MMMM - YYYY"));
 //       component.set("v.headerDate", $A.localizationService.formatDate(date, "EEEE, MMM. DD"));
 //       component.set("v.headerYear", $A.localizationService.formatDate(date, "YYYY"));
        helper.createDateCurrent(component, event, date);  
    },
    
    myAction : function(component, event, helper) {
        helper.blurtoggleVisibility(component, event);      	
        var cmpTarget = component.find('mainPickerClass'); 
        //var animation = component.get("v.animation");
        window.setTimeout(
        	$A.getCallback(function() {
            	event.stopPropagation();
            	$A.util.removeClass(cmpTarget, 'ease');
            }), 1
        ); 
      
        var format = component.get("v.format");
        var dateInput = component.find('date-input').getElement();
        
        var timestamp = new Date(dateInput.value); //$A.localizationService.formatDate(dateInput.value, format)
		if (isNaN(timestamp) == false) {
          var date = new Date(timestamp);
        } else { var date = new Date(); }
        //console.log(timestamp);
        //console.log(dateInput);
        //console.log(dateInput.value);
        
        component.set("v.informCurrentDate", $A.localizationService.formatDate(date, "MMMM - YYYY"));
        //component.set("v.informCurrentDate", date.toLocaleString("en-us", {month: "long"})); 
        component.set("v.currentDateTemp", date);
        component.set("v.currentDate", $A.localizationService.formatDate(date, format));
        component.set("v.headerDate", $A.localizationService.formatDate(date, "EEEE, MMM. DD"));
        component.set("v.headerYear", $A.localizationService.formatDate(date, "YYYY"));
        component.set("v.activeSelectPickerDayMonthYear", 0);
        helper.createDateCurrent(component, event, date);        
    },
  
    selectMothYear : function(component, event, helper) { 
        event.stopPropagation();
        var currentDate = component.get("v.currentDateTemp");
        var date = new Date(currentDate);
 
		var activeSelect = component.get("v.activeSelectPickerDayMonthYear");
        if(parseInt(activeSelect) == 0) {
            component.set("v.activeSelectPickerDayMonthYear", 1);
            component.set("v.informCurrentDate", date.getFullYear());
        	helper.createMonth(component, event, date);             
        } else if(parseInt(activeSelect) == 1) {
            component.set("v.activeSelectPickerDayMonthYear", 2);
        	helper.createYear(component, event, date.getFullYear());
        }
        
        var animation = component.get("v.animation");
        if(animation) {
            var rootContent = component.find('root--content');
            $A.util.removeClass(rootContent, 'mydatepicker--content--anime');        
            //var rootContent = component.find('root--content');
            window.setTimeout(
                $A.getCallback(function() {
                    $A.util.toggleClass(rootContent, 'mydatepicker--content--anime')
                }), 1
            );
        }      
    },
    
    next : function(component, event, helper) {
        event.stopPropagation();
        var activeSelect = component.get("v.activeSelectPickerDayMonthYear");              
        if(parseInt(activeSelect) == 0) {
            helper.nextDay(component, event);   
        } else if(parseInt(activeSelect) == 1) {
        	helper.nextMonth(component, event);       
        } else {
        	helper.nextYear(component, event);   
        }        
    },
    
    preview : function(component, event, helper) {
        event.stopPropagation();
        var activeSelect = component.get("v.activeSelectPickerDayMonthYear");
        if(parseInt(activeSelect) == 0) {
            helper.previewDay(component, event);
        } else if(parseInt(activeSelect) == 1) {
        	helper.previewMonth(component, event);    
        } else {
        	helper.previewYear(component, event);    
        }        
    },    
        
    setCurrentDate : function(component, event, helper){
        event.stopPropagation();
        var dateClick = event.target.getAttribute("data-currentdate");       
        var date = new Date(dateClick);
        var format = component.get("v.format");
        component.set("v.currentDateTemp", date);
        component.set("v.currentDate", $A.localizationService.formatDate(date, format));
        helper.blurtoggleVisibility(component, event);
    },
    
    setCurrentMonth : function(component, event, helper){
        event.stopPropagation();
    	var month = event.target.getAttribute("data-currentmonth"); 
        var currentDate = component.get("v.currentDateTemp");
        var d = new Date(currentDate);
        var date = new Date(d.getFullYear(), month, d.getDate()); 
        component.set("v.informCurrentDate", $A.localizationService.formatDate(date, "MMMM - YYYY"));
        //component.set("v.informCurrentDate", date.toLocaleString("en-us", {month: "long"}));  
        component.set("v.currentDateTemp", date);
        component.set("v.activeSelectPickerDayMonthYear", 0);
        helper.createDateCurrent(component, event, date); 
    },
    
    setCurrentYear : function(component, event, helper){
        event.stopPropagation();
    	var year = event.target.getAttribute("data-current_year"); 
        var currentDate = component.get("v.currentDateTemp");
        var d = new Date(currentDate);
        var date = new Date(year, d.getMonth(), d.getDate());
        component.set("v.informCurrentDate", date.toLocaleString("en-us", {year: "numeric"}));  
        component.set("v.currentDateTemp", date);
        component.set("v.activeSelectPickerDayMonthYear", 1);
        helper.createMonth(component, event, date);
    },
     
    setToday : function(component, event, helper){
        event.stopPropagation();    
        var date = new Date();
        var format = component.get("v.format");
        component.set("v.currentDate", $A.localizationService.formatDate(date, format));
        helper.blurtoggleVisibility(component, event);      
    },
})