
//var Health="/HealthNutrition";
const OUTLINE_SUCCESS_MSG = "Outline saved successfully !";
const COMPONENT_UPLOAD_ERROR_MSG = "Some error occurred. Please contact admin.";
const COMPONENT_UPLOAD_SUCCESS_MSG = "Component added successfully.";
const REVIEW_SELECT = "0";
const REVIEW_ACCEPT = "1";
const REVIEW_NEED_IMPROVEMENT = "2";
const ALERT_SELECT_REVIEW = "Please select valid review.";
const DOMAIN_REVIEW_SUCCESS = "1";
const DOMAIN_REVIEW_FAIL = "0";
const COMPONENT_STATUS_SUCCESS = "Component status changed successfully !";
const COMPONENT_STATUS_FAILED = "An error occcurred while updating component status. Please contact site admin.";
const OUTLINE = "outline";
const SCRIPT = "script";
const VIDEO = "video";
const SLIDE = "slide";
const KEYWORD = "keyword";
const PRE_REQUISITE = "prerequisite";
const DOMAIN = "domain";
const QUALITY = "quality";
//const OUTLINE = "outline";

$(document).ready(function() {
	
			$('.pending-upload').tooltip({ title: 'Pending' });
			$('.admin-review').tooltip({ title: 'Waiting for Admin Review' });
			$('.domain-review').tooltip({ title: 'Waiting for Domain Review' });
			$('.quality-review').tooltip({ title: 'Waiting for Quality Review' });
			$('.review-accepted').tooltip({ title: 'Accepted' });
			$('.review-improvement').tooltip({ title: 'Need Improvement' });
			$('.not-required').tooltip({ title: 'Not Required' });
			
			
			   $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
			        localStorage.setItem('activeTab', $(e.target).attr('href'));
			    });
			    var activeTab = localStorage.getItem('activeTab');
			    if(activeTab){
			        $('#myTab a[href="' + activeTab + '"]').tab('show');
			    }
			    
/********************* Chnages made by om prakash ************************************************/
			    
			    $('.catStat').change(function() {
					
  					var catName=$(this).find(":selected").val();

						$.ajax({
							type : "GET",
							url : projectPath+"tutCountOnCat",
							data : {
								"id" : catName
							},
							contentType : "application/json",
							success : function(result) {
							
								$('#onChangedataStat').html(result);
								$('#statBox').hide();
							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
								var result = "Error";
								showStatus(ERROR,result);
							}
						});

					});
			    
			    
			     $('.lanStat').change(function() {
					
  					var lanName=$(this).find(":selected").val();

						$.ajax({
							type : "GET",
							url : projectPath+"tutCountOnLan",
							data : {
								"id" : lanName
							},
							contentType : "application/json",
							success : function(result) {
							
								$('#onChangedataStat').html(result);
								$('#statBox').hide();
							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
								var result = "Error";
								showStatus(ERROR,result);
							}
						});

					});
					
					
			    
			    $(".timeScriptFetchData").click(function(){
  					var tut_id=$(this).attr('value');
  						
  					$('#tutorialId').prop('value',tut_id);
  					$('#uploadTimescript').modal('show');
  				}) 
  				
  				
  				$('#timeScript').click(function() {
  					
  					var TutorialID=$("#tutorialId").val();

						var form = $('#upload-file-form-script')[0];
						var formData = new FormData(form);
						formData.append('id',TutorialID);

						$.ajax({
							type : "POST",
							url : projectPath+"addTimeScript",
							data : formData,
							enctype : 'multipart/form-data',
							processData : false,
							contentType : false,
							cache : false,
							success : function(result) {
							
								$('#viewScript').html(result);
						
								var result = "Script updated successfully";
								showStatus(SUCCESS,result);
								$('.upload-status').hide();
							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
								var result = "Error";
								showStatus(ERROR,result);
							}
						});

					});
			    
			    
			    
/**********************************end***********************************************************/
			
			
/******************* Changes made by om prakash *************************************/
			
		$('.enableBrouchure').click(function() {
				
				var test_id=$(this).attr('value');
				
				
				$('#Success').css({"display": "none"});
				$('#Failure').css({"display": "none"});
			
				$.ajax({
					type : "GET",
					url : projectPath+"enableDisableBrouchure",
					data : {
						"id" : test_id
					},
					contentType : "application/json",
					success : function(data) {
						if(data){
			   				$('#'+test_id).addClass('fas fa-times-circle');
			   				$('#'+test_id).removeClass('fas fa-check-circle');
			   				$('#'+test_id).css({"color": "red"});
			   				$('#Success').css({"display": "block"});
			   	
			   			}else{
			   				$('#Failure').css({"display": "block"});
			   			}
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});
			
			
			$('.disableBrouchure').click(function() {
				
				var test_id=$(this).attr('value');
				
				$('#Success').css({"display": "none"});
				$('#Failure').css({"display": "none"});
			
				$.ajax({
					type : "GET",
					url : projectPath+"enableDisableBrouchure",
					data : {
						"id" : test_id
					},
					contentType : "application/json",
					success : function(data) {
						if(data){
			   				
			   				$('#'+test_id).addClass('fas fa-check-circle');
			   				$('#'+test_id).removeClass('fas fa-times-circle');
			   				$('#'+test_id).css({"color": "green"});
			   				$('#Success').css({"display": "block"});
			   				
			   	
			   			}else{
			   				$('#Failure').css({"display": "block"});
			   			}
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});
			
			
			$('.enableTest').click(function() {
				
				var test_id=$(this).attr('value');
				
				
				$('#Success').css({"display": "none"});
				$('#Failure').css({"display": "none"});
			
				$.ajax({
					type : "GET",
					url : projectPath+"enableDisableTestimonial",
					data : {
						"id" : test_id
					},
					contentType : "application/json",
					success : function(data) {
						if(data){
			   				$('#'+test_id).addClass('fas fa-times-circle');
			   				$('#'+test_id).removeClass('fas fa-check-circle');
			   				$('#'+test_id).css({"color": "red"});
			   				$('#Success').css({"display": "block"});
			   	
			   			}else{
			   				$('#Failure').css({"display": "block"});
			   			}
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});
			
			
			$('.disableTest').click(function() {
				
				var test_id=$(this).attr('value');
				
				$('#Success').css({"display": "none"});
				$('#Failure').css({"display": "none"});
			
				$.ajax({
					type : "GET",
					url : projectPath+"enableDisableTestimonial",
					data : {
						"id" : test_id
					},
					contentType : "application/json",
					success : function(data) {
						if(data){
			   				
			   				$('#'+test_id).addClass('fas fa-check-circle');
			   				$('#'+test_id).removeClass('fas fa-times-circle');
			   				$('#'+test_id).css({"color": "green"});
			   				$('#Success').css({"display": "block"});
			   				
			   	
			   			}else{
			   				$('#Failure').css({"display": "block"});
			   			}
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});
			
			
		/******************* end ****************************************************/
		/******************* Changes made by om prakash *************************************/
			
			$('.enableConsult').click(function() {
				
				var consult_id=$(this).attr('value');
				
				
				$('#Success').css({"display": "none"});
				$('#Failure').css({"display": "none"});
			
				$.ajax({
					type : "GET",
					url : projectPath+"enableDisableConsultant",
					data : {
						"id" : consult_id
					},
					contentType : "application/json",
					success : function(data) {
						if(data){
			   				$('#'+consult_id).addClass('fas fa-times-circle');
			   				$('#'+consult_id).removeClass('fas fa-check-circle');
			   				$('#'+consult_id).css({"color": "red"});
			   				$('#Success').css({"display": "block"});
			   	
			   			}else{
			   				$('#Failure').css({"display": "block"});
			   			}
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});
			
			
			$('.disableConsult').click(function() {
				
				var consult_id=$(this).attr('value');
				
				$('#Success').css({"display": "none"});
				$('#Failure').css({"display": "none"});
			
				$.ajax({
					type : "GET",
					url : projectPath+"enableDisableConsultant",
					data : {
						"id" : consult_id
					},
					contentType : "application/json",
					success : function(data) {
						if(data){
			   				
			   				$('#'+consult_id).addClass('fas fa-check-circle');
			   				$('#'+consult_id).removeClass('fas fa-times-circle');
			   				$('#'+consult_id).css({"color": "green"});
			   				$('#Success').css({"display": "block"});
			   				
			   	
			   			}else{
			   				$('#Failure').css({"display": "block"});
			   			}
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});
			
			
		/******************* end ****************************************************/
			
			$('#profilePicture').change(function(){
				
				readImageUrl(this);
				$("#chngProfilePic").prop('disabled', false);
			})
			
			
			$('#chngProfilePic').click(function(){
				
				event.preventDefault();
				
				updateProfilePicture();
				
			})
			
			$('#searchTrainees').click(function() {
				
				var traineeId = $("#eventName").find(":selected").val();
			
				$.ajax({
					type : "GET",
					url : projectPath+"loadTraineeByTrainingId",
					data : {
						"id" : traineeId
					},
					contentType : "application/json",
					success : function(result) {
						html = '';
						$.each(result,function(key,value){
						      html +='<tr>';
						      html +='<td>'+ value.name + '</td>';
						      html +='<td>'+ value.age + '</td>';
						      html +='<td>'+ value.aadhar + '</td>';
						      html +='<td>'+ value.phone + '</td>';
						      html +='<td>'+ value.organization + '</td>';
						      html +='<td>'+ value.email + '</td>';
						      html +='<td>'+ value.gender + '</td>';
						      html +='</tr>';
						  });
						
						$('#tableBody').html(html);
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});

			
			$('#newPassTeacher').change(function(){
  				
  				$('#updatePasswordTeacher').prop('disabled',true);
  				var confpass=$('#confPassTeacher').val();
  				var pass=$(this).val();
  				if(confpass.length>0 && pass.length>0){
  					$('#updatePasswordTeacher').prop('disabled',false);
  					
  				}
  			
  			})
  			
  			$('#confPassTeacher').change(function(){
  				
  				$('#updatePasswordTeacher').prop('disabled',true);
  				var confpass=$('#newPassTeacher').val();
  				var pass=$(this).val();
  				if(confpass.length>0 && pass.length>0){
  					$('#updatePasswordTeacher').prop('disabled',false);
  					
  				}
  			
  			})
  				
  			$('#updatePasswordTeacher').click(function(){
  			
  			var currPass=$('#currentPasswordTeacher').val();	
  			var pass=$('#newPassTeacher').val();
  			var confpass=$('#confPassTeacher').val();
  			
			
			var urlPassed;
		
        	urlPassed= projectPath+"updatePassword";
		
        
  			if(pass === confpass){
  				
  				var passwordData={
  					"password":pass,
  					"currentPassword":currPass
  					
  				};
  				
  				
  				$.ajax({
  					type: "GET",
  					contentType: "application/json",
  					url: urlPassed,
  					data:passwordData,
  					cache:false,
  					timeout: 600000,
  					success:function(data){
  						 
  						 $('#Success').css({"display": "none"}); 
  						 $('#FailurePassMismatch').css({"display": "none"});
  						 $('#FailureCurPassWrong').css({"display": "none"});
  						 $('#lengthIncorrect').css({"display": "none"});
  						
  						 if(data[0]==="Success"){
  							 $('#Success').css({"display": "block"});
  							 $('#newPassTeacher').prop('value',"");
  							 $('#confPassTeacher').prop('value',"");
  							 $('#currentPasswordTeacher').prop('value',"");
  							 $('#updatePasswordTeacher').prop('disabled',true);
  							 
  							 setTimeout(function() {
  					            $('#Success').fadeOut(1000)}, 4000);
  						 }else if(data[0]==="failure"){
  							 $('#FailureCurPassWrong').css({"display": "block"});
  							 $('#newPassTeacher').prop('value',"");
 							 $('#confPassTeacher').prop('value',"");
 							 $('#currentPasswordTeacher').prop('value',"");
 							 $('#updatePasswordTeacher').prop('disabled',true);
 							 
 							 setTimeout(function() {
 					            $('#FailureCurPassWrong').fadeOut(1000)}, 4000);
  						 }else if(data[0]==="passwordLengthError"){
  							 
  							 $('#lengthIncorrect').css({"display": "block"});
  							 $('#newPassTeacher').prop('value',"");
 							 $('#confPassTeacher').prop('value',"");
 							 $('#currentPasswordTeacher').prop('value',"");
 							 $('#updatePasswordTeacher').prop('disabled',true);
 							 
 							 setTimeout(function() {
 					            $('#lengthIncorrect').fadeOut(1000)}, 4000);
  							 
  						 }
  						
  					
  					},
  				
  				error : function(err){
  					console.log("not working. ERROR: "+JSON.stringify(err));
  				}
  				
  				});
  				
  				
  			}else{
  				 $('#Success').css({"display": "none"}); 
  				 $('#FailurePassMismatch').css({"display": "none"});
				 $('#FailureCurPassWrong').css({"display": "none"});
				 $('#FailurePassMismatch').css({"display": "block"});
			
				 setTimeout(function() {
			            $('#FailurePassMismatch').fadeOut(1000)}, 4000);
			  
				 
				 $('#newPassTeacher').prop('value',"");
				 $('#confPassTeacher').prop('value',"");
				 $('#currentPasswordTeacher').prop('value',"");
				 
				 $('#updatePasswordTeacher').prop('disabled',true);
  				
  			}
  			
  		})
  		
	// JQUERY AJAX CALL TO TAKE CONTACT DATA FROM USER SIDE ----------------------------------------
			
			
			
			
	  		
		
			$('#contactForm').click(function(){
				var name=$('#name').val();
				var email=$('#email').val();
				var desc=$('#message').val();
				if(name.length>0 && validateEmail(email) && desc.length>0){
					
					var json={
							"name":name,
							"message":desc,
							"email":email,
					};
					var jsdata= JSON.stringify(json);
					var urlPassed;
					
					urlPassed= projectPath+"addContactForm";
					$('#feedback_spinner').show();
					
				
					
					$.ajax({
					  	 type: "POST",
			        	 contentType: "application/json",
			       		 url: urlPassed,
			       		 data: JSON.stringify(json),
			       		 dataType: 'json',
			       		 cache: false,
			        	 timeout: 600000,
			        	
			       		 success: function (data){
			       			 
			       			 $('#feedback_spinner').hide();
			       			$('#statusOnContactForm').css({"display": "none"}); 
							  
							 $('#statusOnContactFormAfterAjaxCallSucess').css({"display": "none"});
							 $('#statusOnContactFormAfterAjaxCallFailure').css({"display": "none"});
							
							 if(data[0]==="Success"){
								 $('#statusOnContactFormAfterAjaxCallSucess').css({"display": "block"});
								// setTimeout(function() {
							      //      $('#statusOnContactFormAfterAjaxCallSucess').fadeOut(1000)}, 4000);
							 }else {
								 $('#statusOnContactFormAfterAjaxCallFailure').css({"display": "block"});
								// setTimeout(function() {
							      //      $('#statusOnContactFormAfterAjaxCallFailure').fadeOut(1000)}, 4000);
							 }
							 
							 $("#name").prop('value', "");
							 $("#email").prop('value', "");
							 $("#message").prop('value', "");
							 
							// setTimeout(function() {
						    //        $('#Failure').fadeOut(1000)}, 4000);
							 
						},
						
						error : function(err){
							$('#feedback_spinner').hide();
							console.log("not working. ERROR: "+JSON.stringify(err));
						}
						
						
					});
					
					
				}else{
					$('#statusOnContactForm').css({"display": "block"});
				}
				
			});
			

			/*--------------- constants ---------------*/
			const SUCCESS = 1;
			const ERROR = 0;

			/*--------------- constants ---------------*/
			// retrieve latest tab shown before refresh
			var activeTab = localStorage.getItem('activeTab');
			if (activeTab) {
				$('#nav-tab a[href="#' + activeTab + '"]').tab('show');
				localStorage.setItem('activeTab', "");
				$('.approve-success-msg').text(
						localStorage.getItem('msg'));
				localStorage.setItem('msg', "");
			}

			/* master trainer */

			var activeTab = localStorage.getItem('activeTab');
			if (activeTab) {
				$('#v-pills-tab a[href="#' + activeTab + '"]').tab(
				'show');
				localStorage.setItem('activeTab', "");
				$('.tab-pane').text(localStorage.getItem('msg'));
				localStorage.setItem('msg', "");
			}

			function showStatus(status, msg) {
				// status : 1 - success , 0 - failure
				$('.alert-msg').show();
				$('.alert-msg').html(msg);
				if (status) {
					$('.alert-msg').addClass('alert-success');
				} else {
					$('.alert-msg').addClass('alert-danger');
				}

			}
			
			$('.modal-status').on('hidden.bs.modal', function() {
				$('.alert-msg').hide();

			});

			
			$('#approveContributorId').on('show.bs.tab', function() {
				location.reload();

			});

			
			$('#videoViewIdAdmin').on('hidden.bs.modal', function() {
				location.reload();

			});

			$('.nav-item').on(
					'click',
					function() {
						localStorage.setItem('msg', "");
						$('.approve-success-msg').text(
								localStorage.getItem('msg'));
					});
			

			

	
			$('#categoryNameList').change(function() {

			});

			// Here is code for category display into category and
			// language

			$('#categoryId')
			.change(
					function() {
						var categoryid = $("#categoryNameList")
						.val();
						var languageid = $("#inputLanguageList")
						.val();

						$
						.ajax({

							type : "GET",
							url : projectPath+ "loadCategoryAndLanguage",
							data : {
								"id" : categoryid,
								"lanid" : language
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select language</option>';
								for (var i = 0; i < len; i++) {

									html += '<option value="'+ result[i]+ '">'+ result[i]+ '</option>';
								}
								html += '</option>';

								$("#inputLanguageList").prop('disabled',false);
								$('#inputLanguageList').html(html);
							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}
						});
					});


			// Here is code for display category according to language

			$('#languageContributerId')
			.change(

					function() {

						var languageid = $("#languageContributerId").val();

						$.ajax({

							type : "GET",
							url  : projectPath+"loadcategoryBylanguage",

							data : {

								"languageid" : languageid,

							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Category</option>';
								for (var i = 0; i < len; i++) {

									html += '<option value="'+ result[i]+ '">'+ result[i]+ '</option>';
								}
								html += '</option>';

								$("#categoryDomainId").prop('disabled',false);
								$('#categoryDomainId').html(html);
							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}
						});
					});

			/* here we write code for calling Topic */

			$('#categoryId')
			.change(
					function() {

						var catgoryid = $(this).find(
								":selected").val();
						$
						.ajax({
							type : "GET",
							url :  projectPath+"loadByCategoryTuturialTopic",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Topic</option>';
								for (var i = 0; i < len; i++) {
									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#inputTopic").prop(
										'disabled',
										false);
								$('#inputTopic').html(
										html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

			/* here we write code for calling language */

			$('#categoryId')
			.change(
					function() {

						var catgoryid = $(this).find(
								":selected").val();
						$
						.ajax({

							type : "GET",
							url :  projectPath+"loadByCategoryTuturial",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select language</option>';
								for (var i = 0; i < len; i++) {
									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#inputLanguage")
								.prop(
										'disabled',
										false);
								$('#inputLanguage')
								.html(html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

			// });
			//		
			//			  
			// });

			/* Here is code for select District */
/****************************** changes made by om prakash ****************************************/
			
			$('#stateNameId').change(function() {

						var state = $(this).find(":selected").val();

						$.ajax({
							type : "GET",
							url : projectPath+"loadDistrictByState",
							data : {
								"id" : state
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select District</option>';
	  	  			            $.each(result , function( key, value ) {
		  	  			        html += '<option value=' + key + '>'
		  			               + value
		  			               + '</option>';
		  	  			        })
	  	  			            html += '</option>';

								$("#districtId").prop('disabled',false);
								$('#districtId').html(html);

							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}

						});

					});

			/*
			 * Here is code for selection of title name according to
			 * category name
			 */
/******************** CHANGES MADE BYU OM PRAKASH SONI ******************************/
			
			$('#catMasPostId').change(function() {
				
				var catId = $(this).find(":selected").val();

				$.ajax({
					type : "GET",
					url : projectPath+"loadTitleNameInMasterTraining",
					data : {
						"id" : catId
					},
					contentType : "application/json",
					success : function(result) {

						var html = '';
						var len = result.length;
						html += '<option value="0">Select Training</option>';
						$.each(result , function( key, value ) {
		  	  			        html += '<option value=' + key + '>'
		  			               + value
		  			               + '</option>';
		  	  			})
	  	  			     html += '</option>';
						 	

						$("#postTrainingdataId").prop('disabled',false);
						$('#postTrainingdataId').html(html);

					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});
			
			$('#catMasId').change(function() {
						
						var catId = $(this).find(":selected").val();

						$.ajax({
							type : "GET",
							url : projectPath+"loadTitleNameInMasterTraining",
							data : {
								"id" : catId
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Training</option>';
								$.each(result , function( key, value ) {
				  	  			        html += '<option value=' + key + '>'
				  			               + value
				  			               + '</option>';
				  	  			})
			  	  			     html += '</option>';
								 	

								$("#feedbackmasterId").prop('disabled',false);
								$('#feedbackmasterId').html(html);

							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}

						});

					});
			
			$('#eventCategory').change(function() {
				
				var catId = $(this).find(":selected").val();
			
				$.ajax({
					type : "GET",
					url : projectPath+"loadTitleNameInMasterTraining",
					data : {
						"id" : catId
					},
					contentType : "application/json",
					success : function(result) {

						var html = '';
						var len = result.length;
						html += '<option value="0">Select Training</option>';
						$.each(result , function( key, value ) {
		  	  			        html += '<option value=' + key + '>'
		  			               + value
		  			               + '</option>';
		  	  			})
	  	  			     html += '</option>';
						 	

						$("#eventName").prop('disabled',false);
						$('#eventName').html(html);

					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});

		

			$('#preRequsiteId').change(function() {
			
				var catgoryid = $(this).find(":selected").val();
				var tutorialId=$('#tutorialId').val();
				var langName=$('#lanId').val();

						$.ajax({
							type : "GET",
							url : projectPath+"loadTopicByCategoryPreRequistic",
							data : {

								"id" : catgoryid,
								"tutorialId" : tutorialId,
								"langName" : langName
							},
							contentType : "application/json",
							success : function(result) 
							{


								var html = '';
								var len = result.length;
								html += '<option value="0">Select Topic</option>';
								 $.each(result , function( key, value ) {
				  	  			        html += '<option value=' + key + '>'
				  			               + value
				  			               + '</option>';
				  	  			        })
								
								html += '</option>';



								$("#preReqTopic").prop('disabled',false);
								$('#preReqTopic').html(html);

							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}

						});

					});



			// Changes made by om prakash

			$('#uploadpreRequsiteId').click(function() {
				let [tutorialId,category,topicid,lang] = setTutorialData();
				
				var preReqTutId = $("#preReqTopic").val(); //Id of pre-req tutorial 
				var prRequired_checkbox = document.getElementById('prRequired');

				$.ajax({
					type : "GET",
					url : projectPath+"addPreRequistic",
					data : {
						"id" :tutorialId,
						"categoryname" : category,
						"topicid" : topicid,
						"lanId" : lang,
						"preReqTutId" : preReqTutId
					},
					contentType : "application/json",
					success : function(result) 
					{
						setComponentUploadStatus(result,'alert-pre','status-pre','uploadpreRequsiteId','user-pre');
						prRequired_checkbox.disabled = true;
					},
					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
						setErrorStatus('alert-pre');
					}
				});
});



			/*Here is code for feedbak for user on Home page*/
			$('#submitForUser').click(function() 
					{

				var firstName = $("#firstName").val();

				var email = $("#email").val();

				var subjectName = $("#subjectName").val();

				var msgForm = $("#msgForm").val();



				$.ajax({
					type : "GET",
					url : projectPath+"feedbackForUser",
					data : {

						"firstName" : firstName,
						"email": email,
						"subjectName": subjectName,
						"msgForm":msgForm,
					},
					contentType : "application/json",
					success : function(result) 
					{

						$("#exampleModalLabelKeyword")
						.prop(
								'disabled',
								false);
						$("#exampleModalLabelKeyword")
						.html(html);

					},

					error : function(err) {
						console
						.log("not working. ERROR: "
								+ JSON
								.stringify(err));
					}

				});

					});







			/*
			 * Here is code for selection of title name according to
			 * category name View csv file recored
			 */

			$('#catSelectedId')
			.change(
					function() {

						var state = $(this).find(":selected")
						.val();

						$
						.ajax({
							type : "GET",
							url : projectPath+"loadBycategoryInFeedb",
							data : {
								"id" : state
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Title</option>';
								for (var i = 0; i < len; i++) {
									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#titleNameId").prop(
										'disabled',
										false);
								$('#titleNameId').html(
										html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

			/* Here is code for distrcit Selection for adding city */
			$('#stateDistrictId')
			.change(
					function() {

						var state = $(this).find(":selected")
						.val();

						$
						.ajax({
							type : "GET",
							url : projectPath+"loadDistrictByState",
							data : {
								"id" : state
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select District</option>';
								for (var i = 0; i < len; i++) {
									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#districtCityId")
								.prop(
										'disabled',
										false);
								$('#districtCityId')
								.html(html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

	/*********************** changes made by om prakash ********************************/
			
			$('#districtId').change(function() {

						var dist = $(this).find(":selected").val();

						$.ajax({
							type : "GET",
							url : projectPath+"loadCityByDistrict",
							data : {
								"id" : dist
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select City</option>';
	  	  			            $.each(result , function( key, value ) {
		  	  			        html += '<option value=' + key + '>'
		  			               + value
		  			               + '</option>';
		  	  			        })
	  	  			            html += '</option>';

								$("#cityId").prop('disabled',false);
								$('#cityId').html(html);

							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}

						});

					});

					/* Here is code for distrcit Selection for adding city */
			$('#stateDistrictId')
			.change(
					function() {

						var state = $(this).find(":selected")
						.val();

						$
						.ajax({
							type : "GET",
							url : projectPath+"loadDistrictByState",
							data : {
								"id" : state
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select District</option>';
								for (var i = 0; i < len; i++) {
									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#districtCityId")
								.prop(
										'disabled',
										false);
								$('#districtCityId')
								.html(html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

						/*
			 * Here is code for access topic according to category
			 * master trainer
			 */
/***************** changes made by om prakash *********************************************/
			
			$("#catMasterId").change(function() {

						var catgoryid = $(this).find(":selected").val();

						$.ajax({
							type : "GET",
							url : projectPath+"loadTopicByCategory",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Topic</option>';
	  	  			            $.each(result , function( key, value ) {
		  	  			        html += '<option value=' + key + '>'
		  			               + value
		  			               + '</option>';
		  	  			        })
	  	  			            html += '</option>';
								$("#lanMasterTrId").prop('disabled',false);
								$('#lanMasterTrId').html(html);

							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));

							}

						});

					});

			
			$('#approveContributorId').on('show.bs.tab', function() {
				location.reload();
			});



	
			$('#videoViewIdAdmin').on('hidden.bs.modal', function() {
				location.reload();
			});

			$('.nav-item').on(
					'click',
					function() {
						localStorage.setItem('msg', "");
						$('.approve-success-msg').text(
								localStorage.getItem('msg'));
					});

			
			/* here is code for download question */

			$('#inputLanguage1')
			.change(
					function() {

						var catgoryid = $(this).find(
								":selected").val();

						$
						.ajax({
							type : "GET",
							url : projectPath+"downloadQuestion",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<a href="#">Click To Open</a>';
								for (var i = 0; i < len; i++) {

									html += '<a her="'
										+ result[i]
									+ '">'
									+ '<a href='
									+ result[i]
									+ '>'
									+ result[i]
									+ '</a>'
									+ '</option>';

								}
								html += '</option>';

								$("#input").prop(
										'disabled',
										false);

								$('#inputdiv').html(
										html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));

							}

						});

					});

			/*
			 * master trainer depending on language wet topic
			 */

			$('#inputLanguage')
			.change(
					function() {

						var catgoryid = $(this).find(
								":selected").val();

						$
						.ajax({
							type : "GET",
							url : projectPath+"loadByLangugaeTopic",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Topic</option>';
								for (var i = 0; i < len; i++) {

									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#selectLanguageId")
								.prop(
										'disabled',
										false);
								$('#selectLanguageId')
								.html(html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

			
			$('#fetch_questions').click(
			function() {
			$('#questionnaire').tab('show');
			
			});

			// here write code for keyword view //add content form
			$('#keywordModaleView').click(
					function() {

						var categoryid = $("#categoryId").val();
						var topicid = $("#topicId").val();
						var lanId = $("#lanId").val();

						$.ajax({
							type : "GET",
							url : projectPath+"viewKeyword",
							data : {
								"categorname" : categoryid,
								"topicid" : topicid,
								"lanId" : lanId
							},
							contentType : "application/json",
							success : function(result) {

								$("#keywordView").prop('disabled',
										false);
								$('#keywordView').html(result);

							},

							error : function(err) {
								console.log("not working. ERROR: "
										+ JSON.stringify(err));
							}

						});

					});

			

					$('#videoClick').click(function() {
						var categoryid = $("#categoryId").val();
						var topicid = $("#topicId").val();
						var lanId = $("#lanId").val();
						$.ajax({

							type : "GET",
							url : projectPath+"viewVideo",
							data : {
								"categorname" : categoryid,
								"topicid" : topicid,
								"lanId" : lanId
							},
							contentType : "application/json",
							success : function(result) {

								var res = result;
								source = document
								.getElementById('storedVideoId');
								source.setAttribute(
										'src', res);
								source.setAttribute(
										'type',
								'video/mp4')

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});


			// Here is code for category display into category and
			// language

			$('#categoryId')
			.change(
					function() {
						var categoryid = $("#categoryNameList")
						.val();
						var languageid = $("#inputLanguageList")
						.val();

						$
						.ajax({

							type : "GET",
							url  : projectPath+"loadCategoryAndLanguage",
							data : {
								"id" : categoryid,
								"lanid" : language
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select language</option>';
								for (var i = 0; i < len; i++) {

									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#inputLanguageList")
								.prop(
										'disabled',
										false);
								$('#inputLanguageList')
								.html(html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});
			$( "#categoryname" ).change(function() {
				var catgoryid = $(this).val();
				
				$.ajax({
					type : "GET",
					url : projectPath+"listTopicsByCategory",
					data : {
						"id" : catgoryid
					},
					contentType : "application/json",
					success : function(result) {
						var html = '';
						var len = result.length;
						html += '<option value="0">Select Topic</option>';
						for (var i = 0; i < len; i++) {

							html += '<option value="'
								+ result[i]
							+ '">'
							+ result[i]
							+ '</option>';
						}
						html += '</option>';

//						$("#inputLanguage").prop('disabled',false);
//						$('#inputLanguage').html(html);
						$("#inputTopicName").prop('disabled',false);
						$('#inputTopicName').html(html);

					},
					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}
				});
			});


			$('#inputTopicName').change(function() {
				var topic = $(this).val();
				var categoryName = $("#categoryname").val();
				$.ajax({
					type : "GET",
					url : projectPath+"listLangByCategoryTopic",
					data : {
						"category" : categoryName,
						"topic" : topic
					},
					contentType : "application/json",
					success : function(result) {
						var html = '';
						var len = result.length;
						html += '<option value="0">Select language</option>';
						for (var i = 0; i < len; i++) {

							html += '<option value="'
								+ result[i]
							+ '">'
							+ result[i]
							+ '</option>';
						}
						html += '</option>';

						$("#inputLanguage").prop('disabled',false);
						$('#inputLanguage').html(html);
					},
					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}
				});

			});

			/* here we write code for calling Topic */

			$('#categoryId')
			.on('change',function() {
				var catgoryid = $(this).find(
				":selected").val();
				$
				.ajax({
					type : "GET",
					url : projectPath+"loadByCategoryTuturialTopic",
					data : {
						"id" : catgoryid
					},
					contentType : "application/json",
					success : function(result) {

						var html = '';
						var len = result.length;
						html += '<option value="0">Select Topic</option>';
						for (var i = 0; i < len; i++) {
							html += '<option value="'
								+ result[i]
							+ '">'
							+ result[i]
							+ '</option>';
						}
						html += '</option>';

						$("#inputTopic").prop(
								'disabled',
								false);
						$('#inputTopic').html(
								html);

					},

					error : function(err) {
						console
						.log("not working. ERROR: "
								+ JSON
								.stringify(err));
					}

				});

			});

			/* here we write code for calling language */

			$('#categoryId')
			.on('change',function() {
				var catgoryid = $(this).find(
				":selected").val();
				$
				.ajax({

					type : "GET",
					url : projectPath+"loadByCategoryTuturial",
					data : {
						"id" : catgoryid
					},
					contentType : "application/json",
					success : function(result) {

						var html = '';
						var len = result.length;
						html += '<option value="0">Select language</option>';
						for (var i = 0; i < len; i++) {
							html += '<option value="'
								+ result[i]
							+ '">'
							+ result[i]
							+ '</option>';
						}
						html += '</option>';

						$("#inputLanguage")
						.prop(
								'disabled',
								false);
						$('#inputLanguage')
						.html(html);

					},

					error : function(err) {
						console
						.log("not working. ERROR: "
								+ JSON
								.stringify(err));
					}

				});

			});

			// chages according to individual table by languge
			$('#preRequsite')
			.change(
					function() {
						var catgoryid = $(this).find(
						":selected").val();
						$
						.ajax({
							type : "GET",
							url : projectPath+"loadByCategoryTuturial",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Topic</option>';
								for (var i = 0; i < len; i++) {
									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#inputLanguage1")
								.prop(
										'disabled',
										false);
								$('#inputLanguage1')
								.html(html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

			$('#inputLanguage1')
			.change(
					function() {

						var catgoryid = $(this).find(
								":selected").val();

						$
						.ajax({
							type : "GET",
							url : projectPath+"downloadQuestion",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<a href="#">Click To Open</a>';
								for (var i = 0; i < len; i++) {

									html += '<a her="'
										+ result[i]
									+ '">'
									+ '<a href='
									+ result[i]
									+ '>'
									+ result[i]
									+ '</a>'
									+ '</option>';

								}
								html += '</option>';

								$("#input").prop(
										'disabled',
										false);

								$('#inputdiv').html(
										html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));

							}

						});

					});

			/*
			 * master trainer depending on language wet topic
			 */

			$('#inputLanguage')
			.change(
					function() {

						var catgoryid = $(this).find(
								":selected").val();

						$
						.ajax({
							type : "GET",
							url : projectPath+"loadByLangugaeTopic",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Topic</option>';
								for (var i = 0; i < len; i++) {

									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#selectLanguageId")
								.prop(
										'disabled',
										false);
								$('#selectLanguageId')
								.html(html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

			// chages according to individual table by languge

			$('#catId')
			.change(
					function() {

						var catgoryid = $(this).find(
								":selected").val();

						$
						.ajax({
							type : "GET",
							url : projectPath+"loadBycategorylanguage",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select language</option>';
								for (var i = 0; i < len; i++) {

									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#inputLan").prop(
										'disabled',
										false);
								$('#inputLan').html(
										html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

			/* Access topic according to langaueg */
/*********************************** Changes By Om Prakash **************************************************/
			$('#MasterCategoryId').change(function() {
						var categoryid = $(this).find(":selected").val();
						$.ajax({

							type : "GET",
							url : projectPath+"loadTopicByCategory",
							data : {
								"id" : categoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
//								html += '<option value="0">Select any one topic</option>';
	  	  			            $.each(result , function( key, value ) {
		  	  			        html += '<option value=' + key + '>'
		  			               + value
		  			               + '</option>';
		  	  			        })
	  	  			            html += '</option>';
	  	  			            

								$("#inputTopic").prop('disabled',false);
								$('#inputTopic').html(html);

							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}

						});

					});
	/***************************************End ************************************************/

			/* load Topic by catgory contributor */

	/******************************* changes made by om prakash *************************************************/
			$('#categoryContributor').change(function() {
				
				
						var catgoryid = $('#categoryContributor').val();
						
						$.ajax({

							type : "GET",
							url : projectPath+"loadTopicByCategoryOnContributorRole",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {
							//	html += '<option value="'+ result[i]+ '">'+ result[i]+ '</option>';

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Topic</option>';
								$.each(result , function( key, value ) {
			  	  			        html += '<option value=' + key + '>'+ value  + '</option>';
			  	  			     })
								html += '</option>';
								
								$("#inputTopicContributor").prop('disabled',false);
								$('#inputTopicContributor').html(html);

							},

							error : function(err) {
								console.log("not working. ERROR: "	+ JSON.stringify(err));
							}

						});

					});

			/* contributor languages */

			$('#inputTopicContributor')	.change(function() {
				
				var catgoryid = $('#categoryContributor').val();
				var topicId=$(this).find(":selected").val();
				
						$.ajax({

							type : "GET",
							data : {
								"id" : catgoryid,
								"topicId":topicId
							},
							url : projectPath+"loadLanguageForContributorRoleTutorial",
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select Language</option>';
								for (var i = 0; i < len; i++) {
									html += '<option value="'+ result[i]+ '">'+ result[i]+ '</option>';
								}
								html += '</option>';

								$("#inputLanguageContributor").prop('disabled',false);
								$('#inputLanguageContributor').html(html);

							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}

						});

					});
			
			/********************************* end****************************************************/

			/*
			 * Access language depending on topic contributer
			 */

			$('#inputTopic')
			.change(
					function() {
						var catgoryid = $(this).find(
						":selected").val();
						$
						.ajax({
							type : "GET",
							url : projectPath+"loadlanguage",
							data : {
								"id" : catgoryid
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;
								html += '<option value="0">Select any one language</option>';
								for (var i = 0; i < len; i++) {
									html += '<option value="'
										+ result[i]
									+ '">'
									+ result[i]
									+ '</option>';
								}
								html += '</option>';

								$("#inputLanguage")
								.prop(
										'disabled',
										false);
								$('#inputLanguage')
								.html(html);

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));

							}

						});

					});


			function setComponentUploadStatus(result,alert,status,submit_btn,user){
				var alert_elem = document.getElementById(alert);
				var status_elem = document.getElementById(status);
				var user_elem = document.getElementById(user);
				var btn_elem = document.getElementById(submit_btn);
				var tutorial = document.getElementById("tutorialId");
				
				alert_elem.classList.remove("d-none");
				alert_elem.innerText = result['message'];
				status_elem.innerText = result['component_status'];
				user_elem.innerText = result['user'];
				if(result['response']=="success"){
					alert_elem.classList.remove('alert-danger');
					alert_elem.classList.add('alert-success');
					btn_elem.disabled = true;
				}else{
					alert_elem.classList.remove('alert-success');
					alert_elem.classList.add('alert-danger');
				}
				tutorial.value = result['tutorial_id'];
			}
			
			function setErrorStatus(alert_id){
				var alert_elem = document.getElementById(alert_id);
				alert_elem.classList.remove("d-none");
				alert_elem.classList.add('alert-danger');
				alert_elem.innerText = COMPONENT_UPLOAD_ERROR_MSG;
			}

			function setModalAlertStatus(alert_type,msg){
				var alert_elem = document.getElementById(alert_id);
				alert_elem.classList.add('alert-danger');
				alert_elem.innerText = COMPONENT_UPLOAD_ERROR_MSG;
			}
						
			$('#outlineId').click(function() {
						let [tutorialId,category,topicid,lang] = setTutorialData();
						var outline = editor.getData();
						$.ajax({
							type : "GET",
							url : projectPath+"addOutline",
							data : {
								"saveOutline" : outline,
								"id" : tutorialId,
								"categoryname" : category,
								"topicid" : topicid,
								"lanId" : lang
							},
							contentType : "application/json",
							success : function(result) {
								setComponentUploadStatus(result,'alert-outline','status-outline','outlineId','user-outline');
							},
							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
								setErrorStatus('alert-outline');
							}
						});
					});

			
			$('#keywordId').click(function() {
						let [tutorialId,category,topicid,lang] = setTutorialData();
						var keywordArea = $("#keywordArea").val();
						
						$.ajax({
							type : "GET",
							url : projectPath+"addKeyword",
							data : {
								"savekeyword" : keywordArea,
								"id" : tutorialId,
								"categoryname" : category,
								"topicid" : topicid,
								"lanId" : lang
							},
							contentType : "application/json",
							success : function(result) {
							setComponentUploadStatus(result,'alert-kw','status-kw','keywordId','user-kw');
							},

							error : function(err) {
								console.log("not working. ERROR: "	+ JSON.stringify(err));
								setErrorStatus('alert-kw');
							}

						});

					});

			$('#scriptId').click(function() {
						let [tutorialId,category,topicid,lang] = setTutorialData();
						
						var formData = new FormData();
						formData.append('categoryname', category);
						formData.append('topicid', topicid);
						formData.append('lanId', lang);
						formData.append('id',tutorialId);

						$.ajax({
							type : "POST",
							url : projectPath+"addScript",
							data : formData,
							processData : false,
							contentType : false,
							cache : false,
							success : function(result) {
								setComponentUploadStatus(result,'alert-script','status-script','scriptId','user-script');
							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
								setErrorStatus('alert-script');
							}
						});

					});

			$('#slideId').click(function() {
						$('.loader-wrapper').removeClass('d-none');
						let [tutorialId,category,topicid,lang] = setTutorialData();
						
						var form = $('#upload-file-form')[0];
						var formData = new FormData(form);
						formData.append('categoryname', category);
						formData.append('topicid', topicid);
						formData.append('lanId', lang);
						formData.append('id',tutorialId);
						$.ajax({
							type : "POST",
							url : projectPath+"addSlide",
							data : formData,
							enctype : 'multipart/form-data',
							processData : false,
							contentType : false,
							cache : false,
							success : function(result) {
								$('.loader-wrapper').addClass('d-none');
								setComponentUploadStatus(result,'alert-slide','status-slide','slideId','user-slide');
							},

							error : function(err) {
								$('.loader-wrapper').addClass('d-none');
								console.log("not working. ERROR: "+ JSON.stringify(err));
							setErrorStatus('alert-slide');
							}

						});

					});


		
			/* video for thumnail and video */

			
			$('#videoId').click(function() {
						$('.loader-wrapper').removeClass('d-none');
						let [tutorialId,category,topicid,lang] = setTutorialData();
						
						var form = $('#upload-video')[0];
						var formData = new FormData(form);
						
						formData.append('id',tutorialId);
						formData.append('categoryname',category);
						formData.append('topicid', topicid);
						formData.append('lanId', lang);

						$.ajax({
							type : "POST",
							url : projectPath+"addVideo",
							data : formData,
							enctype : 'multipart/form-data',
							processData : false,
							contentType : false,
							cache : false,
							success : function(result) {
								$('.loader-wrapper').addClass('d-none');
								setComponentUploadStatus(result,'alert-video','status-video','videoId','user-video');
							},

							error : function(err) {
								$('.loader-wrapper').addClass('d-none');
								console.log("not working. ERROR: "+ JSON.stringify(err));
								setErrorStatus('alert-video');
							}

						});

					});

			/* here calling approve button for contributorvideoUpload */
			
			$('.approveContributor').click(
					function() {
						// use localStorage to retrieve information on
						// page refresh
						localStorage.setItem('activeTab', "Contributer");

						var contributionId = $(this).val();

						$.ajax({
							type : "GET",
							url : projectPath+"enableRoleById",
							data : {
								"id" : contributionId
							},
							contentType : "application/json",
							success : function(result) {

								$("#statusContributor").prop('disabled', false);

								localStorage.setItem('msg', result);
								location.reload();

							},

							error : function(err) {
								console.lo3g("not working. ERROR: "+ JSON.stringify(err));
							}

						});

					});

			// Here is code for Admin Reviwer Approve
/***************************** changes made by om prakash **************************************************/
			
			$('.approveAdmin').click(function() {
						// use localStorage to retrieve information on
						// page refresh
						localStorage.setItem('activeTab', "Admin");
						var contributionId = $(this).val();

						$.ajax({
							type : "GET",
							url : projectPath+"enableRoleById",
							data : {
								"id" : contributionId
							},
							contentType : "application/json",
							success : function(result) {

								$("#statusAdmin").prop('disabled',false);
								localStorage.setItem('msg', result);

								$('#ContributerPage').on('hidden.bs.modal', function() {

											location.reload();
								});

								location.reload();
							},

							error : function(err) {
								console.lo3g("not working. ERROR: "+ JSON.stringify(err));
							}

						});

					});

			// Here is code for Quality Reviweer
/***************************** changes made by om prakash **************************************************/
			
			$('.approveQuality').click(function() {
						// use localStorage to retrieve information on
						// page refresh
						localStorage.setItem('activeTab', "Quality");
						var contributionId = $(this).val();

						$.ajax({
							type : "GET",
							url : projectPath+"enableRoleById",
							data : {
								"id" : contributionId
							},
							contentType : "application/json",
							success : function(result) {

								$("#statusQuality").prop('disabled',false);
								$('#statusQuality').html(result);
								localStorage.setItem('msg', result);

								$('#ContributerPage').on('hidden.bs.modal', function() {

											location.reload();

								});

								location.reload();

							},

							error : function(err) {
								console.lo3g("not working. ERROR: "
										+ JSON.stringify(err));
							}

						});

					});

			// Here is code for Master Trainer

			$('.approvemaster').click(function() {
						// use localStorage to retrieve information on
						// page refresh
						localStorage.setItem('activeTab',"MasterTrainer");

						var contributionId = $(this).val();

						$.ajax({
							type : "GET",
							url : projectPath+"enableRoleById",
							data : {
								"id" : contributionId
							},
							contentType : "application/json",
							success : function(result) {

								$("#statusMaster").prop('disabled',false);
								$('#statusMaster').html(result);
								localStorage.setItem('msg', result);

								$('#ContributerPage').on('hidden.bs.modal', function() {

											location.reload();

								});

								location.reload();

							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}

						});

					});
			
			//Following function refreshes the table dynamically whenever a row is deleted
			$('.dynamicTable tbody').on( 'click', '.rejectRole', function () {
				var elem = $(this).parents('table');
				var id = $(elem).attr('id');
				var table = $('#'+id).DataTable();	
		    	table.row( $(this).parents('tr') ).remove().draw();
			} );
			
			//Following function refreshes the table dynamically whenever a row is deleted
			$('.dynamicTable tbody').on( 'click', '.approveRole', function () {
				//alert('b');
				var elem = $(this).parents('table');
				var id = $(elem).attr('id');
				var table = $('#'+id).DataTable();	
		    	table.row( $(this).parents('tr') ).remove().draw();
			} );
			
			$('.rejectRole').click(function() {
				// use localStorage to retrieve information on
				// page refresh
				localStorage.setItem('activeTab',"MasterTrainer");
				var contributionId = $(this).val();
				
				
				var table = $('#tableIdContributor').DataTable();

				$.ajax({
					type : "GET",
					url : projectPath+"deleteRole",
					data : {
						"id" : contributionId
					},
					contentType : "application/json",
					success : function(result) {

						$("#statusMaster").prop('disabled',false);
						$('#statusMaster').html(result);
						localStorage.setItem('msg', result);
						table.draw();
				
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
					}

				});

			});
			
/**************************************** End ************************************************************/
						$('#contributorId').on('change',function() {
						
						var userContributor = $(this).find(':selected').val();
						$.ajax({
							type : "GET",
							url : projectPath+"loadLanguageByUser",
							data : {
								"id" : userContributor
							},
							contentType : "application/json",
							success : function(result) {
								var html = '';
								var len = result.length;
								html += '<option value="0">Select Language</option>';
								for (var i = 0; i < len; i++) {
									html += '<option value="'+ result[i]+ '">'+ result[i]+ '</option>';
								}
								html += '</option>';

								$("#lanId").prop('disabled',false);
								$('#lanId').html(html);
							},

							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}
						});

					});
			
	
			$('#lanId').on('change',function() {
						$.ajax({
							type : "GET",
							url : projectPath+"loadCategory",
							contentType : "application/json",
							success : function(result) {
								var html = '';
								html += '<option value="0">Select Category</option>';
								$.each(result , function( key, value ) {
									html += `<option value=${key} >${value}</option>`
				  	  			 })
								$('#catgoryByContributor').html(html);
							},
							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}
						});
					});
			
/************************* changes made by om prakash **********************************************/	
			$('#catgoryByContributor').on('change',function() {
						var category = $(this).find("option:selected").val();
						$.ajax({
							type : "GET",
							url : projectPath+"loadTopicByCategory",
							data : {
								"id" : category
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;

								$.each(result , function( key, value ) {
			  	  			        html += '<option value=' + key + '>'
			  			               + value
			  			               + '</option>';
			  	  			 		})
			  	  			 	html += '</option>';
								$("#assignTopic").prop('disabled', false);
								$('#assignTopic').html(html);

							},
							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}
						});

					});
					
					

			
/*********************************** end*******************************************************/

						$('#viewScript').click(function() {
						var categoryid = $("#categoryId").val();
						var topicid = $("#topicId").val();
						var lanId = $("#lanId").val();
						$.ajax({
							type : "GET",
							url : projectPath+"scriptPdf",
							data : {
								"categorname" : categoryid,
								"topicid" : topicid,
								"lanId" : lanId
							},
							contentType : "application/json",
							success : function(result) {
								var res = '[(@{/files/})]'+result;
								source = document.getElementById('viewScript');
								source.setAttribute('href', res);
								var win = window.open(res, '_blank');
								if (win) {// Browser has allowed it to be opened
									win.focus();
								} else {
									// Browser has blocked it
//									alert('Please allow popups for this website');
								}
							},
							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}
						});
					});
		
			$('#VideoAcceptAdmin').change(function() {

				var vals = $('#VideoAcceptAdmin').val();

				if (vals === '2') {
					$('#videoNeedImprovement').show();
				}else{
					$('#videoNeedImprovement').hide();
				}

			});

					/* Here is code for comment on componenet Video Domain */

			$('#videoAcceptOrNeedToImprovemenet').click(
					function() {

						var categoryid = $("#categoryId").val();
						var topicid = $("#topicId").val();
						var lanId = $("#lanId").val();
						var videoCommentMsg = $("#videoCommentMsg")
						.val();

						$.ajax({

							type : "GET",
							url : projectPath+"commentOnVideo",
							data : {
								"categorname" : categoryid,
								"topicid" : topicid,
								"lanId" : lanId,
								"videoCommentMsg" : videoCommentMsg
							},
							contentType : "application/json",
							success : function(result) {

								$("#saveCommentVideo").prop('disabled',
										false);
								$('#saveCommentVideo').html(result);

							},

							error : function(err) {
								console.log("not working. ERROR: "
										+ JSON.stringify(err));
							}

						});

					});

			/* Here is code for admin Video */

			$('#videoViewAdmin')
			.click(
					function() {
						var categoryid = $("#categoryId").val();
						var topicid = $("#topicId").val();
						var lanId = $("#lanId").val();

						$
						.ajax({

							type : "GET",
							url : projectPath+"viewVideoAdmin",
							data : {
								"categorname" : categoryid,
								"topicid" : topicid,
								"lanId" : lanId
							},
							contentType : "application/json",
							success : function(result) {

								var res = result;

								source = document
								.getElementById('storedVideoId');
								source.setAttribute(
										'src',res);
								source.setAttribute(
										'type',
								'video/mp4')
								source.play();

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

			$('#videoViewIdAdmin')
			.click(
					function() {
						var categoryid = $("#categoryId").val();
						var topicid = $("#topicId").val();
						var lanId = $("#lanId").val();

						$
						.ajax({

							type : "GET",
							url : projectPath+"viewVideoAdmin",
							data : {
								"categorname" : categoryid,
								"topicid" : topicid,
								"lanId" : lanId
							},
							contentType : "application/json",
							success : function(result) {

								var res = result;

								source = document
								.getElementById('storedVideoId');
								source.setAttribute(
										'src',
										res);
								source.setAttribute(
										'type',
								'video/mp4')

							},

							error : function(err) {
								console
								.log("not working. ERROR: "
										+ JSON
										.stringify(err));
							}

						});

					});

			/* here is code for video accepet or need to improvement */
/************************ changes made by om prakash ***************************************/
			
			$('#videoAcceptOrNeedToImprovemenetByAdmin').click(function() {
						var tutorialId = $("#tutorialId").val();
						var vals = $("#VideoAcceptAdmin").val();
						if (vals == 0) {
							$('#msgVideoCommentByAdmin').css({
								'visibility' : 'hidden'
							});

							alert("Select Accept Or Need To Improvement");

						} else if (vals == 1) {
							$('#msgVideoCommentByAdmin').css({
								'visibility' : 'hidden'
							});

							$
							.ajax({

								type : "GET",
								url : projectPath+"acceptAdminVideo",
								data : {
									"id" : tutorialId,
									"show_status" :1
								},
								contentType : "application/json",
								success : function(result) {
									$("#statusVideoByAdmin").prop('disabled',false);
									$('#statusVideoByAdmin').html(result);
										$('#success_msg').html(result);
									showStatus(SUCCESS, result);

								},

								error : function(err) {
									
									console.log("not working. ERROR: "+ JSON.stringify(err));
									result = "Error";
									showStatus(ERROR, result);
								}

							});

						} else if (vals == 2) {
							$('#msgVideoCommentByAdmin').css({
								'visibility' : 'visible'
							});
							var msg = $("#msgVideoCommentByAdmin").val();

//							alert("mse admin player" + msg);
						
							$.ajax({

								type : "GET",
								url : projectPath+"commentByAdminReviewer",
								data : {
									"id" :tutorialId,
									"msg" : msg
								},
								contentType : "application/json",
								success : function(result) {
									//$("#statusVideoByAdmin").prop('disabled',false);
									//$('#statusVideoByAdmin').html(result);

									//showStatus(SUCCESS, result);
									$('.a_v_cmt').show();
									$('.a_v_cmt').html(result);
									$('.a_v_cmt').addClass('alert-success');

								},

								error : function(err) {
									console.log("not working. ERROR: "+ JSON.stringify(err));
									result = "Error";
									showStatus(ERROR, result);
								}

							});

						}

					});
			
		/*************************** end ***********************************/

			$('#catAllID').change(function(){

				var selectedCategoryId=$(this).find(":selected").val();
				var lanId =$("#lanId").val();
				$.ajax({
					type: "GET",
					url: projectPath+"loadTopicByPreRequistic",
					data: { "id": selectedCategoryId, "lanId":lanId},
					contentType: "application/json",
					success: function (result)
					{

						var html = '';
						var len = result.length;
						html += '<option value="0"></option>';
						for (var i = 0; i < len; i++) {
							html += '<option value="' + result[i] + '">'
							+ result[i]
							+ '</option>';
						}
						html += '</option>';

						$("#inputTopicPre").prop('disabled',false);
						$('#inputTopicPre').html(html);

					},

					error : function(err){
						console.log("not working. ERROR: "+JSON.stringify(err));
					}

				});

			});


			// Here is code for upload preRequistic link path

			$('#preRequistic').click(function()
					{

				var selectedCategoryId=$(this).find(":selected").val();
				var lanId =$("#lanId").val();
				var inputTopicPre =$("#inputTopicPre").val();


				//alert(inputTopicPre);

				$.ajax({
					type: "GET",
					url: projectPath+"loadTopicByPreRequistic",
					data: { "id": selectedCategoryId, "lanId":lanId},
					contentType: "application/json",
					success: function (result)
					{

						//alert("save information");

						var html = '';
						var len = result.length;
						html += '<option value="0">Select Topic</option>';
						for (var i = 0; i < len; i++) {
							html += '<option value="' + result[i] + '">'
							+ result[i]
							+ '</option>';
						}
						html += '</option>';

						$("#inputTopicPre").prop('disabled',false);
						$('#inputTopicPre').html(html);

					},

					error : function(err){
						console.log("not working. ERROR: "+JSON.stringify(err));
					}

				});

					});



			/*Here is code for Contributor PreRequistic component  display topic */

			$('#catAllID').change(function(){

				var selectedCategoryId=$(this).find(":selected").val();
				var lanId =$("#lanId").val();
				$.ajax({
					type: "GET",
					url: projectPath+"loadTopicByPreRequistic",
					data: { "id": selectedCategoryId, "lanId":lanId},
					contentType: "application/json",
					success: function (result)
					{

						var html = '';
						var len = result.length;
						html += '<option value="0"></option>';
						for (var i = 0; i < len; i++) {
							html += '<option value="' + result[i] + '">'
							+ result[i]
							+ '</option>';
						}
						html += '</option>';

						$("#inputTopicPre").prop('disabled',false);
						$('#inputTopicPre').html(html);

					},

					error : function(err){
						console.log("not working. ERROR: "+JSON.stringify(err));
					}

				});

			});




			// Here is code for upload preRequistic link path

			$('#preRequistic').click(function()
					{

				var selectedCategoryId=$(this).find(":selected").val();
				var lanId =$("#lanId").val();
				var inputTopicPre =$("#inputTopicPre").val();


				//alert(inputTopicPre);

				$.ajax({
					type: "GET",
					url: projectPath+"loadTopicByPreRequistic",
					data: { "id": selectedCategoryId, "lanId":lanId},
					contentType: "application/json",
					success: function (result)
					{

						//alert("save information");

						var html = '';
						var len = result.length;
						html += '<option value="0">Select Topic</option>';
						for (var i = 0; i < len; i++) {
							html += '<option value="' + result[i] + '">'
							+ result[i]
							+ '</option>';
						}
						html += '</option>';

						$("#inputTopicPre").prop('disabled',false);
						$('#inputTopicPre').html(html);

					},

					error : function(err){
						console.log("not working. ERROR: "+JSON.stringify(err));
					}

				});

					});



			$(".c-modal-close").click(function() {
				$(".modal").removeClass("is-active");
			});

/********* Changes made by Om Prakash ************************/

			$(".comment-contri").click(function() {
				component = this.id;
				var elem_id = '#'+component+'_comment'
				var tutorialId = $("#tutorialId").val();
				
				var msg = $(elem_id).val();
				$.ajax({
					type : "GET",
					url : projectPath+"commentByContributor",
					data : {
						"id" :tutorialId,
						"type":component,
						'msg' : msg
					},
					contentType : "application/json",
					success : function(result) {
						
						$('.commentS').addClass('d-block');
						 $('.commentS').html(result);
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));

					}
				});

			});

			$("#show_all_consultants").click(function() {
				$.ajax({
					type: "GET",
					url: projectPath+"displayConsultants",
					contentType: "application/json",
					success: function (result){
						$('.cons_record').show();
						var id = result[0].id;
						var name = result[0].nameConsaltant;
						var desc = result[0].descriptionConsaltant;
						var img = result[0].uploadConsaltantImage;
						var editLink = 'productconsalantant/edit/' + id;
						var elink = '<a href="'+editLink+'">Edit</a>';
						var deleteLink = '/consalantant/delete/' + id;
						var dlink = '<a onclick="submitForm()" href="'+deleteLink+'">Delete</a>';

						var markup = "<tr><td>" + id + "</td><td>" + name + "</td><td>"+desc+"</td><td>"+"image"+"</td><td>"+elink+"</td><td>"+dlink+"</td></tr>";

						$("table tbody").append(markup);

					},

					error : function(err){
						console.log("not working. ERROR: "+JSON.stringify(err));
					}
				});
			});


			$('#categorySelect').on(
					'change',
					function() {
						var category = $(this).val();

						$.ajax({
							type : "GET",
							url : projectPath+"listTopicByCategory",
							data : {
								"category" : category
							},
							contentType : "application/json",
							success : function(result) {

								var html = '';
								var len = result.length;

								for (var i = 0; i < len; i++) {
									html += '<option value="'
										+ result[i] + '">'
										+ result[i] + '</option>';
								}
								html += '</option>';

								$("#topicSelect")
								.prop('disabled', false);
								$('#inputTopic').html(html);

							},
							error : function(err) {
								console.log("not working. ERROR: "
										+ JSON.stringify(err));
							}
						});

					});

			$(".logoToUpload").on('change', function() {

				var fileSize = this.files[0].size;
				if(fileSize > 500000){
					alert("File size should be less than 5kB");
					this.value="";
					return false;
				}
			});

			$("#addNullPrerequisite").click(function() {
				var tutorialId = $("#tutorialId").val();
				var categoryid = $("#categoryId").val();
				var topicid = $("#topicID").val();
				var lanId = $("#lanId").val();
				var info_elem = document.getElementById('current_pr');
				var prRequired_checkbox = document.getElementById('prRequired');
				
				
				$.ajax({
					type : "GET",
					url : projectPath+"addPreRequisticWhenNotRequired",
					data : {
						"id" :tutorialId,
						"categoryname" : categoryid,
						"topicid" : topicid,
						"lanId" : lanId
					},
					contentType : "application/json",
					success : function(result) {
						setComponentUploadStatus(result,'alert-pre','status-pre','addNullPrerequisite','user-pre');
						
						prRequired_checkbox.disabled = true;
						info_elem.classList.remove('d-none');
						info_elem.innerText = "Selected prerequisite : This tutorial has no prerequisite."
					},

					error : function(err) {
						console.log("not working. ERROR: "+ JSON.stringify(err));
						setErrorStatus('alert-pre');
					}
				});

			});

		});


function validateEmail($email) {
	  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  return emailReg.test( $email );
}

function loadAllLanguages() {
	component = this;
	$.ajax({
		type : "GET",
		url : projectPath+"loadLanguages",
		data : {
//			"id" :tutorialId
		},
		contentType : "application/json",
		success : function(result) {
			$(component).html('');
			for (lang in result){
				$(component).append("<option>"+result[lang]+"</option>");
			}
		},

		error : function(err) {
			alert('error');
			console.log("not working. ERROR: "+ JSON.stringify(err));

		}
	});
}

/*---------------------------------------Profile picture update Ajax call-------------------------------*/

function updateProfilePicture(){
	
	var form=$('#uploadProfilePic')[0];
	var data=new FormData(form);
	
	
	var urlPassed;
	
	urlPassed= projectPath+"updateProfilePic";


		$.ajax({
			type: "POST",
			enctype: 'multipart/form-data',
			url: urlPassed,
			data:data,
			cache:false,
			contentType:false,
			processData:false,
			timeout: 600000,
			success:function(data){
				
				 $('#chngProfilePic').prop('disabled',true);
				 $('#profileText').css({"display": "block"});
				
			
			},
		
		error : function(err){
			console.log("not working. ERROR: "+JSON.stringify(err));
			}

	});
	
	
}


function readImageUrl(input) {
	  if (input.files && input.files[0]) {
	    var reader = new FileReader();
	    
	    reader.onload = function(e) {
	      $('#pictureShow').attr('src', e.target.result);
	    }
	    
	    reader.readAsDataURL(input.files[0]); // convert to base64 string
	  }
	}
function validate_file_size(elem,s){
	var fileSize = elem.files[0].size;
	if(fileSize > s){
		alert("Please check file size");
		elem.value="";
		return false;
	}
}

$('#btn_unpublish').click(function() {
				var msg='';
				var id = this.value;
				$
						.ajax({

							type : "GET",
							url : projectPath+ "unpublishTutorial",
							data : {
								"id" : id
							},
							contentType : "application/json",
							success : function(result) {
								if(result=="success"){
									msg = 'Tutorial is unpublished.';
									$('#response').addClass("alert-success");
								}else if(result=="0"){
									msg = 'Tutorial is already unpublished.';
									$('#response').addClass("alert-warning");
								}else{
									msg = 'Some error occurred. Please contact site admin.';
									$('#response').addClass("alert-danger");
								}
								$('#response').html(msg);
								
								$('#btn_unpublish').hide();
								$('#btn_unpublish_anonther').show();
								
								},
							error : function(err) {
								console.log("not working. ERROR: "+ JSON.stringify(err));
							}
						});

			});
			
/************************ Domain reviewer code **********************************/
//for all select feedback change; if it is need for improvement show comment box
//give a common class to all select-review btns : select-review
//get all select elems
//add cganne event listerner for each
//show if need imrpov

function set_alert_status(elem,result ){
	elem.classList.remove('d-none');
	if(result == DOMAIN_REVIEW_SUCCESS){
		elem.classList.add('alert-success');
		elem.innerText = COMPONENT_STATUS_SUCCESS;
	}else if(result = DOMAIN_REVIEW_FAIL){
		elem.classList.add('alert-danger');
		elem.innerText = COMPONENT_STATUS_FAILED;
	}
}

function update_comp_status(response,status,component){
	if(response == DOMAIN_REVIEW_SUCCESS){
		var elem = $("span[data-comp='" + component +"']");
		elem[0].innerText = status;
	}
}

function getAcceptUrl(component){
	switch(component){
		case OUTLINE:
			return 'acceptDomainOutline';
		case SCRIPT:
			return 'acceptDomainScript';
		case VIDEO:
			return 'acceptDomainVideo';
		case SLIDE:
			return 'acceptDomainSlide' ;
		case KEYWORD:
			return 'acceptDomainKeywords' ;
		case PRE_REQUISITE:
			return 'acceptDomainPreRequistic' ;
	}
}



var select_review = document.querySelectorAll('.select-review');
var submit_review = document.querySelectorAll('.submit-review');
select_review.forEach(function(elem){
	elem.addEventListener('change', (event) => {
	let review_status = event.currentTarget.value;
	let form_elem = event.currentTarget.parentElement.parentElement;
	comment_box = form_elem.querySelector('.textarea-comment');
	if(review_status == REVIEW_NEED_IMPROVEMENT){
		comment_box.classList.remove('d-none');
	}else{
		comment_box.classList.add('d-none');
	}
});
}) 
function getDomainReviewURL(component){
		switch(component){
			case OUTLINE: return 'acceptDomainOutline';
			case SCRIPT: return 'acceptDomainScript';
			case VIDEO: return 'acceptDomainVideo';
			case SLIDE: return 'acceptDomainSlide' ;
			case KEYWORD: return 'acceptDomainKeywords' ;
			case PRE_REQUISITE: return 'acceptDomainPreRequistic' ;
	}	
}

function getQualityReviewURL(component){
		switch(component){
			case OUTLINE: return 'acceptQualityOutline';
			case SCRIPT: return 'acceptQualityScript';
			case VIDEO: return 'acceptQualityVideo';
			case SLIDE: return 'acceptQualitySlide' ;
			case KEYWORD: return 'acceptQualityKeywords' ;
			case PRE_REQUISITE: return 'acceptQualityPreRequistic' ;
	}
}


function getURL(role,component,review){
	if(review == REVIEW_NEED_IMPROVEMENT) return 'commentByReviewer'
	if(role == DOMAIN) return getDomainReviewURL(component);
	if(role == QUALITY) return getQualityReviewURL(component); 
}

function setTutorialData(){
	let tutorialId=$("#tutorialId").val();
	let category = $("#categoryId").val();
	let topicid = $("#topicID").val();
	let lang = $("#lanId").val();
	
	return [tutorialId,category,topicid,lang];
}
// ************************************ contributor uploads ************************************



submit_review.forEach(function(elem){
	elem.addEventListener('click',(event) => {
		let form_elem = event.currentTarget.parentElement;
		let comment = form_elem.querySelector('.comment-box').value;
		var tutorialId = $("#tutorialId").val();
		var review = form_elem.querySelector('.select-review').value;
		let modalBody = form_elem.parentElement.parentElement.parentElement;
		let alert_status = modalBody.querySelector('.alert-status'); 
		let component_type = form_elem.getAttribute('data-type');
		let role = form_elem.getAttribute('data-role');
		var url = '';
		if(review == REVIEW_SELECT){
			alert(ALERT_SELECT_REVIEW);
		}else{
			event.currentTarget.disabled = true;
			url = getURL(role,component_type,review);
			req_data = {"id" : tutorialId,"msg" : comment,"type" : component_type,"role" : role};
			$.ajax({
				url : projectPath+url,
				data : req_data,
				contentType : "application/json",
				success : function(result){
					set_alert_status(alert_status,result["response"]);
					update_comp_status(result["response"],result["status"],component_type);
				},
				error : function(err){
					console.log("not working. ERROR: "+ JSON.stringify(err));
					set_alert_status(alert_status,result["response"]);
				}
			})
		}
		
});
	
});