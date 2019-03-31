/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



var ul=document.getElementById('list');
var ul;

var addButton=document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem);


function addItem(){
    
    var input=document.getElementById('input');
    var item=input.value;
    ul=document.getElementById('list');
    var textnode=document.createTextNode(item);
    
    if(item==''){
        return false;
        //add a p tag assign a value of enter your to do
         
    } else{
        li=document.createElement('li'); 

        var checkbox =document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');
        
        var label=document.createElement('label');
        label.setAttribute('for','item')

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        

        setTimeout(()=>{
            li.className='visual';
        },2);

        input.value='';
    }
}

function removeItem(){
    
    li=ul.children
    // console.log(li);
    for(let index=0;index<li.length;index++){
        // const ele=li[index];
        // console.log(ele);

        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}

app.initialize();