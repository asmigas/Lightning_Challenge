({
    afterRender: function (cmp,helper) {
        this.superAfterRender();

        helper.windowClick = $A.getCallback(function(event){
            if(cmp.isValid()){
         	try {   	
                    var id = event.target.parentElement.firstChild.id; //event.target.parentElement.id; //
                    var mainComponent = component.getSuper().find('id');
                    console.log('ds',mainComponent);
                    if(id.localeCompare('inputDateCustomDatePicker') != 0) { 
                        helper.blurtoggleVisibility(cmp,event); 
                    }                    
                } catch (e) {
                   // console.log('Error ' + e.name + ":" + e.message + "\n" + e.stack);
                    helper.blurtoggleVisibility(cmp,event);
                }
            }
        });
        document.addEventListener('click',helper.windowClick);      

    },
    
    unrender: function (cmp,helper) {
        this.superUnrender();
        document.removeEventListener('click',helper.windowClick);        
    }
})