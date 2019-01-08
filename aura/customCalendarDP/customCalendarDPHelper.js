({  
        createDateCurrent : function getDaysInMonth(component, event, d)  {
        	let date = new Date(d.getFullYear(), d.getMonth(), 1);
            let month = date.getMonth();
        	let days = [];
            let formatDay = component.get("v.formatDay");
            component.set("v.dates", []);
            let startDay = 0;
            if(formatDay == 'Euro' ) {
                startDay = 1;
            } else {startDay = 0;}
        
            if(date.getDay() != startDay) {
                while (date.getDay() != startDay) {  
                    date.setDate(date.getDate() - 1);
                    days.push(new Date(date));                                     
                }
            }
        	days = days.reverse();
        	//date = new Date(2018, 7, 1);
        	date = new Date(d.getFullYear(), d.getMonth(), 1);
            while (date.getMonth() === month) {
                days.push(new Date(date));                 
                date.setDate(date.getDate() + 1);
            }
        
        	//date = new Date(2018, 8, 1);
        	date = new Date(d.getFullYear(), d.getMonth()+1, 1);
        	if((date.getDay()-1 != 6 && days.length != 42)) {
                while ( days.length != 42) { //((date.getDay() != 0 && days.length != 42)) {  
                    days.push(new Date(date));
                    //console.log('days',date.getDate());
                    date.setDate(date.getDate() + 1);                      
                }
            }
        //console.log('days',days.length);
        component.set("v.dates", days);
		this.createDays(component, event, days, month, d);
    },
 
    createDays : function(component, event, days, month, currentDateTemp) {
        	let currentDateCmp = component.get("v.currentDate");
        	let currentDate = new Date(currentDateCmp);
        	let today = new Date();
            //let weekDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            let weekDay = ['Su','Mo','Tu','We','Th','Fr','Sa'];
        	let weekFullDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            //let cont = component.find('root--nav--day');
        	//cont.set("v.body", []);
        	let newComponentsDay = [];
        	let formatDay = component.get("v.formatDay");
        	if(formatDay == 'Euro' ) {
                weekDay.splice(0, 1);
                weekDay.push('Su');
                //weekFullDay.splice(0, 1);
                //weekFullDay.push('Sunday');
            }
            for (let i = 0, I = weekDay.length; i < I; i++){
                newComponentsDay.push(["aura:html", {
                        "tag": "div",
                    	"body" : weekDay[i],
                        "HTMLAttributes": {
                            "id": "DayNameId",
                            "title": weekFullDay[i],
                            "class": "datepicker--date--nav slds-size_1-of-7 slds-text-align_center"
                        }
            	}]);
            }        
        	newComponentsDay.push(["aura:html", {
                        "tag": "hr"
            }]);        
            	$A.createComponents(newComponentsDay,
                    function (components, status, errorMessage) {
                        component.set("v.contentPicker", []);
                		let pageBody = component.get("v.contentPicker");
                        //let container = component.find('root--nav--day');
                        if (status === 'SUCCESS') {
                            for (let i = 0; i < components.length; i++) {
                                let div = components[i];
                                pageBody.push(div);
                        	}
                        	component.set("v.contentPicker", pageBody);
                        }
                    }
                );
        
        let newComponents = [];
        days.forEach(function(element, index) {	
             newComponents.push(["aura:html", {
                        "tag": "div",
                        "HTMLAttributes": {
                            "id": "dynamicDivDate",
                            "class": "datepicker--day slds-size_1-of-7"
                        }
            }]);
    		if(element.getDate() == today.getDate() && element.getMonth() == today.getMonth() && element.getFullYear() == today.getFullYear()) {
                let bgcolor = component.get("v.bgcolor");
                let color = component.get("v.color");
                newComponents.push(["aura:html", {
                            "tag": "div",
                            "body": element.getDate().toString(),   
                    		"aura:id": "dynamicDate-"+index.toString(),
                            "HTMLAttributes": {
                                //"id": "dynamicDate-"+index.toString(),
                                "data-currentdate" : element.toISOString(),
                                "onclick": component.getReference("c.setCurrentDate"),
                                "title": weekFullDay[element.getDay()],//element.getDate().toString(),
                                "style": "background-color:"+bgcolor.toString()+";\ncolor:"+color.toString()+";",
                                "class": "dynamicDay slds-text-align_center dynamicDay--today"
                              }
                }]);                
            } else
            if(element.getDate() == currentDate.getDate() && element.getMonth() == currentDate.getMonth() && element.getFullYear() == currentDate.getFullYear()) {
                newComponents.push(["aura:html", {
                            "tag": "div",
                            "body": element.getDate().toString(),    
                    		"aura:id": "dynamicDate-"+index.toString(),
                            "HTMLAttributes": {
                                //"id": "dynamicDate-"+index.toString(),
                                "data-currentdate" : element.toISOString(),
                                "onclick": component.getReference("c.setCurrentDate"),
                                "title": weekFullDay[element.getDay()],//element.getDate().toString(),
                                "class": "dynamicDay slds-text-align_center dynamicDay--current"
                              }
                }]);                
            } else  
                if(element.getMonth() != month) {
                //if(element.getMonth() != currentDate.getMonth()) {
                    newComponents.push(["aura:html", {
                                "tag": "div",
                                "body": element.getDate().toString(),  
                        		"aura:id": "dynamicDate-"+index.toString(),
                                "HTMLAttributes": {
                                    //"id": "dynamicDate-"+index.toString(),
                                    "data-currentdate" : element.toISOString(),
                                    "onclick": component.getReference("c.setCurrentDate"),
                                    "title": weekFullDay[element.getDay()],//element.getDate().toString(),
                                    "class": "dynamicDay slds-text-align_center dynamicDay--other"
                                  }
                    }]);	
                }
             else {
                 newComponents.push(["aura:html", {
                            "tag": "div",
                            "body": element.getDate().toString(),
                     		"aura:id": "dynamicDate-"+index.toString(),
                            "HTMLAttributes": {
                               // "id": "dynamicDate-"+index.toString(),
                                "data-currentdate" : element.toISOString(),
                                "onclick": component.getReference("c.setCurrentDate"),
                                "title": weekFullDay[element.getDay()],//element.getFullYear()+" "+element.getMonth()+" "+element.getDate(),//element.getDate().toString(),
                                "class": "dynamicDay slds-text-align_center"
                              }
                }]);
            }
    	});
    	//console.log(newComponents);//console.log(JSON.stringify(newComponents));
        $A.createComponents(newComponents,
        function (components, status, errorMessage) {
             if (status === 'SUCCESS') {
                let pageBody = component.get("v.contentPicker");                 
                for (let i = 0; i < components.length; i += 2) {
                    let td = components[i];
                    let div = components[i + 1];
                    let tdBody = td.get("v.body");
                    tdBody.push(div);
                    td.set("v.body", tdBody);
                    pageBody.push(td);
                }
                let menuDay = component.find('menuDay'); 
                pageBody.push(menuDay);
                component.set("v.contentPicker", pageBody);
            }
            else // Report any error
            {
                let toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Failed to create list components."
                });
                toastEvent.fire();
            }
        }
    );  
   },
    
    createMonth : function(component, event, tempDate) {
        let currentDateCmp = component.get("v.currentDate");
        let currentDate = new Date(currentDateCmp);       
        let month = tempDate.getMonth();
        
        let monthYear = ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.'];
		let monthFullYear = ['January','February','March','April','May','June','July','August','September','October','November','December'];        
        let newMonthComponents = [];
        
            for (let i = 0, I = monthYear.length; i < I; i++){                
                newMonthComponents.push(["aura:html", {
                        "tag": "div",
                        "HTMLAttributes": {
                            "id": "dynamicDivMonth",
                            "class": "datepicker--month slds-size_1-of-3"
                        }
            }]);
                 if((month == i) && (currentDate.getMonth() == tempDate.getMonth()) && (currentDate.getFullYear() == tempDate.getFullYear())) {
                     //console.log('month:',month,' i:',i,' cM:',currentDate.getMonth(),' tM:',tempDate.getMonth(),' cY:',currentDate.getFullYear(),' tY:',tempDate.getFullYear());
                     newMonthComponents.push(["aura:html", {
                                "tag": "div",
                                "body": monthYear[i],
                                "HTMLAttributes": {
                                    "id": "dynamicMonthId" +i.toString(),
                                    "data-currentmonth" : i.toString(),
                                    "onclick": component.getReference("c.setCurrentMonth"),
                                    "title": monthFullYear[i],
                                    "class": "dynamicMonth dynamicMonth--current slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"
                                  }
                    }]);
                 } else {
                 	newMonthComponents.push(["aura:html", {
                                "tag": "div",
                                "body": monthYear[i],
                                "HTMLAttributes": {
                                    "id": "dynamicMonthId" +i.toString(),
                                    "data-currentmonth" : i.toString(),
                                    "onclick": component.getReference("c.setCurrentMonth"),
                                    "title": monthFullYear[i],
                                    "class": "dynamicMonth slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"
                                  }
                    }]);    
                 }
            }			
    	//console.log(newMonthComponents);
        $A.createComponents(newMonthComponents,
        function (components, status, errorMessage) {
             if (status === 'SUCCESS') {
                component.set("v.contentPicker", []);
                let pageBody = component.get("v.contentPicker");                 
                for (let i = 0; i < components.length; i += 2) {
                    let td = components[i];
                    let div = components[i + 1];
                    let tdBody = td.get("v.body");
                    tdBody.push(div);
                    td.set("v.body", tdBody)
                    pageBody.push(td);
                }
                component.set("v.contentPicker", pageBody);
            }
            else // Report any error
            {
                let toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Failed to create list components."
                });
                toastEvent.fire();
            }
        }
    ); 
    },
    
    createYear : function(component, event, year) {
        let currentDateCmp = component.get("v.currentDate");
        let currentDate = new Date(currentDateCmp);
        let currentYear = currentDate.getFullYear();
        
        let years = [];
        let newYearsComponents = [];
        for(let y = year; y > year-13; y-- ) {
        	years.push(y);    
        }
        years = years.reverse();
        for(let y = year+1; y <= year + 7; y++ ) {
        	years.push(y);    
        }
        //console.log(years);
        component.set("v.informCurrentDate", years[0]+"-"+years[years.length-1]);         
            years.forEach(function(element, index) {	                
                newYearsComponents.push(["aura:html", {
                        "tag": "div",
                        "HTMLAttributes": {
                            "id": "dynamicDivYear",
                            "class": "datepicker--year slds-size_1-of-4"
                        }
            }]);
                if(element == currentYear) {
                    newYearsComponents.push(["aura:html", {
                                "tag": "div",
                                "body": element.toString(),
                                "HTMLAttributes": {
                                    "id": "dynamicYearId" +index.toString(),
                                    "data-current_year" : element.toString(),
                                    "onclick": component.getReference("c.setCurrentYear"),
                                    "title": element.toString(),
                                    "class": "dynamicYear dynamicYear--current slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"
                                  }
                    }]);                
                } else {
                     newYearsComponents.push(["aura:html", {
                                "tag": "div",
                                "body": element.toString(),
                                "HTMLAttributes": {
                                    "id": "dynamicYearId" +index.toString(),
                                    "data-current_year" : element.toString(),
                                    "onclick": component.getReference("c.setCurrentYear"),
                                    "title": element.toString(),
                                    "class": "dynamicYear slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"
                                  }
                    }]);
                }
            });			
    	//console.log(newMonthComponents);
        $A.createComponents(newYearsComponents,
        function (components, status, errorMessage) {
             if (status === 'SUCCESS') {
                component.set("v.contentPicker", []);
                let pageBody = component.get("v.contentPicker");                 
                for (let i = 0; i < components.length; i += 2) {
                    let td = components[i];
                    let div = components[i + 1];
                    let tdBody = td.get("v.body");
                    tdBody.push(div);
                    td.set("v.body", tdBody)
                    pageBody.push(td);
                }
                component.set("v.contentPicker", pageBody);
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
        }
    ); 
    },
    
    nextDay : function(component, event) {
    	let currentDate = component.get("v.currentDateTemp");
        let d = new Date(currentDate);
        let month = d.getMonth()+1;
        let date = new Date(d.getFullYear(), month, d.getDate()); 
        if(date.getMonth() != month) {        
        	 date = new Date(d.getFullYear(), month, 1);
        }       
        let format = component.get("v.format");
        component.set("v.informCurrentDate", $A.localizationService.formatDate(date, "MMMM - YYYY"));
        //component.set("v.informCurrentDate", date.toLocaleString("en-us", {month: "long"}));
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createDateCurrent(component, event, date);   
    },
    
    previewDay : function(component, event) {
    	let currentDate = component.get("v.currentDateTemp");
        let d = new Date(currentDate);
        let month = d.getMonth()-1;
        let date = new Date(d.getFullYear(), month, d.getDate()); 
        if(date.getMonth() != month) {        
        	 date = new Date(d.getFullYear(), month, 1);
        } 
        let format = component.get("v.format");
        component.set("v.informCurrentDate", $A.localizationService.formatDate(date, "MMMM - YYYY"));
        //component.set("v.informCurrentDate", date.toLocaleString("en-us", {month: "long"})); 
		component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));        
        this.createDateCurrent(component, event, date);     
    },
    
    nextMonth : function(component, event) {
    	let currentDate = component.get("v.currentDateTemp");
        let d = new Date(currentDate);
        let date = new Date(d.getFullYear()+1, d.getMonth(), d.getDate());         
        let format = component.get("v.format");
        component.set("v.informCurrentDate", date.toLocaleString("en-us", {year: "numeric"}));
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createMonth(component, event, date);   
    },
    
    previewMonth : function(component, event) {
    	let currentDate = component.get("v.currentDateTemp");
        let d = new Date(currentDate);
        let date = new Date(d.getFullYear()-1, d.getMonth(), d.getDate());         
        let format = component.get("v.format");
        component.set("v.informCurrentDate", date.toLocaleString("en-us", {year: "numeric"}));
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createMonth(component, event, date);      
    },
    
    nextYear : function(component, event) {
    	let currentDate = component.get("v.currentDateTemp");
        let d = new Date(currentDate);
        let year = d.getFullYear()+19;
        let date = new Date(year, d.getMonth(), d.getDate());  
        let format = component.get("v.format");
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createYear(component, event, year);   
    },
    
    previewYear : function(component, event) {
    	let currentDate = component.get("v.currentDateTemp");
        let d = new Date(currentDate);
        let year = d.getFullYear()-19;
        let date = new Date(year, d.getMonth(), d.getDate());  
        let format = component.get("v.format");
        component.set("v.currentDateTemp", $A.localizationService.formatDate(date, format));
        this.createYear(component, event, year);   
    },
    
    setDatePicker : function(component, event, date) {
    	//event.stopPropagation();   
        //let device = $A.get("$Browser.formFactor");
        let animation = component.get("v.animation");
        if(animation) {            
            function addAnimeEnd(){            
                //$A.enqueueAction(component.get('c.myAction'));  
                let cmpEvent = component.getEvent("setDateEvent");
                cmpEvent.setParams({
                    "setCurrentDate" : date 
                }); 
                //component.find("overlayLib").notifyClose();
                window.setTimeout(
                        $A.getCallback(function() {                            
                            rootContent.removeEventListener("webkitAnimationEnd", addAnimeEnd, false);
                            rootContent.removeEventListener("oAnimationEnd"     , addAnimeEnd, false);
                            rootContent.removeEventListener("msAnimationEnd"    , addAnimeEnd, false);
                            rootContent.removeEventListener("animationend"      , addAnimeEnd, false);
                            cmpEvent.fire(); 
                            $A.enqueueAction(component.get('c.closeModalWindow'));
                }), 1 );
            }         
            let rootContent = component.find('root--content').getElement();         
            rootContent.addEventListener("webkitAnimationEnd", addAnimeEnd, false);
            rootContent.addEventListener("oAnimationEnd"     , addAnimeEnd, false);
            rootContent.addEventListener("msAnimationEnd"    , addAnimeEnd, false);
            rootContent.addEventListener("animationend"      , addAnimeEnd, false);
            this.selectAnimationReverce(component, event);                          
        } else {
                let cmpEvent = component.getEvent("setDateEvent");
                cmpEvent.setParams({
                    "setCurrentDate" : date 
                });                    
                cmpEvent.fire();
                $A.enqueueAction(component.get('c.closeModalWindow'));   
        }    
    },
    
    selectAnimation : function (component, event) {
        let animation = component.get("v.animation");
            if(animation) {
                this.deleteContentAnimation(component, event);
                window.setTimeout(
                    $A.getCallback(function() {
                        let rootContent = component.find('root--content');
                        $A.util.toggleClass(rootContent, 'mydatepicker--content--anime');
                    }), 1
                );            
            } 
    },
    
    selectAnimationReverce : function (component, event) {       
        let animation = component.get("v.animation");
            if(animation) {
                this.deleteContentAnimation(component, event);
                window.setTimeout(
                    $A.getCallback(function() {
                        let rootContent = component.find('root--content');
                        $A.util.toggleClass(rootContent, 'mydatepicker--content--anime--reverce');
                    }), 1
                ); 
            } 
    },
    
    nextAnimation : function (component, event) {
        let animation = component.get("v.animation");
            if(animation) {
                this.deleteContentAnimation(component, event);               
                window.setTimeout(
                    $A.getCallback(function() {
                        let rootContent = component.find('root--content');
                        $A.util.toggleClass(rootContent, 'mydatepicker--content--anime--right');
                    }), 1
                );            
            } 
    },
    
    prewAnimation : function (component, event) {
        let animation = component.get("v.animation");
            if(animation) {
                this.deleteContentAnimation(component, event);
                window.setTimeout(
                    $A.getCallback(function() {
                        let rootContent = component.find('root--content');
                        $A.util.toggleClass(rootContent, 'mydatepicker--content--anime--left');
                    }), 1
                );            
            } 
    },    
    
    deleteContentAnimation : function (component, event) {
    	let rootContent = component.find('root--content');
                $A.util.removeClass(rootContent, 'mydatepicker--content--anime');        
				$A.util.removeClass(rootContent, 'mydatepicker--content--anime--reverce');
                $A.util.removeClass(rootContent, 'mydatepicker--content--anime--left');        
				$A.util.removeClass(rootContent, 'mydatepicker--content--anime--right');   
    },          
})