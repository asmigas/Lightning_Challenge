({
    afterRender: function (cmp,helper) {
        this.superAfterRender();        
        helper.windowClick = $A.getCallback(function(event){
            let device = $A.get("$Browser.formFactor");
            if(cmp.isValid() && device != "DESKTOP"){
                try {   	
                        let id = event.target.parentElement.id; 
                        let id2 = event.target.parentElement.firstChild.id;
                        //var mainComponent = component.getSuper().find('id');
                        //console.log('id',event.target.parentElement.id);
                        //console.log('id2',event.target.parentElement.firstChild.id);
                        if((id == "") && (id2 == "")) {          
                            cmp.find("overlayLib").notifyClose();
                        }                    
                    } catch (e) {
                        cmp.find("overlayLib").notifyClose();
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