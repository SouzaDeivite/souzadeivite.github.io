(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ToDo\ToDo\src\main.ts */"zUnb");


/***/ }),

/***/ "2T32":
/*!********************************************!*\
  !*** ./src/app/livros/livros.component.ts ***!
  \********************************************/
/*! exports provided: LivrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivrosComponent", function() { return LivrosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_livros_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/livros.services */ "KQBq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function LivrosComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LivrosComponent_tr_21_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const livro_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editarLivro(livro_r1.codigoLivro); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LivrosComponent_tr_21_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const livro_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.inativarLivro(livro_r1.codigoLivro); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Inativar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const livro_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](livro_r1.tituloLivro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](livro_r1.autorLivro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](livro_r1.sinopseLivro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", livro_r1.ativoLivro == 1 ? "Sim" : "N\u00E3o", " ");
} }
class LivrosComponent {
    constructor(livroService, router) {
        this.livroService = livroService;
        this.router = router;
        this.livros = [];
        this.livrosQtde = null;
    }
    ngOnInit() {
        this.livroService.getAll().subscribe((livros) => {
            this.livros = livros['data'];
            this.livrosQtde = livros['total'];
        });
    }
    novoLivro() {
        this.router.navigate(["livro", 0]);
    }
    editarLivro(codigoLivro) {
        this.router.navigate(["livro", codigoLivro]);
    }
    inativarLivro(codigoLivro) {
        this.livroService.inativarLivro(codigoLivro).subscribe(() => {
            alert("Livro inativado com sucesso!");
            window.location.reload();
        });
    }
}
LivrosComponent.ɵfac = function LivrosComponent_Factory(t) { return new (t || LivrosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_livros_services__WEBPACK_IMPORTED_MODULE_1__["LivrosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LivrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LivrosComponent, selectors: [["app-livros"]], decls: 29, vars: 2, consts: [[2, "background-color", "darkgrey", "height", "100%"], [1, "section-header", "contain-lg-max1200"], [1, "col-md-12"], [1, "row", 2, "margin-left", "47px"], [1, "text-default"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-50px"], [3, "click"], [2, "margin-top", "-15px"], ["colspan", "2", 2, "width", "10%"], [2, "width", "30%"], [2, "width", "20%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-25px"], [2, "margin-left", "20px", "; margin-top", "-12px"]], template: function LivrosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lista de Livros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LivrosComponent_Template_button_click_7_listener() { return ctx.novoLivro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Novo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sin\u00F3pse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LivrosComponent_tr_21_Template, 15, 4, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sistema desenvolvido para avalia\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.livros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.livrosQtde, " Registro(s)");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 97%;\r\n}\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]  {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background-color: #f1f1f1;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGl2cm9zL2xpdnJvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9saXZyb3MvbGl2cm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDk3JTtcclxufVxyXG50YWJsZSwgdGggLCB0ZCAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxudGFibGUgdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LivrosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-livros',
                templateUrl: './livros.component.html',
                styleUrls: ['./livros.component.css']
            }]
    }], function () { return [{ type: _services_livros_services__WEBPACK_IMPORTED_MODULE_1__["LivrosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "86Pf":
/*!************************************************!*\
  !*** ./src/app/usuarios/usuarios.component.ts ***!
  \************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/usuarios.service */ "ESM5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UsuariosComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosComponent_tr_25_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const usuario_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editarUsuario(usuario_r1.codigoUsuario); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosComponent_tr_25_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const usuario_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.inativarUsuario(usuario_r1.codigoUsuario); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Inativar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.nomeUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.enderecoUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.cpfUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.telefoneUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.emailUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", usuario_r1.ativoUsuario == 1 ? "Sim" : "N\u00E3o", " ");
} }
class UsuariosComponent {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.usuarios = [];
        this.usuariosQtde = null;
    }
    ngOnInit() {
        this.usuarioService.getAll().subscribe((usuarios) => {
            this.usuarios = usuarios['data'];
            this.usuariosQtde = usuarios['total'];
        });
    }
    novoUsuario() {
        this.router.navigate(["usuario", 0]);
    }
    editarUsuario(codigoUsuario) {
        this.router.navigate(["usuario", codigoUsuario]);
    }
    inativarUsuario(codigoUsuario) {
        this.usuarioService.inativarUsuario(codigoUsuario).subscribe(() => {
            alert("Usuário inativado com sucesso!");
            window.location.reload();
        });
    }
}
UsuariosComponent.ɵfac = function UsuariosComponent_Factory(t) { return new (t || UsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsuariosComponent, selectors: [["app-usuarios"]], decls: 33, vars: 2, consts: [[2, "background-color", "darkgrey", "height", "100%"], [1, "section-header", "contain-lg-max1200"], [1, "col-md-12"], [1, "row", 2, "margin-left", "47px"], [1, "text-default"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-50px"], [3, "click"], [2, "margin-top", "-15px"], ["colspan", "2", 2, "width", "10%"], [2, "width", "20%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-25px"], [2, "margin-left", "20px", "; margin-top", "-12px"]], template: function UsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lista de Usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosComponent_Template_button_click_7_listener() { return ctx.novoUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Novo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UsuariosComponent_tr_25_Template, 19, 6, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sistema desenvolvido para avalia\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usuarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.usuariosQtde, " Registro(s)");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 97%;\r\n}\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]  {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background-color: #f1f1f1;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXN1YXJpb3MvdXN1YXJpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdXN1YXJpb3MvdXN1YXJpb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTclO1xyXG59XHJcbnRhYmxlLCB0aCAsIHRkICB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usuarios',
                templateUrl: './usuarios.component.html',
                styleUrls: ['./usuarios.component.css']
            }]
    }], function () { return [{ type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ESM5":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UsuariosService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('https://localhost:44364/api/usuario/RecuperarUsuarios');
    }
    getByCodigo(codigoUsuario) {
        return this.http.get('https://localhost:44364/api/usuario/RecuperarUsuario?codigoUsuario=' + codigoUsuario);
    }
    getUsuariosDisponiveis() {
        return this.http.get('https://localhost:44364/api/usuario/RecuperarUsuariosDisponiveisEmprestimo');
    }
    salvarUsuario(usuario) {
        if (usuario === null || usuario === void 0 ? void 0 : usuario.codigoUsuario) {
            return this.http.put('https://localhost:44364/api/usuario/AlterarUsuario', usuario);
        }
        usuario.codigoUsuario = 0;
        return this.http.post('https://localhost:44364/api/usuario/IncluirUsuario', usuario);
    }
    inativarUsuario(codigoUsuario) {
        return this.http.put('https://localhost:44364/api/usuario/InativacaoUsuario?codigoUsuario=' + codigoUsuario, null);
    }
}
UsuariosService.ɵfac = function UsuariosService_Factory(t) { return new (t || UsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuariosService, factory: UsuariosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "GZ/k":
/*!*******************************************************************!*\
  !*** ./src/app/usuarios/form-usuarios/form-usuarios.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUsuariosComponent", function() { return FormUsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_instituicao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/instituicao.service */ "hWi2");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/usuarios.service */ "ESM5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function FormUsuariosComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instituicao_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", instituicao_r1.codigoInstituicaoEnsino);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", instituicao_r1.nomeInstituicaoEnsino, " ");
} }
class FormUsuariosComponent {
    constructor(instituicaoService, usuarioService, activated, _location) {
        this.instituicaoService = instituicaoService;
        this.usuarioService = usuarioService;
        this.activated = activated;
        this._location = _location;
        this.instituicoes = [];
        this.instituicoesQtde = null;
        this.usuariosQtde = null;
    }
    ngOnInit() {
        this.formUsuario = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            codigoUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            codigoInstituicaoEnsino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            nomeUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            enderecoUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            cpfUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            telefoneUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            emailUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ativoUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1),
        });
        this.activated.params.subscribe(({ id }) => {
            this.codigoUsuario = id;
            if (this.codigoUsuario != 0) {
                document.getElementById("trCodigo").style.display = "";
            }
            else {
                document.getElementById("trCodigo").style.display = "none";
            }
        });
        this.instituicaoService.getAllAtivos().subscribe((instituicoes) => {
            this.instituicoes = instituicoes['data'];
            this.instituicoesQtde = instituicoes['total'];
        });
        this.usuarioService.getByCodigo(this.codigoUsuario).subscribe((usuario) => {
            this.usuario = usuario;
            this.formUsuario.patchValue(this.usuario);
            this.usuariosQtde = usuario['total'];
        });
    }
    salvar() {
        console.log(this.formUsuario.value); // this.formUsuario.value;
        this.usuarioService.salvarUsuario(this.formUsuario.value).subscribe(() => {
            alert("Usuário Salvo com sucesso!");
            this._location.back();
        });
    }
    voltar() {
        this._location.back();
    }
}
FormUsuariosComponent.ɵfac = function FormUsuariosComponent_Factory(t) { return new (t || FormUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_instituicao_service__WEBPACK_IMPORTED_MODULE_2__["InstituicoesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
FormUsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormUsuariosComponent, selectors: [["app-form-usuarios"]], decls: 60, vars: 2, consts: [[2, "background-color", "darkgrey", "height", "100%"], [1, "section-header", "contain-lg-max1200"], [1, "col-md-12"], [1, "row", 2, "margin-left", "87px"], [1, "text-default"], [3, "formGroup"], [2, "margin-top", "-10px"], ["id", "trCodigo"], [2, "text-align", "right", "width", "20%"], ["formControlName", "codigoUsuario", "id", "txtCodigo", "tabindex", "1", "maxlength", "10", "type", "text", "placeholder", "C\u00F3digo", "disabled", "", 1, "form-control", "cadastro", 2, "width", "300px"], ["formControlName", "nomeUsuario", "id", "txtNome", "tabindex", "2", "maxlength", "100", "type", "text", "placeholder", "Nome", 1, "form-control", "cadastro", 2, "width", "300px"], ["formControlName", "enderecoUsuario", "id", "txtEndereco", "tabindex", "3", "maxlength", "100", "type", "text", "placeholder", "Endere\u00E7o", 1, "form-control", "cadastro", 2, "width", "300px"], ["formControlName", "cpfUsuario", "id", "txtCPF", "tabindex", "4", "maxlength", "14", "type", "number", "placeholder", "CPF", 1, "form-control", "cadastro"], ["formControlName", "telefoneUsuario", "id", "txtTelefone", "tabindex", "5", "maxlength", "16", "type", "number", "placeholder", "Telefone", 1, "form-control", "cadastro"], ["formControlName", "emailUsuario", "id", "txtEmail", "tabindex", "6", "maxlength", "100", "type", "email", "placeholder", "E-mail", 1, "form-control", "cadastro", 2, "width", "300px"], ["tabindex", "7", "formControlName", "codigoInstituicaoEnsino", 1, "form-control", "combo", 2, "width", "320px"], [3, "value", 4, "ngFor", "ngForOf"], ["colspan", "2"], ["type", "button", 3, "click"], [3, "value"]], template: function FormUsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alterar Usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "C\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nome:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Endere\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CPF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Telefone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Institui\u00E7\u00E3o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, FormUsuariosComponent_option_44_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormUsuariosComponent_Template_button_click_52_listener() { return ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "SALVAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormUsuariosComponent_Template_button_click_55_listener() { return ctx.voltar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "VOLTAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formUsuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.instituicoes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".box-cadastro[_ngcontent-%COMP%] {\r\n  margin: 30px;\r\n  padding: 30px;\r\n}\r\n.cadastro[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  border: none;\r\n  border-bottom: 2px solid #ddd;\r\n  border-radius: 0;\r\n  outline: none;\r\n  height: 8px;\r\n  right: 40px;\r\n  padding: 10px;\r\n}\r\n.combo[_ngcontent-%COMP%] {\r\n  height: 28px;\r\n}\r\n.btn-cadastro[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  display: block;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n  background-color: #dcbc81;\r\n  font-weight: bold;\r\n  margin-left: -1px;;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXN1YXJpb3MvZm9ybS11c3Vhcmlvcy9mb3JtLXVzdWFyaW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL2Zvcm0tdXN1YXJpb3MvZm9ybS11c3Vhcmlvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1jYWRhc3RybyB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmNhZGFzdHJvIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgcmlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY29tYm8ge1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG4uYnRuLWNhZGFzdHJvIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjYmM4MTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogLTFweDs7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormUsuariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-usuarios',
                templateUrl: './form-usuarios.component.html',
                styleUrls: ['./form-usuarios.component.css']
            }]
    }], function () { return [{ type: _services_instituicao_service__WEBPACK_IMPORTED_MODULE_2__["InstituicoesService"] }, { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "KQBq":
/*!*********************************************!*\
  !*** ./src/app/services/livros.services.ts ***!
  \*********************************************/
/*! exports provided: LivrosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivrosService", function() { return LivrosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LivrosService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('https://localhost:44364/api/livro/RecuperarLivros');
    }
    getByCodigo(codigoLivro) {
        return this.http.get('https://localhost:44364/api/livro/RecuperarLivro?codigoLivro=' + codigoLivro);
    }
    getLivrosDisponiveis() {
        return this.http.get('https://localhost:44364/api/livro/RecuperarLivrosDisponiveisEmprestimo');
    }
    salvarLivro(livro) {
        if (livro === null || livro === void 0 ? void 0 : livro.codigoLivro) {
            return this.http.put('https://localhost:44364/api/livro/AlterarLivro', livro);
        }
        livro.codigoLivro = 0;
        return this.http.post('https://localhost:44364/api/livro/Incluirlivro', livro);
    }
    inativarLivro(codigoLivro) {
        return this.http.put('https://localhost:44364/api/livro/Inativacaolivro?codigoLivro=' + codigoLivro, null);
    }
}
LivrosService.ɵfac = function LivrosService_Factory(t) { return new (t || LivrosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LivrosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LivrosService, factory: LivrosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LivrosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ToDo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [["routerLink", "/usuarios"], ["routerLink", "/livros"], ["routerLink", "/instituicao"], ["routerLink", "/emprestimos"], ["routerLink", "/extrapolar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Livros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Institui\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Emprestimos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UzSd":
/*!****************************************************!*\
  !*** ./src/app/extrapolar/extrapolar.component.ts ***!
  \****************************************************/
/*! exports provided: ExtrapolarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrapolarComponent", function() { return ExtrapolarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_emprestimoService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/emprestimoService */ "w6IU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ExtrapolarComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emprestimo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r1.usuario.nomeUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r1.livro.tituloLivro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, emprestimo_r1.dataEmprestimo, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", emprestimo_r1.devolvidoEmprestimo == 1 ? "Develvido" : "Emprestado", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", emprestimo_r1.reservado == 0 ? "N\u00E3o" : "Sim", " ");
} }
class ExtrapolarComponent {
    constructor(emprestimosService, router) {
        this.emprestimosService = emprestimosService;
        this.router = router;
        this.emprestimos = [];
        this.emprestimosQtde = null;
    }
    ngOnInit() {
        this.emprestimosService.getAllExtrapolar().subscribe((emprestimos) => {
            this.emprestimos = emprestimos['data'];
            this.emprestimosQtde = emprestimos['total'];
        });
    }
}
ExtrapolarComponent.ɵfac = function ExtrapolarComponent_Factory(t) { return new (t || ExtrapolarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emprestimoService__WEBPACK_IMPORTED_MODULE_1__["EmprestimoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ExtrapolarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtrapolarComponent, selectors: [["app-extrapolar"]], decls: 28, vars: 2, consts: [[2, "background-color", "darkgrey", "height", "100%"], [1, "section-header", "contain-lg-max1200"], [1, "col-md-12"], [1, "row", 2, "margin-left", "47px"], [1, "text-default"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-50px"], [2, "margin-top", "-15px"], [2, "width", "35%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-25px"], [2, "margin-left", "20px", "; margin-top", "-12px"]], template: function ExtrapolarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lista de Emprestimos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Livro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Data Emprestimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Reservado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExtrapolarComponent_tr_20_Template, 12, 8, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sistema desenvolvido para avalia\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emprestimos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.emprestimosQtde, " Registro(s)");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 97%;\r\n}\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]  {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background-color: #f1f1f1;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmFwb2xhci9leHRyYXBvbGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhcG9sYXIvZXh0cmFwb2xhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA5NyU7XHJcbn1cclxudGFibGUsIHRoICwgdGQgIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtrapolarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-extrapolar',
                templateUrl: './extrapolar.component.html',
                styleUrls: ['./extrapolar.component.css']
            }]
    }], function () { return [{ type: _services_emprestimoService__WEBPACK_IMPORTED_MODULE_1__["EmprestimoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "XrC8":
/*!*************************************************************!*\
  !*** ./src/app/livros/form-livros/form-livros.component.ts ***!
  \*************************************************************/
/*! exports provided: FormLivrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLivrosComponent", function() { return FormLivrosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_livros_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/livros.services */ "KQBq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







class FormLivrosComponent {
    constructor(livrosService, activated, _location) {
        this.livrosService = livrosService;
        this.activated = activated;
        this._location = _location;
        this.livrosQtde = null;
    }
    ngOnInit() {
        this.formLivro = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            codigoLivro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tituloLivro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            autorLivro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            sinopseLivro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            capaLivro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ativoLivro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1),
        });
        this.activated.params.subscribe(({ id }) => {
            this.codigoLivro = id;
            if (this.codigoLivro != 0) {
                document.getElementById("trCodigo").style.display = "";
            }
            else {
                document.getElementById("trCodigo").style.display = "none";
            }
            this.livrosService.getByCodigo(this.codigoLivro).subscribe((livro) => {
                this.livro = livro;
                this.formLivro.patchValue(this.livro);
                this.livrosQtde = livro['total'];
            });
        });
    }
    salvar() {
        console.log(this.formLivro.value); // this.formUsuario.value;
        this.livrosService.salvarLivro(this.formLivro.value).subscribe(() => {
            alert("Livro Salvo com sucesso!");
            this._location.back();
        });
    }
    voltar() {
        this._location.back();
    }
}
FormLivrosComponent.ɵfac = function FormLivrosComponent_Factory(t) { return new (t || FormLivrosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_livros_services__WEBPACK_IMPORTED_MODULE_2__["LivrosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
FormLivrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormLivrosComponent, selectors: [["app-form-livros"]], decls: 44, vars: 1, consts: [[2, "background-color", "darkgrey", "height", "100%"], [1, "section-header", "contain-lg-max1200"], [1, "col-md-12"], [1, "row", 2, "margin-left", "87px"], [1, "text-default"], [3, "formGroup"], [2, "margin-top", "-10px"], ["id", "trCodigo"], [2, "text-align", "right", "width", "20%"], ["formControlName", "codigoLivro", "id", "txtCodigo", "tabindex", "1", "maxlength", "10", "type", "text", "placeholder", "C\u00F3digo", "disabled", "", 1, "form-control", "cadastro", 2, "width", "300px"], ["formControlName", "tituloLivro", "id", "txtTitulo", "tabindex", "2", "maxlength", "100", "type", "text", "placeholder", "T\u00EDtulo", 1, "form-control", "cadastro", 2, "width", "300px"], ["formControlName", "autorLivro", "id", "txtAutor", "tabindex", "3", "maxlength", "100", "type", "text", "placeholder", "Autor", 1, "form-control", "cadastro", 2, "width", "300px"], ["formControlName", "sinopseLivro", "id", "txtSinopse", "tabindex", "4", "maxlength", "300", "type", "text", "placeholder", "Sin\u00F3pse", 1, "form-control", "cadastro", 2, "width", "300px"], ["colspan", "2"], ["type", "button", 3, "click"]], template: function FormLivrosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alterar Livros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "C\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "T\u00EDtulo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Autor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sin\u00F3pse:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormLivrosComponent_Template_button_click_36_listener() { return ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "SALVAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormLivrosComponent_Template_button_click_39_listener() { return ctx.voltar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "VOLTAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formLivro);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: [".box-cadastro[_ngcontent-%COMP%] {\r\n    margin: 30px;\r\n    padding: 30px;\r\n  }\r\n  .cadastro[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    border: none;\r\n    border-bottom: 2px solid #ddd;\r\n    border-radius: 0;\r\n    outline: none;\r\n    height: 8px;\r\n    right: 40px;\r\n    padding: 10px;\r\n  }\r\n  .combo[_ngcontent-%COMP%] {\r\n    height: 28px;\r\n  }\r\n  .btn-cadastro[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n    background-color: #dcbc81;\r\n    font-weight: bold;\r\n    margin-left: -1px;;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGl2cm9zL2Zvcm0tbGl2cm9zL2Zvcm0tbGl2cm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xpdnJvcy9mb3JtLWxpdnJvcy9mb3JtLWxpdnJvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuYm94LWNhZGFzdHJvIHtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG4gIC5jYWRhc3RybyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuY29tYm8ge1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuICAuYnRuLWNhZGFzdHJvIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2JjODE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4OztcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormLivrosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-livros',
                templateUrl: './form-livros.component.html',
                styleUrls: ['./form-livros.component.css']
            }]
    }], function () { return [{ type: _services_livros_services__WEBPACK_IMPORTED_MODULE_2__["LivrosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _livros_livros_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./livros/livros.component */ "2T32");
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "86Pf");
/* harmony import */ var _extrapolar_extrapolar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extrapolar/extrapolar.component */ "UzSd");
/* harmony import */ var _instituicao_instituicao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instituicao/instituicao.component */ "fvQb");
/* harmony import */ var _emprestimos_emprestimos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./emprestimos/emprestimos.component */ "abFn");
/* harmony import */ var _livros_form_livros_form_livros_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./livros/form-livros/form-livros.component */ "XrC8");
/* harmony import */ var _usuarios_form_usuarios_form_usuarios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./usuarios/form-usuarios/form-usuarios.component */ "GZ/k");
/* harmony import */ var _emprestimos_form_emprestimos_form_emprestimos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emprestimos/form-emprestimos/form-emprestimos.component */ "f8rz");
/* harmony import */ var _instituicao_form_instituicoes_form_instituicoes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./instituicao/form-instituicoes/form-instituicoes.component */ "vWRI");

















const routes = [
    { path: 'usuarios', component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__["UsuariosComponent"] },
    { path: 'usuario/:id', component: _usuarios_form_usuarios_form_usuarios_component__WEBPACK_IMPORTED_MODULE_12__["FormUsuariosComponent"] },
    { path: 'livros', component: _livros_livros_component__WEBPACK_IMPORTED_MODULE_6__["LivrosComponent"] },
    { path: 'livro/:id', component: _livros_form_livros_form_livros_component__WEBPACK_IMPORTED_MODULE_11__["FormLivrosComponent"] },
    { path: 'instituicao', component: _instituicao_instituicao_component__WEBPACK_IMPORTED_MODULE_9__["InstituicaoComponent"] },
    { path: 'instituicao/:id', component: _instituicao_form_instituicoes_form_instituicoes_component__WEBPACK_IMPORTED_MODULE_14__["FormInstituicoesComponent"] },
    { path: 'emprestimos', component: _emprestimos_emprestimos_component__WEBPACK_IMPORTED_MODULE_10__["EmprestimosComponent"] },
    { path: 'emprestimo/:id', component: _emprestimos_form_emprestimos_form_emprestimos_component__WEBPACK_IMPORTED_MODULE_13__["FormEmprestimosComponent"] },
    { path: 'extrapolar', component: _extrapolar_extrapolar_component__WEBPACK_IMPORTED_MODULE_8__["ExtrapolarComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__["UsuariosComponent"],
        _livros_livros_component__WEBPACK_IMPORTED_MODULE_6__["LivrosComponent"],
        _instituicao_instituicao_component__WEBPACK_IMPORTED_MODULE_9__["InstituicaoComponent"],
        _usuarios_form_usuarios_form_usuarios_component__WEBPACK_IMPORTED_MODULE_12__["FormUsuariosComponent"],
        _livros_form_livros_form_livros_component__WEBPACK_IMPORTED_MODULE_11__["FormLivrosComponent"],
        _instituicao_form_instituicoes_form_instituicoes_component__WEBPACK_IMPORTED_MODULE_14__["FormInstituicoesComponent"],
        _emprestimos_emprestimos_component__WEBPACK_IMPORTED_MODULE_10__["EmprestimosComponent"],
        _emprestimos_form_emprestimos_form_emprestimos_component__WEBPACK_IMPORTED_MODULE_13__["FormEmprestimosComponent"],
        _extrapolar_extrapolar_component__WEBPACK_IMPORTED_MODULE_8__["ExtrapolarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                    _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__["UsuariosComponent"],
                    _livros_livros_component__WEBPACK_IMPORTED_MODULE_6__["LivrosComponent"],
                    _instituicao_instituicao_component__WEBPACK_IMPORTED_MODULE_9__["InstituicaoComponent"],
                    _usuarios_form_usuarios_form_usuarios_component__WEBPACK_IMPORTED_MODULE_12__["FormUsuariosComponent"],
                    _livros_form_livros_form_livros_component__WEBPACK_IMPORTED_MODULE_11__["FormLivrosComponent"],
                    _instituicao_form_instituicoes_form_instituicoes_component__WEBPACK_IMPORTED_MODULE_14__["FormInstituicoesComponent"],
                    _emprestimos_emprestimos_component__WEBPACK_IMPORTED_MODULE_10__["EmprestimosComponent"],
                    _emprestimos_form_emprestimos_form_emprestimos_component__WEBPACK_IMPORTED_MODULE_13__["FormEmprestimosComponent"],
                    _extrapolar_extrapolar_component__WEBPACK_IMPORTED_MODULE_8__["ExtrapolarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "abFn":
/*!******************************************************!*\
  !*** ./src/app/emprestimos/emprestimos.component.ts ***!
  \******************************************************/
/*! exports provided: EmprestimosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmprestimosComponent", function() { return EmprestimosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_emprestimoService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/emprestimoService */ "w6IU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EmprestimosComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmprestimosComponent_tr_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const emprestimo_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.devovlerEmprestimo(emprestimo_r1.codigoEmprestimo, emprestimo_r1.reservado); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Devolver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmprestimosComponent_tr_23_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const emprestimo_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.reservarEmprestimo(emprestimo_r1.codigoEmprestimo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reservar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emprestimo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r1.usuario.nomeUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emprestimo_r1.livro.tituloLivro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, emprestimo_r1.dataEmprestimo, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", emprestimo_r1.devolvidoEmprestimo == 1 ? "Develvido" : "Emprestado", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", emprestimo_r1.reservado == 0 ? "N\u00E3o" : "Sim", " ");
} }
class EmprestimosComponent {
    constructor(emprestimosService, router) {
        this.emprestimosService = emprestimosService;
        this.router = router;
        this.emprestimos = [];
        this.emprestimosQtde = null;
    }
    ngOnInit() {
        this.emprestimosService.getAll().subscribe((emprestimos) => {
            this.emprestimos = emprestimos['data'];
            this.emprestimosQtde = emprestimos['total'];
        });
    }
    novoUsuario() {
        this.router.navigate(["emprestimo", 0]);
    }
    devovlerEmprestimo(codigoEmprestimo, temReserva) {
        if (temReserva != 0)
            alert("Este livro foi reservado, verifique após a devolução!");
        this.emprestimosService.DevolverEmprestimo(codigoEmprestimo).subscribe(() => {
            alert("Livro devolvido com sucesso!");
            window.location.reload();
        });
    }
    reservarEmprestimo(codigoEmprestimo) {
        this.emprestimosService.ReservarLivro(codigoEmprestimo).subscribe(() => {
            alert("Livro reservado com sucesso!");
            window.location.reload();
        });
    }
}
EmprestimosComponent.ɵfac = function EmprestimosComponent_Factory(t) { return new (t || EmprestimosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emprestimoService__WEBPACK_IMPORTED_MODULE_1__["EmprestimoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EmprestimosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmprestimosComponent, selectors: [["app-emprestimos"]], decls: 31, vars: 2, consts: [[2, "background-color", "darkgrey", "height", "100%"], [1, "section-header", "contain-lg-max1200"], [1, "col-md-12"], [1, "row", 2, "margin-left", "47px"], [1, "text-default"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-50px"], [3, "click"], [2, "margin-top", "-15px"], ["colspan", "2", 2, "width", "10%"], [2, "width", "35%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-25px"], [2, "margin-left", "20px", "; margin-top", "-12px"]], template: function EmprestimosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lista de Emprestimos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmprestimosComponent_Template_button_click_7_listener() { return ctx.novoUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Novo Emprestimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Livro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Emprestimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reservado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EmprestimosComponent_tr_23_Template, 18, 8, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sistema desenvolvido para avalia\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emprestimos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.emprestimosQtde, " Registro(s)");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 97%;\r\n}\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]  {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background-color: #f1f1f1;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wcmVzdGltb3MvZW1wcmVzdGltb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZW1wcmVzdGltb3MvZW1wcmVzdGltb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTclO1xyXG59XHJcbnRhYmxlLCB0aCAsIHRkICB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmprestimosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emprestimos',
                templateUrl: './emprestimos.component.html',
                styleUrls: ['./emprestimos.component.css']
            }]
    }], function () { return [{ type: _services_emprestimoService__WEBPACK_IMPORTED_MODULE_1__["EmprestimoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "f8rz":
/*!****************************************************************************!*\
  !*** ./src/app/emprestimos/form-emprestimos/form-emprestimos.component.ts ***!
  \****************************************************************************/
/*! exports provided: FormEmprestimosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEmprestimosComponent", function() { return FormEmprestimosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_emprestimoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/emprestimoService */ "w6IU");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/usuarios.service */ "ESM5");
/* harmony import */ var _services_livros_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/livros.services */ "KQBq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function FormEmprestimosComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", usuario_r2.codigoUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", usuario_r2.nomeUsuario, " ");
} }
function FormEmprestimosComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const livro_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", livro_r3.codigoLivro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", livro_r3.tituloLivro, " ");
} }
class FormEmprestimosComponent {
    constructor(emprestimoService, usuarioService, livrosService, activated, _location) {
        this.emprestimoService = emprestimoService;
        this.usuarioService = usuarioService;
        this.livrosService = livrosService;
        this.activated = activated;
        this._location = _location;
        this.emprestimosQtde = null;
        this.usuarios = [];
        this.usuariosQtde = null;
        this.livros = [];
        this.livrosQtde = null;
        this.codUsuario = null;
        this.emprestimosValue = [];
    }
    ngOnInit() {
        this.formEmprestimo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            codigoEmprestimo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            codigoUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            codigoLivro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            dataEmprestimo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            devolvidoEmprestimo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
        });
        this.activated.params.subscribe(({ id }) => {
            this.codigoEmprestimo = id;
            if (this.codigoEmprestimo != 0) {
                document.getElementById("trCodigo").style.display = "";
            }
            else {
                document.getElementById("trCodigo").style.display = "none";
            }
        });
        this.usuarioService.getUsuariosDisponiveis().subscribe((usuarios) => {
            this.usuarios = usuarios['data'];
            this.usuariosQtde = usuarios['total'];
        });
        this.livrosService.getLivrosDisponiveis().subscribe((livros) => {
            this.livros = livros['data'];
            this.livrosQtde = livros['total'];
        });
    }
    salvar() {
        console.log(this.formEmprestimo.value.codigoUsuario);
        this.emprestimoService.salvarEmprestimo(this.formEmprestimo.value).subscribe(() => {
            alert("Emprestimo salvo com sucesso!");
            this._location.back();
        });
    }
    voltar() {
        this._location.back();
    }
}
FormEmprestimosComponent.ɵfac = function FormEmprestimosComponent_Factory(t) { return new (t || FormEmprestimosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emprestimoService__WEBPACK_IMPORTED_MODULE_2__["EmprestimoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_livros_services__WEBPACK_IMPORTED_MODULE_4__["LivrosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
FormEmprestimosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormEmprestimosComponent, selectors: [["app-form-emprestimos"]], decls: 41, vars: 3, consts: [[2, "background-color", "darkgrey", "height", "100%"], [1, "section-header", "contain-lg-max1200"], [1, "col-md-12"], [1, "row", 2, "margin-left", "87px"], [1, "text-default"], [3, "formGroup"], [2, "margin-top", "-10px"], ["id", "trCodigo"], [2, "text-align", "right", "width", "20%"], ["formControlName", "codigoEmprestimo", "id", "txtCodigo", "tabindex", "1", "maxlength", "10", "type", "text", "placeholder", "C\u00F3digo", "disabled", "", 1, "form-control", "cadastro", 2, "width", "300px"], ["tabindex", "2", "formControlName", "codigoUsuario", 1, "form-control", "combo", 2, "width", "320px"], [3, "value", 4, "ngFor", "ngForOf"], ["tabindex", "3", "formControlName", "codigoLivro", 1, "form-control", "combo", 2, "width", "320px"], ["colspan", "2"], ["type", "button", 3, "click"], [3, "value"]], template: function FormEmprestimosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Emprestimo de Livros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "C\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Usu\u00E1rio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FormEmprestimosComponent_option_19_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Livro:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FormEmprestimosComponent_option_25_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEmprestimosComponent_Template_button_click_33_listener() { return ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SALVAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEmprestimosComponent_Template_button_click_36_listener() { return ctx.voltar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "VOLTAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formEmprestimo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usuarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.livros);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".box-cadastro[_ngcontent-%COMP%] {\r\n  margin: 30px;\r\n  padding: 30px;\r\n}\r\n.cadastro[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  border: none;\r\n  border-bottom: 2px solid #ddd;\r\n  border-radius: 0;\r\n  outline: none;\r\n  height: 8px;\r\n  right: 40px;\r\n  padding: 10px;\r\n}\r\n.combo[_ngcontent-%COMP%] {\r\n  height: 28px;\r\n}\r\n.btn-cadastro[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  display: block;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n  background-color: #dcbc81;\r\n  font-weight: bold;\r\n  margin-left: -1px;;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wcmVzdGltb3MvZm9ybS1lbXByZXN0aW1vcy9mb3JtLWVtcHJlc3RpbW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2VtcHJlc3RpbW9zL2Zvcm0tZW1wcmVzdGltb3MvZm9ybS1lbXByZXN0aW1vcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1jYWRhc3RybyB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmNhZGFzdHJvIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgcmlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY29tYm8ge1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG4uYnRuLWNhZGFzdHJvIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjYmM4MTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogLTFweDs7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormEmprestimosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-emprestimos',
                templateUrl: './form-emprestimos.component.html',
                styleUrls: ['./form-emprestimos.component.css']
            }]
    }], function () { return [{ type: _services_emprestimoService__WEBPACK_IMPORTED_MODULE_2__["EmprestimoService"] }, { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"] }, { type: _services_livros_services__WEBPACK_IMPORTED_MODULE_4__["LivrosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }]; }, null); })();


/***/ }),

/***/ "fvQb":
/*!******************************************************!*\
  !*** ./src/app/instituicao/instituicao.component.ts ***!
  \******************************************************/
/*! exports provided: InstituicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituicaoComponent", function() { return InstituicaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_instituicao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/instituicao.service */ "hWi2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function InstituicaoComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstituicaoComponent_tr_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const instituicao_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editarInstituicao(instituicao_r1.codigoInstituicaoEnsino); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstituicaoComponent_tr_23_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const instituicao_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.inativarInstituicao(instituicao_r1.codigoInstituicaoEnsino); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Inativar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instituicao_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instituicao_r1.nomeInstituicaoEnsino);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instituicao_r1.enderecoInstituicaoEnsino);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instituicao_r1.cnpjInstituicaoEnsino);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instituicao_r1.telefoneInstituicaoEnsino);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", instituicao_r1.ativoInstituicaoEnsino == 1 ? "Sim" : "N\u00E3o", " ");
} }
class InstituicaoComponent {
    constructor(instituicaoService, router) {
        this.instituicaoService = instituicaoService;
        this.router = router;
        this.instituicoes = [];
        this.instituicoesQtde = null;
    }
    ngOnInit() {
        this.instituicaoService.getAll().subscribe((instituicoes) => {
            this.instituicoes = instituicoes['data'];
            this.instituicoesQtde = instituicoes['total'];
        });
    }
    novaInstituicao() {
        this.router.navigate(["instituicao", 0]);
    }
    editarInstituicao(codigoInstituicao) {
        this.router.navigate(["instituicao", codigoInstituicao]);
    }
    inativarInstituicao(codigoInstituicao) {
        this.instituicaoService.inativarInstituicao(codigoInstituicao).subscribe(() => {
            alert("Instituição de ensino inativado com sucesso!");
            window.location.reload();
        });
    }
}
InstituicaoComponent.ɵfac = function InstituicaoComponent_Factory(t) { return new (t || InstituicaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_instituicao_service__WEBPACK_IMPORTED_MODULE_1__["InstituicoesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
InstituicaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstituicaoComponent, selectors: [["app-instituicao"]], decls: 31, vars: 2, consts: [[2, "background-color", "darkgrey", "height", "100%"], [1, "section-header", "contain-lg-max1200"], [1, "col-md-12"], [1, "row", 2, "margin-left", "47px"], [1, "text-default"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-50px"], [3, "click"], [2, "margin-top", "-15px"], ["colspan", "2", 2, "width", "10%"], [2, "width", "30%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [2, "position", "absolute", "right", "40px", "padding", "10px", "margin-top", "-25px"], [2, "margin-left", "20px", "; margin-top", "-12px"]], template: function InstituicaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lista de Institui\u00E7\u00F5es de Ensino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstituicaoComponent_Template_button_click_7_listener() { return ctx.novaInstituicao(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Novo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "institui\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InstituicaoComponent_tr_23_Template, 17, 5, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sistema desenvolvido para avalia\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.instituicoes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.instituicoesQtde, " Registro(s)");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 97%;\r\n}\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]  {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background-color: #f1f1f1;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdGl0dWljYW8vaW5zdGl0dWljYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvaW5zdGl0dWljYW8vaW5zdGl0dWljYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTclO1xyXG59XHJcbnRhYmxlLCB0aCAsIHRkICB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstituicaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instituicao',
                templateUrl: './instituicao.component.html',
                styleUrls: ['./instituicao.component.css']
            }]
    }], function () { return [{ type: _services_instituicao_service__WEBPACK_IMPORTED_MODULE_1__["InstituicoesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "hWi2":
/*!*************************************************!*\
  !*** ./src/app/services/instituicao.service.ts ***!
  \*************************************************/
/*! exports provided: InstituicoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituicoesService", function() { return InstituicoesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class InstituicoesService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('https://localhost:44364/api/instituicaoEnsino/RecuperarInstituicoesEnsino');
    }
    getAllAtivos() {
        return this.http.get('https://localhost:44364/api/instituicaoEnsino/RecuperarInstituicoesEnsinoAtivos');
    }
    getByCodigo(codigoInstituicaoEnsino) {
        return this.http.get('https://localhost:44364/api/instituicaoEnsino/RecuperarInstituicaoEnsino?codigoInstituicaoEnsino=' + codigoInstituicaoEnsino);
    }
    salvarInstituicao(instituicao) {
        if (instituicao === null || instituicao === void 0 ? void 0 : instituicao.codigoInstituicaoEnsino) {
            return this.http.put('https://localhost:44364/api/instituicaoEnsino/AlterarInstituicaoEnsino', instituicao);
        }
        instituicao.codigoInstituicaoEnsino = 0;
        return this.http.post('https://localhost:44364/api/instituicaoEnsino/IncluirInstituicaoEnsino', instituicao);
    }
    inativarInstituicao(codigoInstituicaoEnsino) {
        return this.http.put('https://localhost:44364/api/instituicaoEnsino/InativacaoInstituicaoEnsino?codigoInstituicaoEnsino=' + codigoInstituicaoEnsino, null);
    }
}
InstituicoesService.ɵfac = function InstituicoesService_Factory(t) { return new (t || InstituicoesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
InstituicoesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstituicoesService, factory: InstituicoesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstituicoesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vWRI":
/*!******************************************************************************!*\
  !*** ./src/app/instituicao/form-instituicoes/form-instituicoes.component.ts ***!
  \******************************************************************************/
/*! exports provided: FormInstituicoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInstituicoesComponent", function() { return FormInstituicoesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_instituicao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/instituicao.service */ "hWi2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







class FormInstituicoesComponent {
    constructor(instituicoesService, activated, _location) {
        this.instituicoesService = instituicoesService;
        this.activated = activated;
        this._location = _location;
        this.instituicaoQtde = null;
    }
    ngOnInit() {
        this.formInstituicao = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            codigoInstituicaoEnsino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            nomeInstituicaoEnsino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            enderecoInstituicaoEnsino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            cnpjInstituicaoEnsino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            telefoneInstituicaoEnsino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ativoInstituicaoEnsino: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1),
        });
        this.activated.params.subscribe(({ id }) => {
            this.codigoInstituicaoEnsino = id;
            if (this.codigoInstituicaoEnsino != 0) {
                document.getElementById("trCodigo").style.display = "";
            }
            else {
                document.getElementById("trCodigo").style.display = "none";
            }
            this.instituicoesService.getByCodigo(this.codigoInstituicaoEnsino).subscribe((instituicao) => {
                this.instituicao = instituicao;
                this.formInstituicao.patchValue(this.instituicao);
                this.instituicaoQtde = instituicao['total'];
            });
        });
    }
    salvar() {
        console.log(this.formInstituicao.value);
        this.instituicoesService.salvarInstituicao(this.formInstituicao.value).subscribe(() => {
            alert("Instituição de ensino salvo com sucesso!");
            this._location.back();
        });
    }
    voltar() {
        this._location.back();
    }
}
FormInstituicoesComponent.ɵfac = function FormInstituicoesComponent_Factory(t) { return new (t || FormInstituicoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_instituicao_service__WEBPACK_IMPORTED_MODULE_2__["InstituicoesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
FormInstituicoesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormInstituicoesComponent, selectors: [["app-form-instituicoes"]], decls: 49, vars: 1, consts: [[2, "background-color", "darkgrey", "height", "100%"], [1, "section-header", "contain-lg-max1200"], [1, "col-md-12"], [1, "row", 2, "margin-left", "87px"], [1, "text-default"], [3, "formGroup"], [2, "margin-top", "-10px"], ["id", "trCodigo"], [2, "text-align", "right", "width", "20%"], ["formControlName", "codigoInstituicaoEnsino", "id", "txtCodigo", "tabindex", "1", "maxlength", "10", "type", "text", "placeholder", "C\u00F3digo", "disabled", "", 1, "form-control", "cadastro", 2, "width", "300px"], ["formControlName", "nomeInstituicaoEnsino", "id", "txtNomeInstituicao", "tabindex", "2", "maxlength", "100", "type", "text", "placeholder", "Institui\u00E7\u00E3o", 1, "form-control", "cadastro", 2, "width", "300px"], ["formControlName", "enderecoInstituicaoEnsino", "id", "txtEndereco", "tabindex", "3", "maxlength", "100", "type", "text", "placeholder", "Endere\u00E7o", 1, "form-control", "cadastro", 2, "width", "300px"], ["formControlName", "cnpjInstituicaoEnsino", "id", "txtCNPJ", "tabindex", "4", "maxlength", "18", "type", "number", "placeholder", "CNPJ", 1, "form-control", "cadastro"], ["formControlName", "telefoneInstituicaoEnsino", "id", "txtTelefone", "tabindex", "5", "maxlength", "300", "type", "number", "placeholder", "Telefone", 1, "form-control", "cadastro"], ["colspan", "2"], ["type", "button", 3, "click"]], template: function FormInstituicoesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alterar Institui\u00E7\u00E3o de Ensino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "C\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Institui\u00E7\u00E3o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Endere\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CNPJ:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Telefone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormInstituicoesComponent_Template_button_click_41_listener() { return ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "SALVAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormInstituicoesComponent_Template_button_click_44_listener() { return ctx.voltar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "VOLTAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formInstituicao);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".box-cadastro[_ngcontent-%COMP%] {\r\n  margin: 30px;\r\n  padding: 30px;\r\n}\r\n.cadastro[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  border: none;\r\n  border-bottom: 2px solid #ddd;\r\n  border-radius: 0;\r\n  outline: none;\r\n  height: 8px;\r\n  right: 40px;\r\n  padding: 10px;\r\n}\r\n.combo[_ngcontent-%COMP%] {\r\n  height: 28px;\r\n}\r\n.btn-cadastro[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  display: block;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n  background-color: #dcbc81;\r\n  font-weight: bold;\r\n  margin-left: -1px;;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdGl0dWljYW8vZm9ybS1pbnN0aXR1aWNvZXMvZm9ybS1pbnN0aXR1aWNvZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaW5zdGl0dWljYW8vZm9ybS1pbnN0aXR1aWNvZXMvZm9ybS1pbnN0aXR1aWNvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtY2FkYXN0cm8ge1xyXG4gIG1hcmdpbjogMzBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5jYWRhc3RybyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmNvbWJvIHtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuLmJ0bi1jYWRhc3RybyB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2JjODE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormInstituicoesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-instituicoes',
                templateUrl: './form-instituicoes.component.html',
                styleUrls: ['./form-instituicoes.component.css']
            }]
    }], function () { return [{ type: _services_instituicao_service__WEBPACK_IMPORTED_MODULE_2__["InstituicoesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, null); })();


/***/ }),

/***/ "w6IU":
/*!***********************************************!*\
  !*** ./src/app/services/emprestimoService.ts ***!
  \***********************************************/
/*! exports provided: EmprestimoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmprestimoService", function() { return EmprestimoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EmprestimoService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('https://localhost:44364/api/emprestimo/RecuperarEmprestimos');
    }
    getAllExtrapolar() {
        return this.http.get('https://localhost:44364/api/emprestimo/ValidaUsuarioEmprestimoExtrapolado');
    }
    getByCodigo(codigoEmprestimo) {
        return this.http.get('https://localhost:44364/api/emprestimo/RecuperarEmprestimo?codigoEmprestimo=' + codigoEmprestimo);
    }
    salvarEmprestimo(emprestimo) {
        if (emprestimo === null || emprestimo === void 0 ? void 0 : emprestimo.codigoEmprestimo) {
            return this.http.put('https://localhost:44364/api/emprestimo/AlterarEmprestimo', emprestimo);
        }
        emprestimo.codigoEmprestimo = 0;
        return this.http.post('https://localhost:44364/api/emprestimo/IncluirEmprestimo', emprestimo);
    }
    DevolverEmprestimo(codigoEmprestimo) {
        return this.http.put('https://localhost:44364/api/emprestimo/DevolvidoEmprestimo?codigoEmprestimo=' + codigoEmprestimo, null);
    }
    ReservarLivro(codigoEmprestimo) {
        return this.http.put('https://localhost:44364/api/reserva/IncluirLivroReserva?codigoEmprestimo=' + codigoEmprestimo, null);
    }
    validaQtdeMaximo(codigoUsuario) {
        return this.http.get('https://localhost:44364/api/emprestimo/ValidaUsuarioEmpresteMaximo?codigoUsuraio' + codigoUsuario);
    }
}
EmprestimoService.ɵfac = function EmprestimoService_Factory(t) { return new (t || EmprestimoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmprestimoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmprestimoService, factory: EmprestimoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmprestimoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map