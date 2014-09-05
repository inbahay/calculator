//<![CDATA[

		   function residualvalue()

		   {

			   if (document.getElementById('showmsg').value =="")

			   {

				   if (parseInt(document.getElementById('txtrv1').value) == 0)

				   {

						alert('Please enter Residual Value or Percentage now.\nIf you do not know your Residual Value or Percentage, it will be calculated later. ');

					}

					document.getElementById('showmsg').value = "1";

			   }

			 }

                function calcresult()

                {

                        

                    //    document.getElementById('depval').value  = parseFloat(document.getElementById('accval').value)  -  parseFloat(document.getElementById('rvval').value); 



                        var NetCC  = parseFloat(document.getElementById('accval').value) ; 

                        var Residual = parseFloat(document.getElementById('rvval').value) ; 

						var MSRP = parseFloat(document.getElementById('msrpval').value) ; 

						 var Term = parseFloat(document.getElementById('termval').value);

						if (parseInt(Residual) == 0)

						{

								

									if(Term == 24)

									{

										Residual = MSRP * 0.6000;

										Percentage = 60;

					

									} 

									else if(Term == 36)

									{

										Residual = MSRP * 0.5100;

										Percentage = 51;

					

									}

									else if(Term == 48)

									{

										Residual = MSRP * 0.4500;

										Percentage = 45;

					

									}

									else if(Term == 60)

									{

										Residual = MSRP * 0.3900;

										Percentage = 39;

					

									} // end if

									else if(24 < Term&&Term < 36)

									{

										Residual = MSRP * 0.5500;

										Percentage = 55;

					

									} // end if

									else if(36 < Term&&Term < 48)

									{

										Residual = MSRP * 0.4800;

										Percentage = 48;

					

									} // end if

									else if(48 < Term&&Term < 60)

									{

										Residual = MSRP * 0.4200;

										Percentage = 42;

					

									} // end if

									else if(60 < Term)

									{

										Residual = MSRP * 0.3300;

										Percentage = 33;

					

									} // end if





						}

						document.getElementById('rvval').value = Residual;

						document.getElementById('txtrv1').value = Residual;

						document.getElementById('txtrv2').value = Percentage;

                        var Depreciation = parseFloat(document.getElementById('accval').value)  -  parseFloat(document.getElementById('rvval').value);

                   		document.getElementById('depval').value  = "$ " + Depreciation ;

                        var MFactor = parseFloat(document.getElementById('mfval').value) ; 

                        var DepreciationFee = Depreciation / Term;

                        var FinanceFee = (NetCC + Residual) * MFactor;

                        

                        var Reduction = parseFloat(document.getElementById('ccrval').value);

                        var TotalFinance = Math.round(((NetCC + Residual) * MFactor) * Term);

                        document.getElementById('rentval').value = "$ " +  TotalFinance;

                        var Payment = Math.round((DepreciationFee + FinanceFee) * 100) / 100;

                        document.getElementById('txtresult').value = "$ " + Payment.toFixed(2);

                        var TaxRate =  parseFloat(document.getElementById('stval').value) ;

                        var SalesTax = Math.round(Payment * TaxRate) / 100;

                        var SalesTaxD = SalesTax;

                        document.getElementById('mpval').innerHTML = "$ " + Payment.toFixed(2) +  " +     $ " + SalesTax.toFixed(2) + " tax";

                        var TotalTaxOnPayments = Math.round(((Payment * TaxRate) / 100) * Term);

                        var DownPayment = 0 ;

						if (document.getElementById('txtccr1').value != "")

	 							DownPayment = parseFloat(document.getElementById('txtccr1').value);

                        var Other = 0;

							if (document.getElementById('txtccr3').value != "")

	 							Other = parseFloat(document.getElementById('txtccr3').value);



						

                        var TradeIn = parseFloat(document.getElementById('txtccr2').value);



                        var TotalTaxOther = (DownPayment * TaxRate) / 100 ; 

						TotalTaxOther = TotalTaxOther + (Other * TaxRate) / 100 

						TotalTaxOther = TotalTaxOther - (TradeIn * TaxRate) / 100;

                        var TotalTax = Math.round(TotalTaxOnPayments + TotalTaxOther);

                        document.getElementById('totalstval').value = 	"$ " +  TotalTax;

                        var TotalPayment = Payment + SalesTax;

                        var TotalAllPayments = Depreciation + TotalFinance + TotalTaxOnPayments;

                        var TotalCost = TotalAllPayments + Reduction + TotalTaxOther;

                        

                        document.getElementById('totalpaymentval').value = "$ " + TotalAllPayments;

                        document.getElementById('totalleasecost').value = "$ " + TotalCost;

                        

                }

                

        function showwin(id)

        {

                

                if (((document.getElementById('txtmsrp').value =="") ||  (parseFloat(document.getElementById('txtmsrp').value) == 0)) &&  (id =="cal"))

                {

                        alert("Please enter MSRP Value");

						document.getElementById('txtmsrp').focus();

                        return;

                }

                                else   if (((document.getElementById('txtbcc').value =="") ||  (parseFloat(document.getElementById('txtbcc').value) == 0)) &&  (id =="cal"))

                {

                        alert("Please enter Base cap Cost Value");

                        return;

                }

        

             //    document.getElementById("submain").style.display = 'none';



                

                if ((id =="msrp")  ||(id =="cal") || (id == "ccr") ||   (id == "acc") ||  (id == "rv") ||  (id == "mf") ||  (id == "term") ||  (id == "st") ||  (id == "result"))

                {

                       

                        

                        document.getElementById("msrp").style.display = 'none';



                        document.getElementById("cal").style.display = 'none';

                        document.getElementById("ccr").style.display = 'none';

                          document.getElementById("mf").style.display = 'none';

                     

                        document.getElementById("rv").style.display = 'none';

                        



                        document.getElementById("term").style.display = 'none';



                        document.getElementById("result").style.display = 'none';

                        

                        document.getElementById(id).style.display = 'block';

						if (id == "ccr")

						{

							document.getElementById('txtacc').focus();

						}

						else if ((id == "rv") ||  (id == "mf"))

						{

							document.getElementById('txt'+id+'1').focus();

						}

						else

						{

							document.getElementById('txt'+id).focus();

						}



                        

                }

                else

                document.getElementById(id).style.display = 'block';

                

        }





        function numberalone () {

   	  var c = (window.event) ? event.keyCode : e.keyCode;

	

        if (c >= 48 &&  c <=57 || c == 46)

        {       

            return true;

        }

        else

        return false;

  }

  function noNumbers(e)

{



var keynum;

var keychar;

var numcheck;if(window.event) // IE

  {

  keynum = e.keyCode;

  }

else if(e.which) // Netscape/Firefox/Opera

  {

  keynum = e.which;

  }



if (keynum >= 48 &&  keynum <=57 || keynum == 46)

{

	return true;

}

else

return false;

}

  function acccalc()

  {

          document.getElementById('accval').value = document.getElementById('txtacc').value;



  }

  function accvalcalc()

  {

        

                document.getElementById('ccrval').value = parseFloat(document.getElementById('txtccr1').value) + parseFloat(document.getElementById('txtccr2').value) + parseFloat(document.getElementById('txtccr3').value);



        var acctemp = (parseFloat(document.getElementById('txtbcc').value) - parseFloat(document.getElementById('ccrval').value)) + parseFloat(document.getElementById('calval').value);

        

        

                document.getElementById('accval').value = acctemp;

                document.getElementById('txtacc').value =       document.getElementById('accval').value ;

                document.getElementById('calval').value = document.getElementById('txtcal').value;



  }

  function checkterms()

  {

                if  (document.getElementById('txtterm').value == "")

                {

                        document.getElementById('txtterm').focus();

						alert("Please Enter Terms");

                        return false;

                }

                

                if  (parseInt(document.getElementById('txtterm').value) < 24)

                {

                        document.getElementById('txtterm').focus();

						alert("Terms should be greater than 24");

                        return false;

                }

                                calcresult();

                                showwin('result');

                

                return true;

  }

  

  function totalwin()



  {



        document.getElementById('msrpval').value = document.getElementById('txtmsrp').value;

        document.getElementById('bccval').value = document.getElementById('txtbcc').value;

        

        

        

        

        

        

        document.getElementById('rvval').value = document.getElementById('txtrv1').value ;

        

        document.getElementById('termval').value = document.getElementById('txtterm').value ;

        document.getElementById('stval').value = document.getElementById('txtst').value ;

  }

  function percentwin()

  {

        if (document.getElementById('txtrv2').value  !="")

        {

                document.getElementById('txtrv1').value  = (parseFloat(document.getElementById('msrpval').value) * parseFloat(document.getElementById('txtrv2').value))/100;

                

        }

        document.getElementById('rvval').value = document.getElementById('txtrv1').value ;

  }

  function moneyfactor1()

  {

        

        if (document.getElementById('txtmf2').value != "")

                document.getElementById('txtmf1').value = (parseFloat(document.getElementById('txtmf2').value) / 2400).toFixed(5);

                document.getElementById('mfval').value =                document.getElementById('txtmf1').value 

                

  }

  function clearval(id)

  {

  	if (parseInt(document.getElementById(id).value) == 0)

	{

		document.getElementById(id).value = "";

		document.getElementById(id).focus();

	}

	document.getElementById(id).focus();

	return true;

  }

  function setval(id)

  {

  	if (document.getElementById(id).value == "")

	{

		document.getElementById(id).value = "0";

	}

	return true;

  }

  function moneyfactor2()

  {

        if (document.getElementById('txtmf1').value != "")

                document.getElementById('txtmf2').value = (parseFloat(document.getElementById('txtmf1').value) * 2400).toFixed(2);              

                document.getElementById('mfval').value =                document.getElementById('txtmf1').value 

  }





//]]>