({
    afterRender: function (cmp,helper) {
        this.superAfterRender();
        helper.windowClick = $A.getCallback(function(event){
            let device = $A.get("$Browser.formFactor");
            if(cmp.isValid() && device === "DESKTOP"){
                try {   	
                        let id2 = event.target.parentElement.id; 
                        let id = event.target.parentElement.firstChild.id;
                        //var mainComponent = component.getSuper().find('id');
                        if((id == "") && (id2 == "")) { 
                            helper.blurtoggleVisibility(cmp,event); 
                            //console.log('close');
                            //cmp.get("v.overlay").find("overlayLib").notifyClose();
                            //cmp.find('overlayLib').notifyClose();
                            //cmp.get('v.overlay').close();
                        } 
     
                    } catch (e) {
                       // console.log('Error ' + e.name + ":" + e.message + "\n" + e.stack);
                        helper.blurtoggleVisibility(cmp,event);
                        //console.log('close');
                        //cmp.get("v.overlay").find("overlayLib").notifyClose();
                        //cmp.find('overlayLib').notifyClose();
                        //cmp.get('v.overlay').close();
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