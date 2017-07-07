import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/banco.js';



Router.configure({
  layoutTemplate: 'index',
  layoutTemplate: 'carrinho'
});

Router.route('/', function () {
  this.layout('index');
});

Router.route('/carrinho', function () {
  this.layout('carrinho');
});



Template.imagens.events({
   'click #mostra_janela': function(events){
	$("#modal_form").modal('show');
   },
   'click #deleta_imagem': function(events){
	    Images.remove(this._id); 
   }
});

Template.imagens.helpers({
	images: function(){        
    return Images.find({});
  }
});

Template.cart.helpers({
  images: function(){        
    return Images.find({});
  }
}); 	
  

Template.janela_cadastro.events({
    'submit #form_cadastro': function(events){
	Images.insert({src: $("#src").val(), title: $("#title").val(), price: $("#price").val(), alt: $("#alt").val(), well: $("#well").val()});
	 
    }
});

Template.body.helpers({
    usuario: function(){
	   console.log(Meteor.user());
	   if(Meteor.user()){
		return Meteor.user().username;
	   }
           return "Fulano de Tal";
    }
});

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});





