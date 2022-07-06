import Actions from "../support/lib/action.js";

context("Tests of extention request", ()=>{
    describe('fill the application',()=>{
        it('create new request',function(){
            cy.login(Cypress.env('user').external.username,Cypress.env('user').external.password).then(()=>{
                cy.visit(Cypress.env('url').extRequest);
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_cblTipoSolicitud_0').check();
                Actions.type('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtNCertificado',Cypress.env('certificate').num);
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_BuscaCertificado');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_MensajeGeneral2_lblTitulo').isVisible();
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_MensajeGeneral2_btnSi');
                Actions.noEmpty('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtClaveNombreYORazonSocial');
                Actions.noEmpty('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtNombreYORazonSocial');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_btnBuscarRazonSocial').should('be.disabled');
                Actions.noEmpty('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtClaveTramitador');
                Actions.noEmpty('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtTramitador');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_ddlGestorAutorizado').should('have.value','9803');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_ddlNorma').should('have.value','367');
                Actions.noEmpty('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtNombreProducto');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_ddlOficinaNYCE').should('have.value','1');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblClasificaciondice').should('have.text', 'Exportación');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_0').should('be.checked');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_1').should('not.be.checked');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_2').should('not.be.checked');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_3').should('not.be.checked');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_rblClasificacionRegimen_4').should('not.be.checked');
                //check aduanas 
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblAduanadice').should('have.text','ENSENADA;');
                Actions.containVal('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtAduanas','ENSENADA;');
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_btnAgregarAduanas');
                Actions.select('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_lbSeleccionar',['ACAPULCO, GRO.','AGUA PRIETA','SUBTENIENTE LOPEZ, Q. ROO.'],['1','2','3'])
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAgregar');
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAceptar');
                Actions.containVal('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtAduanas','ENSENADA; ACAPULCO, GRO.; AGUA PRIETA; SUBTENIENTE LOPEZ, Q. ROO.;');
                //enable checkbox 
                Actions.check('#cblSubtipoSolicitud_0');
                Actions.check('#cblSubtipoSolicitud_1');
                Actions.check('#cblSubtipoSolicitud_2');
                Actions.check('#cblSubtipoSolicitud_3');
                //check marca
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblMarcaDice').contains('Marca Producto').isVisible();//isvisible
                Actions.containVal('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtMarca','Marca Producto');
                //check modelos 
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblModelo').contains('mod;').isVisible();//isvisible
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtModelos').isVisible();
                Actions.containVal('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtModelos','mod;');
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_btnAgregarModelos');
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_AgregarDato1_lblDato').isVisible();
                Actions.type('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_AgregarDato1_txtDatoAgregar','Modelo2');
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_AgregarDato1_btnAgregar');
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_AgregarDato1_btnAceptar');
                //check pais(es) origen 
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblPaisorigendice').contains("AFGANISTAN (EMIRATO ISLAMICO DE);").isVisible();
                Actions.containVal('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtPaisesOrigen','AFGANISTAN (EMIRATO ISLAMICO DE);');
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_Button1');
                Actions.select('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_lbSeleccionar',['ALBANIA (REPUBLICA DE)'],['56']);
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAgregar');
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAceptar');
                Actions.containVal('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtPaisesOrigen','AFGANISTAN (EMIRATO ISLAMICO DE); ALBANIA (REPUBLICA DE);');
                // check pais(es) procedencia
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblPaisprocedenciadice').contains("ANGUILA;").isVisible();
                Actions.containVal('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtPaisesProcedencia','ANGUILA;')
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_btnAgregarPaisesProcedencia');
                Actions.select('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_lbSeleccionar',['ANTIGUA Y BARBUDA (COMUNIDAD BRITANICA DE NACIONES)','ARMENIA (REPUBLICA DE)'],['60','229'])
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAgregar');
                Actions.click('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_SeleccionarDatos1_btnAceptar');
                Actions.containVal('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtPaisesProcedencia','ANGUILA; ANTIGUA Y BARBUDA (COMUNIDAD BRITANICA DE NACIONES); ARMENIA (REPUBLICA DE);');
                //check Fraccion(es) arancelarias
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblfraccionarancelariadice').contains('12345678').isVisible();//isvisible
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_lblClavesidentificacion').contains('test').isVisible();//isvisible
                cy.get('#LstFraccionesArancelariasClavesDice').should('be.disabled');
                cy.get('#LstFraccionesArancelariasClavesDice').contains('12345678; test').isVisible();
                cy.get('#LstFraccionesArancelariasClaves').contains('12345678; test').isVisible();
                Actions.click('#BtnAgregarFreaccionesArancelarias');
                cy.get('#LstFraccionesClaves').isVisible();
                Actions.type('#TxbFraccionarAncelaria','87654321');
                Actions.type('#TxtClavesFraccionesArancelarias','prueba');
                Actions.click(':nth-child(2) > [style="text-align:right;"] > input');
                Actions.click('[onclick="AceptarFraccionesarancelarias()"]');
                cy.get('#LstFraccionesArancelariasClaves').contains(Cypress.env('certificate').aduana).isVisible();
                Actions.type('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_txtMotivoSol','Test Nom086');
                //save button
                Actions.click('#btnGuardar');
                //save the new certificate number to delete it
                cy.get('#ctl00_ctl39_g_5936ed99_92c7_4f23_b334_7f21077fd94f_ctl00_MensajeGeneral1_lblTitulo').then($folio=>{
                    const folio=$folio.text().split(': ')[1];
                    cy.log(folio);
                    cy.wrap(folio).as('folio')
                })
            });
        })
        it('delete new request',function(){
            const numberWithCommas = (x) => {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            };
            // cy.loginAnalist(Cypress.env('user').internal.username,Cypress.env('user').internal.password).then(()=>{
            // cy.wait(6000);
            // })
            cy.visit(Cypress.env('url').login);
            Actions.click('.col-sm-12 > a');
            cy.visit(Cypress.env('url').checkRequests);
            const folio=numberWithCommas(this.folio)
            cy.get('#Ribbon').contains('Elementos').should('be.visible').click({force: true});
            cy.get('.ms-number').contains(folio).click();
            cy.wait(5000);
            cy.get('.ms-cui-hidden').contains('Eliminar elemento').should('not.be.visible').click({force:true});
            cy.wait(3000);

        });  
    })
})