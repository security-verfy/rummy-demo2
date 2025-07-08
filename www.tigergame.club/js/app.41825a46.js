(function() {
    var e = {
            65340: function(e, a, o) {
                "use strict";
                o.d(a, {
                    A: function() {
                        return l
                    }
                });
                var t = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("a-empty", {
                            attrs: {
                                image: o(3122)
                            }
                        }, [t("span", {
                            staticClass: "empty-txt",
                            attrs: {
                                slot: "description"
                            },
                            slot: "description"
                        }, [e._v(e._s(e.$t(e.text)))])])
                    },
                    r = [],
                    n = {
                        props: {
                            text: {
                                type: String,
                                default: "emptyTxt2"
                            }
                        },
                        name: "empty",
                        data() {
                            return {}
                        },
                        methods: {}
                    },
                    i = n,
                    s = o(81656),
                    d = (0, s.A)(i, t, r, !1, null, "b856b98e", null),
                    l = d.exports
            },
            37319: function(e, a, o) {
                "use strict";
                o.d(a, {
                    A: function() {
                        return p
                    }
                });
                var t = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("a-drawer", {
                            staticClass: "pay-modal",
                            attrs: {
                                placement: "bottom",
                                closable: !1,
                                visible: e.variable,
                                height: "90%",
                                destroyOnClose: !0
                            },
                            on: {
                                close: e.onCancel
                            }
                        }, [t("div", {
                            staticClass: "modal-wrap"
                        }, [t("div", {
                            staticClass: "header-wrap"
                        }, [t("a-icon", {
                            attrs: {
                                type: "left"
                            },
                            on: {
                                click: e.handleBack
                            }
                        }), t("span", [e._v(e._s(e.$t("drawcash.1")))])], 1)]), t("div", {
                            staticClass: "content-body"
                        }, [t("div", {
                            staticClass: "withdrawMoney"
                        }, [t("span", [e._v(e._s(e.$t("withdrawal.2")) + ":")]), t("span", {
                            staticClass: "amount"
                        }, [e._v(e._s(e.$utils.getGold(e.amount)))])]), t("a-form", {
                            ref: "formRef",
                            attrs: {
                                form: e.form
                            },
                            on: {
                                submit: e.handleSubmit
                            }
                        }, [t("div", {
                            staticClass: "drawInfo"
                        }, [t("div", {
                            staticClass: "title"
                        }, [e._v(e._s(e.$t("drawcash.2")))]), t("div", {
                            staticClass: "drawInfo-input"
                        }, [t("a-form-item", [t("a-input", {
                            directives: [{
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["validateName", e.validatorRules.validateName],
                                expression: "['validateName', validatorRules.validateName]"
                            }],
                            staticClass: "input-style",
                            attrs: {
                                placeholder: e.$t("drawcash.3"),
                                disabled: e.disable
                            }
                        }, [e.disable ? e._e() : t("a-icon", {
                            attrs: {
                                slot: "addonAfter",
                                type: "form"
                            },
                            slot: "addonAfter"
                        })], 1)], 1)], 1)]), t("div", {
                            staticClass: "drawInfo"
                        }, [t("div", {
                            staticClass: "title"
                        }, [e._v(e._s(e.$t("drawcash.4")))]), t("div", {
                            staticClass: "drawInfo-input"
                        }, [t("a-input-group", {
                            staticClass: "input-style"
                        }, [t("a-select", {
                            staticStyle: {
                                width: "100%",
                                background: "#05484E"
                            },
                            attrs: {
                                placeholder: e.chooseType.text,
                                disabled: e.disable,
                                showArrow: !e.disable
                            },
                            on: {
                                change: e.handleChange
                            }
                        }, [t("a-icon", {
                            attrs: {
                                slot: "suffixIcon",
                                type: "right"
                            },
                            slot: "suffixIcon"
                        }), e._l(e.option, (function(a) {
                            return t("a-select-option", {
                                key: a.text,
                                attrs: {
                                    value: a.text
                                }
                            }, [e._v(" " + e._s(a.text))])
                        }))], 2)], 1)], 1)]), t("div", {
                            staticClass: "drawInfo"
                        }, [t("div", {
                            staticClass: "title",
                            domProps: {
                                innerHTML: e._s(e.CPFText)
                            }
                        }), t("div", {
                            staticClass: "drawInfo-input"
                        }, [5 == e.chooseType.payType ? t("a-form-item", [t("a-input", {
                            directives: [{
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["validateEmail", e.validatorRules.validateEmail],
                                expression: "['validateEmail', validatorRules.validateEmail]"
                            }],
                            staticClass: "input-style",
                            attrs: {
                                placeholder: e.$t("drawcash.6")
                            }
                        }, [t("a-icon", {
                            attrs: {
                                slot: "addonAfter",
                                type: "form"
                            },
                            slot: "addonAfter"
                        })], 1)], 1) : 4 == e.chooseType.payType ? t("a-form-item", [t("a-input", {
                            directives: [{
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["validatePhone", e.validatorRules.validatePhone],
                                expression: "['validatePhone', validatorRules.validatePhone]"
                            }],
                            staticClass: "input-style",
                            attrs: {
                                placeholder: e.$t("drawcash.6"),
                                type: "number"
                            }
                        }, [t("a-icon", {
                            attrs: {
                                slot: "addonAfter",
                                type: "form"
                            },
                            slot: "addonAfter"
                        })], 1)], 1) : t("a-form-item", [t("a-input", {
                            directives: [{
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["validateCPF", e.validatorRules.validateCPF],
                                expression: "['validateCPF', validatorRules.validateCPF]"
                            }],
                            staticClass: "input-style",
                            attrs: {
                                placeholder: e.getAccountPlaceholder()
                            }
                        }, [t("a-icon", {
                            attrs: {
                                slot: "addonAfter",
                                type: "form"
                            },
                            slot: "addonAfter"
                        })], 1)], 1), "MXN" == e.currency ? t("div", {
                            staticClass: "tips"
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: o(75017),
                                alt: "Icon"
                            }
                        }), t("span", [e._v(e._s(" " + e.$t("drawcash.9")))])]) : e._e()], 1)]), "BRL" == e.currency ? t("div", {
                            staticClass: "drawInfo"
                        }, [t("div", {
                            staticClass: "title"
                        }, [e._v(e._s(e.$t("drawcash.7")))]), t("div", {
                            staticClass: "drawInfo-input"
                        }, [t("div", {
                            staticStyle: {
                                height: "40px"
                            }
                        }, [t("a-form-item", [t("a-input", {
                            directives: [{
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["validateCPF", e.validatorRules.validateCPF],
                                expression: "['validateCPF', validatorRules.validateCPF]"
                            }],
                            staticClass: "input-style",
                            attrs: {
                                placeholder: e.$t("drawcash.8"),
                                disabled: e.disable
                            }
                        }, [e.disable ? e._e() : t("a-icon", {
                            attrs: {
                                slot: "addonAfter",
                                type: "form"
                            },
                            slot: "addonAfter"
                        })], 1)], 1)], 1)])]) : e._e(), "COP" == e.currency || "INR" == e.currency || "PKR" == e.currency ? t("div", {
                            staticClass: "drawInfo"
                        }, [t("div", {
                            staticClass: "title"
                        }, [e._v(e._s(e.$t("drawcash.13")))]), t("div", {
                            staticClass: "drawInfo-input"
                        }, [t("a-form-item", [t("a-input", {
                            directives: [{
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["validateIFSCode", e.validatorRules.validateIFSCode],
                                expression: "['validateIFSCode', validatorRules.validateIFSCode]"
                            }],
                            staticClass: "input-style phoneAccount",
                            attrs: {
                                placeholder: e.$t("drawcash.14"),
                                type: "COP" == e.currency || "PKR" == e.currency ? "number" : "",
                                disabled: e.disable
                            }
                        }, [e.disable ? e._e() : t("a-icon", {
                            attrs: {
                                slot: "addonAfter",
                                type: "form"
                            },
                            slot: "addonAfter"
                        })], 1)], 1), "INR" == e.currency ? t("div", {
                            staticClass: "tips"
                        }, [t("img", {
                            staticClass: "icon",
                            attrs: {
                                src: o(75017),
                                alt: "Icon"
                            }
                        }), t("span", [e._v(e._s(" " + e.$t("drawcash.17")))])]) : e._e()], 1)]) : e._e(), t("div", {
                            staticClass: "drawInfo"
                        }, [t("div", {
                            staticClass: "title"
                        }, [e._v(e._s(e.$t("drawcash.10")))]), t("div", {
                            staticClass: "drawInfo-input"
                        }, [t("a-form-item", [t("a-input", {
                            directives: [{
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["validatePhone", e.validatorRules.validatePhone],
                                expression: "['validatePhone', validatorRules.validatePhone]"
                            }],
                            staticClass: "input-style phoneAccount",
                            attrs: {
                                placeholder: e.$t("drawcash.11"),
                                type: "number",
                                disabled: e.disable
                            }
                        }, [e.disable ? e._e() : t("a-icon", {
                            attrs: {
                                slot: "addonAfter",
                                type: "form"
                            },
                            slot: "addonAfter"
                        }), t("span", {
                            attrs: {
                                slot: "prefix"
                            },
                            slot: "prefix"
                        }, [e._v(e._s(e.ChannelConfig.areaCode))])], 1)], 1)], 1)]), t("div", {
                            staticClass: "btn-wrap"
                        }, [t("a-form-item", [t("a-button", {
                            staticClass: "btn",
                            attrs: {
                                "html-type": "submit",
                                type: "primary"
                            }
                        }, [e._v(" " + e._s(e.$t("common.3")) + " ")])], 1)], 1)])], 1)])
                    },
                    r = [],
                    n = (o(44114), o(93991)),
                    i = o(47796),
                    s = {
                        name: "drawcash",
                        props: {
                            disable: {
                                type: Boolean,
                                default: !1
                            },
                            variable: {
                                type: Boolean,
                                default: !1
                            },
                            cpfInfo: {
                                type: Object
                            },
                            payType: {
                                type: String
                            },
                            amount: {
                                type: Number,
                                default: 0
                            }
                        },
                        data() {
                            return {
                                drawForm: {
                                    userName: "",
                                    accountNumber: "",
                                    accountNumberCPF: "",
                                    phone: "",
                                    email: "",
                                    payType: 1,
                                    bankName: "",
                                    branchBankName: "",
                                    ifsCode: ""
                                },
                                option: [],
                                chooseType: {},
                                validatorRules: {
                                    validateEmail: {
                                        rules: [{
                                            required: !0,
                                            message: this.$t("drawcash.12")
                                        }, {
                                            validator: this.Email
                                        }],
                                        trigger: "input"
                                    },
                                    validatePhone: {
                                        rules: [{
                                            required: !0,
                                            message: this.$t("drawcash.12")
                                        }, {
                                            validator: this.Phone
                                        }],
                                        trigger: "input"
                                    },
                                    validateCPF: {
                                        rules: [{
                                            required: !0,
                                            message: ""
                                        }, {
                                            validator: this.CPF
                                        }],
                                        trigger: "input"
                                    },
                                    validateName: {
                                        rules: [{
                                            required: !0,
                                            message: this.$t("drawcash.12")
                                        }, {
                                            validator: this.Name
                                        }],
                                        trigger: "input"
                                    },
                                    validateIFSCode: {
                                        rules: [{
                                            required: !0,
                                            message: this.$t("drawcash.12")
                                        }, {
                                            validator: this.ifsCode
                                        }],
                                        trigger: "input"
                                    }
                                },
                                CPFText: this.$t("drawcash.5")
                            }
                        },
                        computed: {
                            drashModelState() {
                                return this.$store.state.drashModelVisible
                            },
                            currency() {
                                return this.$store.state.currency
                            }
                        },
                        beforeCreate() {
                            this.form = this.$form.createForm(this, {
                                name: "register"
                            })
                        },
                        created() {
                            this.getBankList()
                        },
                        mounted() {
                            setTimeout((() => {
                                this.show()
                            }), 10)
                        },
                        methods: {
                            show() {
                                (this.disable || 5 == this.$store.state.userType) && this.cpfInfo && (this.drawForm = this.cpfInfo, this.$nextTick((() => {
                                    this.cpfInfo.user_name && this.form.setFieldsValue({
                                        validateName: this.cpfInfo.user_name
                                    }), this.cpfInfo.userName && this.form.setFieldsValue({
                                        validateName: this.cpfInfo.userName
                                    }), this.cpfInfo.email && this.form.setFieldsValue({
                                        validateEmail: this.cpfInfo.email
                                    }), Number(this.cpfInfo.phone_number) && this.form.setFieldsValue({
                                        validatePhone: Number(this.cpfInfo.phone_number)
                                    }), this.cpfInfo.phone && this.form.setFieldsValue({
                                        validatePhone: this.cpfInfo.phone
                                    }), this.cpfInfo.accountNumber && this.form.setFieldsValue({
                                        validateCPF: this.cpfInfo.accountNumber
                                    }), this.cpfInfo.ifsCode && this.form.setFieldsValue({
                                        validateIFSCode: this.cpfInfo.ifsCode
                                    })
                                })))
                            },
                            handleBack() {
                                this.onCancel()
                            },
                            onCancel() {
                                this.$emit("handleCancel", !1)
                            },
                            handleChange(e) {
                                this.option.map((a => {
                                    e == a.text && (this.chooseType = a, this.drawForm.payType = a.payType, this.$nextTick((() => {
                                        this.drawForm.email && this.form.setFieldsValue({
                                            validateEmail: this.drawForm.email
                                        }), this.drawForm.phone && this.form.setFieldsValue({
                                            validatePhone: this.drawForm.phone
                                        }), this.drawForm.accountNumber && this.form.setFieldsValue({
                                            validateCPF: this.drawForm.accountNumber
                                        })
                                    })))
                                }))
                            },
                            confirmDraw() {
                                this.drawForm.payType = this.chooseType.payType, this.drawForm.bankName = this.chooseType.value, this.drawForm.branchBankName = this.chooseType.text, this.$store.state.drawForm = this.drawForm, localStorage.setItem(n.A.LOCAL_CONST.CPF, JSON.stringify(this.drawForm)), localStorage.setItem(this.$config.LOCAL_CONST.PAY_TYPE_INFO, JSON.stringify(this.chooseType)), this.disable ? this.$emit("handleOk", this.drawForm.accountNumber) : this.$emit("handleOk", "comfirm")
                            },
                            Email(e, a, o) {
                                if (!a || "" == a) return o();
                                this.drawForm.email = a;
                                let t = a.includes("@gmail.com") || a.includes("@yahoo.co.in") || a.includes("@yahoo.com") || a.includes("email.com") || a.includes("@rediffmail.com") || a.includes("@hotmail.com") || a.includes("@ymail.com") || a.includes("@outlook.com") || a.includes("@msn.com") || a.includes("@icloud.com");
                                return t ? o() : o(new Error(this.$t("drawcash.12")))
                            },
                            Phone(e, a, o) {
                                if (isNaN(a) || !a) return o();
                                this.drawForm.phone = a;
                                let t = "" + a;
                                return this.currency == this.$config.CURRENCY_CONFIG.BRL && 11 != t.length || this.currency == this.$config.CURRENCY_CONFIG.IDR && (t.length < 11 || t.length > 12) || this.currency == this.$config.CURRENCY_CONFIG.PHP && (t.length < 10 || t.length > 12) || this.currency == this.$config.CURRENCY_CONFIG.MXN && 10 != t.length || this.currency == this.$config.CURRENCY_CONFIG.NGN && 10 != t.length || this.currency == this.$config.CURRENCY_CONFIG.COP && 10 != t.length || this.currency == this.$config.CURRENCY_CONFIG.PKR && 10 != t.length || this.currency == this.$config.CURRENCY_CONFIG.INR && 10 != t.length || this.currency == this.$config.CURRENCY_CONFIG.BDT && 10 != t.length ? o(new Error(this.$t("drawcash.12"))) : o()
                            },
                            CPF(e, a, o) {
                                if (this.drawForm.accountNumber = a, isNaN(a) || !a) return "MXN" == this.currency ? void(this.CPFText = this.$t("drawcash.5") + "&nbsp;&nbsp;&nbsp;<span style='color:#f5222d'>" + this.$t("drawcash.12") + "</span>") : o(new Error(this.$t("drawcash.12")));
                                let t = "" + a;
                                if ("MXN" == this.currency) {
                                    if ("STP" == this.chooseType.text && 18 != t.length) return void(this.CPFText = this.$t("drawcash.5") + "&nbsp;&nbsp;&nbsp;<span style='color:#f5222d'>" + this.$t("drawcash.12") + "</span>");
                                    if ("STP" != this.chooseType.text && 16 != t.length) return void(this.CPFText = this.$t("drawcash.5") + "&nbsp;&nbsp;&nbsp;<span style='color:#f5222d'>" + this.$t("drawcash.12") + "</span>");
                                    this.CPFText = this.$t("drawcash.5")
                                } else if (this.currency == this.$config.CURRENCY_CONFIG.IDR) {
                                    if (t.length < 8) return o(new Error(this.$t("drawcash.12")))
                                } else if (this.currency == this.$config.CURRENCY_CONFIG.NGN) {
                                    if (10 != t.length) return o(new Error(this.$t("drawcash.12")))
                                } else if (this.currency == this.$config.CURRENCY_CONFIG.COP) {
                                    if (t.length < 10 || t.length > 11) return o(new Error(this.$t("drawcash.12")))
                                } else if (this.currency == this.$config.CURRENCY_CONFIG.INR) {
                                    if (t.length < 1 || t.length > 75) return o(new Error(this.$t("drawcash.12")))
                                } else if (this.currency == this.$config.CURRENCY_CONFIG.PKR) {
                                    if (this.chooseType.payType == this.$config.ORDER_TYPE_CONFIG.WALLET) {
                                        if (11 != t.length) return o(new Error(this.$t("drawcash.12")))
                                    } else if (t.length < 1) return o(new Error(this.$t("drawcash.12")))
                                } else if (this.currency == this.$config.CURRENCY_CONFIG.BDT) {
                                    if (t.length < 11 || t.length > 17) return o(new Error(this.$t("drawcash.12")))
                                } else if (t && 11 != t.length) return o(new Error(this.$t("drawcash.12")));
                                return this.drawForm.payType || (this.drawForm.payType = this.chooseType.payType || 1), o()
                            },
                            Name(e, a, o) {
                                this.drawForm.userName = a, o()
                            },
                            ifsCode(e, a, o) {
                                if (!a) return o();
                                this.drawForm.ifsCode = a;
                                let t = "" + a;
                                return this.currency == this.$config.CURRENCY_CONFIG.COP && (t.length < 6 || t.length > 11) || this.currency == this.$config.CURRENCY_CONFIG.PKR && 13 != t.length ? o(new Error(this.$t("drawcash.12"))) : this.currency != this.$config.CURRENCY_CONFIG.INR || 11 == t.length && this.validateString(t) ? o() : o(new Error(this.$t("drawcash.12")))
                            },
                            validateString(e) {
                                const a = /^[A-Za-z]{4}[0oO]{1}(.{6})$/;
                                return a.test(e)
                            },
                            handleSubmit(e) {
                                e.preventDefault(), this.form.validateFieldsAndScroll(((e, a) => {
                                    e || this.confirmDraw()
                                }))
                            },
                            async getBankList() {
                                this.$store.state.currency == this.$config.CURRENCY_CONFIG.BRL ? this.option = [{
                                    text: "CPF",
                                    value: this.$config.ORDER_TYPE_CONFIG.CPF,
                                    payType: this.$config.ORDER_TYPE_CONFIG.CPF
                                }, {
                                    text: "Email",
                                    value: this.$config.ORDER_TYPE_CONFIG.EMAIL,
                                    payType: this.$config.ORDER_TYPE_CONFIG.EMAIL
                                }, {
                                    text: "Phone",
                                    value: this.$config.ORDER_TYPE_CONFIG.PHONE,
                                    payType: this.$config.ORDER_TYPE_CONFIG.PHONE
                                }] : await (0, i.SY)({}).then((e => {
                                    if (e.success) {
                                        this.option = [];
                                        let a = e.data.list.length;
                                        for (let o = 0; o < a; o++) {
                                            const a = e.data.list[o];
                                            this.option.push({
                                                text: a.bankName,
                                                value: a.id,
                                                payType: a.type
                                            })
                                        }
                                    }
                                }));
                                let e = this.$route.query;
                                if (!e || !e.isDisabled) {
                                    if ((this.disable || 5 == this.$store.state.userType) && this.cpfInfo ? .accountNumber) {
                                        let e = localStorage.getItem(this.$config.LOCAL_CONST.PAY_TYPE_INFO);
                                        if (e) return void(this.chooseType = JSON.parse(e))
                                    }
                                    this.chooseType = this.option[0]
                                }
                            },
                            getAccountPlaceholder() {
                                let e = "drawcash.6";
                                return this.currency == this.$config.CURRENCY_CONFIG.PKR && this.chooseType.payType == this.$config.ORDER_TYPE_CONFIG.WALLET ? 1112 == this.chooseType.value ? e = "drawcash.15" : 1113 == this.chooseType.value && (e = "drawcash.16") : this.currency == this.$config.CURRENCY_CONFIG.BDT && this.chooseType.payType == this.$config.ORDER_TYPE_CONFIG.WALLET && (1115 == this.chooseType.value ? e = "drawcash.15" : 1116 == this.chooseType.value && (e = "drawcash.16")), this.$t(e)
                            }
                        }
                    },
                    d = s,
                    l = o(81656),
                    c = (0, l.A)(d, t, r, !1, null, "767bd8ca", null),
                    p = c.exports
            },
            35358: function(e, a, o) {
                var t = {
                    "./af": 22190,
                    "./af.js": 22190,
                    "./ar": 7218,
                    "./ar-dz": 85785,
                    "./ar-dz.js": 85785,
                    "./ar-kw": 29417,
                    "./ar-kw.js": 29417,
                    "./ar-ly": 56904,
                    "./ar-ly.js": 56904,
                    "./ar-ma": 98617,
                    "./ar-ma.js": 98617,
                    "./ar-ps": 91318,
                    "./ar-ps.js": 91318,
                    "./ar-sa": 82699,
                    "./ar-sa.js": 82699,
                    "./ar-tn": 36789,
                    "./ar-tn.js": 36789,
                    "./ar.js": 7218,
                    "./az": 23050,
                    "./az.js": 23050,
                    "./be": 8316,
                    "./be.js": 8316,
                    "./bg": 70310,
                    "./bg.js": 70310,
                    "./bm": 58884,
                    "./bm.js": 58884,
                    "./bn": 83469,
                    "./bn-bd": 46672,
                    "./bn-bd.js": 46672,
                    "./bn.js": 83469,
                    "./bo": 39118,
                    "./bo.js": 39118,
                    "./br": 13113,
                    "./br.js": 13113,
                    "./bs": 23626,
                    "./bs.js": 23626,
                    "./ca": 40921,
                    "./ca.js": 40921,
                    "./cs": 17799,
                    "./cs.js": 17799,
                    "./cv": 12828,
                    "./cv.js": 12828,
                    "./cy": 93521,
                    "./cy.js": 93521,
                    "./da": 56962,
                    "./da.js": 56962,
                    "./de": 93294,
                    "./de-at": 16158,
                    "./de-at.js": 16158,
                    "./de-ch": 95960,
                    "./de-ch.js": 95960,
                    "./de.js": 93294,
                    "./dv": 47963,
                    "./dv.js": 47963,
                    "./el": 3432,
                    "./el.js": 3432,
                    "./en-au": 20998,
                    "./en-au.js": 20998,
                    "./en-ca": 15931,
                    "./en-ca.js": 15931,
                    "./en-gb": 45930,
                    "./en-gb.js": 45930,
                    "./en-ie": 58081,
                    "./en-ie.js": 58081,
                    "./en-il": 71594,
                    "./en-il.js": 71594,
                    "./en-in": 23904,
                    "./en-in.js": 23904,
                    "./en-nz": 1507,
                    "./en-nz.js": 1507,
                    "./en-sg": 19409,
                    "./en-sg.js": 19409,
                    "./eo": 22177,
                    "./eo.js": 22177,
                    "./es": 84805,
                    "./es-do": 39155,
                    "./es-do.js": 39155,
                    "./es-mx": 69791,
                    "./es-mx.js": 69791,
                    "./es-us": 76098,
                    "./es-us.js": 76098,
                    "./es.js": 84805,
                    "./et": 96240,
                    "./et.js": 96240,
                    "./eu": 20391,
                    "./eu.js": 20391,
                    "./fa": 20612,
                    "./fa.js": 20612,
                    "./fi": 4220,
                    "./fi.js": 4220,
                    "./fil": 65570,
                    "./fil.js": 65570,
                    "./fo": 5466,
                    "./fo.js": 5466,
                    "./fr": 14461,
                    "./fr-ca": 66306,
                    "./fr-ca.js": 66306,
                    "./fr-ch": 27081,
                    "./fr-ch.js": 27081,
                    "./fr.js": 14461,
                    "./fy": 73484,
                    "./fy.js": 73484,
                    "./ga": 76957,
                    "./ga.js": 76957,
                    "./gd": 72978,
                    "./gd.js": 72978,
                    "./gl": 89866,
                    "./gl.js": 89866,
                    "./gom-deva": 65011,
                    "./gom-deva.js": 65011,
                    "./gom-latn": 84724,
                    "./gom-latn.js": 84724,
                    "./gu": 71601,
                    "./gu.js": 71601,
                    "./he": 79802,
                    "./he.js": 79802,
                    "./hi": 9358,
                    "./hi.js": 9358,
                    "./hr": 13907,
                    "./hr.js": 13907,
                    "./hu": 10218,
                    "./hu.js": 10218,
                    "./hy-am": 20533,
                    "./hy-am.js": 20533,
                    "./id": 52844,
                    "./id.js": 52844,
                    "./is": 97353,
                    "./is.js": 97353,
                    "./it": 6364,
                    "./it-ch": 20774,
                    "./it-ch.js": 20774,
                    "./it.js": 6364,
                    "./ja": 6008,
                    "./ja.js": 6008,
                    "./jv": 68221,
                    "./jv.js": 68221,
                    "./ka": 92417,
                    "./ka.js": 92417,
                    "./kk": 42071,
                    "./kk.js": 42071,
                    "./km": 76149,
                    "./km.js": 76149,
                    "./kn": 94572,
                    "./kn.js": 94572,
                    "./ko": 60659,
                    "./ko.js": 60659,
                    "./ku": 66285,
                    "./ku-kmr": 59398,
                    "./ku-kmr.js": 59398,
                    "./ku.js": 66285,
                    "./ky": 81609,
                    "./ky.js": 81609,
                    "./lb": 119,
                    "./lb.js": 119,
                    "./lo": 81748,
                    "./lo.js": 81748,
                    "./lt": 71973,
                    "./lt.js": 71973,
                    "./lv": 81347,
                    "./lv.js": 81347,
                    "./me": 53023,
                    "./me.js": 53023,
                    "./mi": 65747,
                    "./mi.js": 65747,
                    "./mk": 86722,
                    "./mk.js": 86722,
                    "./ml": 63840,
                    "./ml.js": 63840,
                    "./mn": 62058,
                    "./mn.js": 62058,
                    "./mr": 19182,
                    "./mr.js": 19182,
                    "./ms": 45197,
                    "./ms-my": 89136,
                    "./ms-my.js": 89136,
                    "./ms.js": 45197,
                    "./mt": 36408,
                    "./mt.js": 36408,
                    "./my": 51683,
                    "./my.js": 51683,
                    "./nb": 53141,
                    "./nb.js": 53141,
                    "./ne": 29344,
                    "./ne.js": 29344,
                    "./nl": 44703,
                    "./nl-be": 84641,
                    "./nl-be.js": 84641,
                    "./nl.js": 44703,
                    "./nn": 79873,
                    "./nn.js": 79873,
                    "./oc-lnc": 61217,
                    "./oc-lnc.js": 61217,
                    "./pa-in": 24612,
                    "./pa-in.js": 24612,
                    "./pl": 24457,
                    "./pl.js": 24457,
                    "./pt": 1089,
                    "./pt-br": 79146,
                    "./pt-br.js": 79146,
                    "./pt.js": 1089,
                    "./ro": 45950,
                    "./ro.js": 45950,
                    "./ru": 27292,
                    "./ru.js": 27292,
                    "./sd": 56774,
                    "./sd.js": 56774,
                    "./se": 87493,
                    "./se.js": 87493,
                    "./si": 3761,
                    "./si.js": 3761,
                    "./sk": 49711,
                    "./sk.js": 49711,
                    "./sl": 88558,
                    "./sl.js": 88558,
                    "./sq": 8633,
                    "./sq.js": 8633,
                    "./sr": 90688,
                    "./sr-cyrl": 47903,
                    "./sr-cyrl.js": 47903,
                    "./sr.js": 90688,
                    "./ss": 31991,
                    "./ss.js": 31991,
                    "./sv": 27020,
                    "./sv.js": 27020,
                    "./sw": 15891,
                    "./sw.js": 15891,
                    "./ta": 45714,
                    "./ta.js": 45714,
                    "./te": 30206,
                    "./te.js": 30206,
                    "./tet": 24768,
                    "./tet.js": 24768,
                    "./tg": 28276,
                    "./tg.js": 28276,
                    "./th": 57977,
                    "./th.js": 57977,
                    "./tk": 56928,
                    "./tk.js": 56928,
                    "./tl-ph": 8046,
                    "./tl-ph.js": 8046,
                    "./tlh": 41361,
                    "./tlh.js": 41361,
                    "./tr": 64367,
                    "./tr.js": 64367,
                    "./tzl": 10627,
                    "./tzl.js": 10627,
                    "./tzm": 12636,
                    "./tzm-latn": 98148,
                    "./tzm-latn.js": 98148,
                    "./tzm.js": 12636,
                    "./ug-cn": 68823,
                    "./ug-cn.js": 68823,
                    "./uk": 40461,
                    "./uk.js": 40461,
                    "./ur": 41366,
                    "./ur.js": 41366,
                    "./uz": 83454,
                    "./uz-latn": 18374,
                    "./uz-latn.js": 18374,
                    "./uz.js": 83454,
                    "./vi": 78572,
                    "./vi.js": 78572,
                    "./x-pseudo": 80464,
                    "./x-pseudo.js": 80464,
                    "./yo": 93709,
                    "./yo.js": 93709,
                    "./zh-cn": 65873,
                    "./zh-cn.js": 65873,
                    "./zh-hk": 17549,
                    "./zh-hk.js": 17549,
                    "./zh-mo": 52240,
                    "./zh-mo.js": 52240,
                    "./zh-tw": 90405,
                    "./zh-tw.js": 90405
                };

                function r(e) {
                    var a = n(e);
                    return o(a)
                }

                function n(e) {
                    if (!o.o(t, e)) {
                        var a = new Error("Cannot find module '" + e + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    return t[e]
                }
                r.keys = function() {
                    return Object.keys(t)
                }, r.resolve = n, e.exports = r, r.id = 35358
            },
            93991: function(e, a, o) {
                "use strict";
                o.d(a, {
                    A: function() {
                        return r
                    }
                });
                var t = o(91114);
                class r {}(0, t.A)(r, "LOCAL_CONST", {
                    PROP_NEW_USER: "PROP_NEW_USER",
                    USER_INFO: "userInfo",
                    USER_ACCOUNT: "userAccount",
                    MY_LEVEL: "myLevel",
                    DEVICE_ID: "DEVICE_ID",
                    GAME_URL: "GAME_URL",
                    CREATE_DAY: "CREATE_DAY",
                    APP_ID_INFO: "APP_ID_INFO",
                    GAME_CONFIG: "GAME_CONFIG",
                    LOCALE_LANGUAGE: "LOCALE_LANGUAGE",
                    USER_FIRSTWITHDRAW: "USER_FIRSTWITHDRAW",
                    USER_SELETED: "USER_SELETED",
                    USER_WITHDRAWTOTALNUM: "USER_WITHDRAWTOTALNUM",
                    CPF: "CPF",
                    USER_ORDER_OBJECT: "USER_ORDER_OBJECT",
                    CLOSE_GAME: "CLOSE_GAME",
                    POP_FIRST_SUCCESS: "POP_FIRST_SUCCESS",
                    PAY_TYPE_INFO: "PAY_TYPE_INFO",
                    IS_SHOW_LOCK_VIP2: "IS_SHOW_LOCK_VIP2",
                    IS_SHOW_LOCK_VIP1: "IS_SHOW_LOCK_VIP1",
                    TYPE_C_SELECT_TYPE: "TYPE_C_SELECT_TYPE",
                    TYPE_C_NORMAL_TIME: "TYPE_C_NORMAL_TIME",
                    TYPE_C_NORMAL_SECODND: "TYPE_C_NORMAL_SECODND",
                    SAFE_WITH_INFO: "SAFE_WITH_INFO"
                }), (0, t.A)(r, "LANGUAGE_CONFIG", {
                    BR: "BR",
                    US: "US",
                    ID: "ID",
                    MX: "ES",
                    PH: "PH",
                    VN: "VN",
                    TH: "TH",
                    EG: "EG",
                    CO: "CO",
                    IN: "IN",
                    PAK: "PAK",
                    BD: "BD"
                }), (0, t.A)(r, "CURRENCY_CONFIG", {
                    BRL: "BRL",
                    BRL_SIGN: "R$",
                    NGN: "NGN",
                    NGN_SIGN: "₦",
                    IDR: "IDR",
                    IDR_SIGN: "Rp",
                    MXN: "MXN",
                    MXN_SIGN: "$",
                    PHP: "PHP",
                    PHP_SIGN: "₱",
                    VND: "VND",
                    VND_SIGN: "₫",
                    THB: "THB",
                    THB_SIGN: "฿",
                    EGP: "EGP",
                    EGP_SIGN: "£",
                    COP: "COP",
                    COP_SIGN: "$",
                    INR: "INR",
                    INR_SIGN: "₹",
                    PKR: "PKR",
                    PKR_SIGN: "Rs",
                    BDT: "BDT",
                    BDT_SIGN: "৳"
                }), (0, t.A)(r, "BANK_CODE_CONFIG", {
                    DOKUVA: "DOKUVA",
                    QRIS: "QRIS",
                    DANA: "DANA",
                    OVO: "OVO",
                    LinkAja: "LinkAja",
                    SHOPEEPAY: "SHOPEEPAY"
                }), (0, t.A)(r, "ORDER_TYPE_CONFIG", {
                    CPF: 1,
                    BANK: 2,
                    PHONE: 4,
                    EMAIL: 5,
                    WALLET: 6,
                    QRCODE: 7
                }), (0, t.A)(r, "USER_TYPE", {
                    A: 1,
                    B: 2,
                    C: 3,
                    D: 4,
                    E: 5,
                    F: 6
                }), (0, t.A)(r, "WITHDARW_MSG_CODE", {
                    NEED_UP_GRADE_VIP: "needUpgradeVip",
                    NEED_FINISH_TASK: "needFinishTask",
                    WITHDRAW_PROCESSING: "withdrawProcessing",
                    NEED_PLAY_GAME: "needPlayGame",
                    NEED_UP_GRADE_VIP2: "needUpgradeVip2",
                    NEED_UP_GRADE_VIP3: "needUpgradeVip3",
                    ONLY_SUPPORT_TEN: "only_support_ten"
                }), (0, t.A)(r, "GameID", {
                    FortuneTiger: 66121,
                    FortuneRabbit: 66123,
                    FortuneOx: 66122,
                    Patti: 66136
                })
            },
            83006: function(e, a, o) {
                "use strict";
                o.d(a, {
                    O: function() {
                        return c
                    }
                });
                o(44114);
                var t = o(47796),
                    r = o(77988),
                    n = o(55129),
                    i = o(43705),
                    s = o(44625),
                    d = o(93991),
                    l = o(39325);

                function c(e, a = null) {
                    if (e) {
                        if (1 != n.A.state.isShowPopupCharge && "4" != n.A.state.userType) return n.A.state.isShowPopupCharge = !0, void(n.A.state.needChargeAmount = e);
                        n.A.state.isShowPopupCharge = !1, n.A.state.extraAmount = 0;
                        let a = {
                            amount: e
                        };
                        n.A.state.currency == d.A.CURRENCY_CONFIG.IDR ? (a.payType = n.A.state.payType, a.payTypeCode = n.A.state.payTypeCode) : "4" == n.A.state.userType && (a.payType = 15, a.payTypeCode = "USDT"), (0, t.fS)(a).then((e => {
                            if (0 != e.success) {
                                if ("4" == n.A.state.userType) return void l.A.push({
                                    path: "/deposit",
                                    query: { ...e.data
                                    }
                                });
                                r.Ay.EventDoAddToCartKwaiq((0, i.changeAmount)(a.amount));
                                let o = e.data.payUrl;
                                n.A.state.spinning = !0;
                                let t = navigator.userAgent,
                                    s = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                                s ? window.location.href = o : window.open(o);
                                let d = setTimeout((() => {
                                    n.A.state.spinning = !1, clearTimeout(d)
                                }), 1e3)
                            } else(0, s.y8)(e.msg)
                        }))
                    } else "BR" == n.A.state.localeLanguage ? (0, s.y8)("Por favor, insira a conta de saque que precisa ser vinculada") : (0, s.y8)("Please enter the withdrawal account that needs to be linked")
                }
            },
            44962: function(e, a, o) {
                "use strict";
                o.d(a, {
                    rI: function() {
                        return y
                    },
                    xw: function() {
                        return k
                    },
                    tO: function() {
                        return C
                    },
                    oU: function() {
                        return E
                    }
                });
                o(44114), o(14603), o(47566), o(98721);
                var t = o(65261),
                    r = o(47796),
                    n = o(93991),
                    i = o(55129),
                    s = o(89015),
                    d = o(77988),
                    l = o(25800),
                    c = o(44625),
                    p = o(39325),
                    u = o(51608),
                    m = o(99179);

                function h() {
                    return window.adSterraPixel
                }

                function f() {
                    const e = sessionStorage.getItem("realImpression");
                    if (!e) {
                        let e = h();
                        e && g("http://www.pbterra.com/name/" + e.sterraAdvertLogin + "/at?subid_short=" + e.sterraClickId + "&source=" + e.sterraSource), sessionStorage.setItem("realImpression", !0)
                    }
                }

                function g(e) {
                    console.log("imgUrl:", e);
                    let a = document.createElement("img");
                    a.src = e, a.style.display = "none", document.body.appendChild(a)
                }
                var w = {
                    realImpression: f
                };

                function y(e, a = "1", o = "2") {
                    let t = P("tr") || P("zn") || P("zt") || P("mt") || P("channel") || P("cid") || P("sr") || P("can"),
                        n = P("code") || "";
                    t && (t = t.replace(/\//, ""));
                    i.A.state.isApp;
                    const d = new URLSearchParams(window.location.search);
                    let l = i.A.state.channelIdAPK ? i.A.state.channelIdAPK : d.get("channelIdAPK");
                    (0, r.lu)({
                        loginType: a,
                        deviceId: 1 == a ? I() : "",
                        userName: 5 == a ? e.user : "",
                        password: 5 == a ? e.password : "",
                        email: 6 == a ? e.email : "",
                        phone: 2 == a ? e.phone : "",
                        extensionCode: n,
                        registChannel: t,
                        href: window.location.href,
                        apiType: o,
                        fbc: s.Ay.getFbc(),
                        fbp: s.Ay.getFbp(),
                        fbEventUrl: s.Ay.getEventUrl(),
                        fbClientUserAgent: s.Ay.getUserAgent(),
                        channelIdAPK: l
                    }).then((e => {
                        e.success ? v(e) : (0, c.y8)(e.msg)
                    }))
                }

                function v(e) {
                    if (e.success) {
                        const a = e.data;
                        i.A.state.isLogin = 1, i.A.state.nickName = a.nick, i.A.state.gold = a.gold, i.A.state.headUrl = a.headUrl, i.A.state.userId = a.userId, i.A.state.token = a.token, i.A.state.username = a.username, i.A.state.email = a.email, i.A.state.localeLanguage = a.language, i.A.state.currency = a.currency, i.A.state.userType = a.utype, A(), b(), localStorage.setItem("externalId", a.externalId), localStorage.setItem(n.A.LOCAL_CONST.CREATE_DAY, "" + (new Date).getDate());
                        let o = "userId_" + a.userId;
                        a.isRegister && s.Ay.EventRegistr(o), a.reportFbFlag && a.isRegister && d.Ay.EventRegistrKwaiq(), u.Ay.oksRegister(), m.Ay.adPowerRegister(), w.realImpression(), a.isRegister ? (-1 != window.location.href.indexOf("=ks") || -1 != window.location.href.indexOf("=kk") || -1 != window.location.href.indexOf("=kw") ? i.A.state.eighteenPop = !0 : i.A.state.eighteenPop = !1, i.A.state.isShowLuckyBag = !0, i.A.state.currency == n.A.CURRENCY_CONFIG.IDR ? i.A.state.isShowGive = !0 : i.A.state.isDefault = 1) : i.A.state.isShowLuckyBag = !1
                    }
                }

                function A() {
                    let e = {
                        localeLanguage: i.A.state.localeLanguage,
                        currency: i.A.state.currency
                    };
                    localStorage.setItem(n.A.LOCAL_CONST.GAME_CONFIG, JSON.stringify(e))
                }

                function b() {
                    let e = {
                        isLogin: 1,
                        nickName: i.A.state.nickName,
                        headUrl: i.A.state.headUrl,
                        userId: i.A.state.userId,
                        token: i.A.state.token,
                        userType: i.A.state.userType
                    };
                    localStorage.setItem(n.A.LOCAL_CONST.USER_INFO, JSON.stringify(e))
                }

                function C(e, a = null) {
                    navigator.userAgent, navigator.platform;
                    (0, t.df)({
                        gameId: e,
                        sessionId: a
                    }).then((e => {
                        if (0 != e.success) {
                            let a = e.data.jumpUrl;
                            i.A.state.gameUrl = a + "&user_token=" + i.A.state.token, localStorage.setItem(n.A.LOCAL_CONST.GAME_URL, a)
                        }
                    }))
                }

                function k() {
                    (0, t.ix)({}).then((e => {
                        0 != e.success && e.data.inGame && (i.A.state.needJumpGameUrl = e.data.url, i.A.state.tipsVisible = 304)
                    }))
                }

                function I() {
                    let e = localStorage.getItem(n.A.LOCAL_CONST.DEVICE_ID);
                    return e || (e = (0, l.getRandom32)(), localStorage.setItem(n.A.LOCAL_CONST.DEVICE_ID, e), e)
                }

                function P(e) {
                    try {
                        let t = window.location.search;
                        if (!t) {
                            let e = window.location.href;
                            t = e.substr(e.indexOf("?"))
                        }
                        var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                            o = t.substr(1).match(a);
                        if (null != o) {
                            let e = unescape(o[2]);
                            return e.indexOf("#") >= e.length - 3 && (e = e.split("#")[0]), e
                        }
                    } catch (t) {
                        console.error(t)
                    }
                    return null
                }

                function E() {
                    localStorage.removeItem(n.A.LOCAL_CONST.USER_INFO), localStorage.clear(), i.A.state.isLogin = 0, i.A.state.nickName = "", i.A.state.userId = "", i.A.state.token = "", i.A.state.userType = "", i.A.state.gold = 0, (0, c.y8)("Sair com sucesso"), p.A.push("/"), setTimeout((function() {
                        location.reload()
                    }), 100)
                }
            },
            56757: function(e, a, o) {
                "use strict";
                o.d(a, {
                    D: function() {
                        return m
                    }
                });
                o(44114);
                var t = o(55129),
                    r = o(93991),
                    n = o(44625),
                    i = o(47796),
                    s = o(89015),
                    d = o(77988),
                    l = o(66848),
                    c = o(51608),
                    p = o(99179),
                    u = o(43705);

                function m() {
                    let e = localStorage.getItem(r.A.LOCAL_CONST.CLOSE_GAME);
                    (0, i.wx)({}).then((a => {
                        if (a.success) {
                            localStorage.setItem(r.A.LOCAL_CONST.CLOSE_GAME, "");
                            let o = a.data.result;
                            if (t.A.state.gold = o.accountGold, t.A.state.chargeNum = o.charge20TotalNum, t.A.state.gameActivityFlag = o.gameActivityFlag, t.A.state.cryptoRate = o.cryptoRate || 1, t.A.state.chargeTotalAmount = o.chargeTotalAmount, t.A.state.preTaskFlag = o.preTaskFlag, "Exit game" == e) {
                                let e = l.A.prototype.ChannelConfig.amountLimitTip;
                                0 == o.charge20TotalNum && o.accountGold >= e && (t.A.state.tipsVisible = 302)
                            }
                            let n = o.charge20TotalNum > 0 && null != o.processOrderId,
                                i = {
                                    Ordering: n,
                                    orderIding: o.processOrderId || "",
                                    payType: o.payType
                                };
                            localStorage.setItem(r.A.LOCAL_CONST.USER_ORDER_OBJECT, JSON.stringify(i)), h()
                        }
                    }))
                }

                function h() {
                    (0, i.Ce)({}).then((e => {
                        if (console.log("res:", e), e.success) {
                            let a = e.data.fbRechargeRecords,
                                o = [];
                            if (a.length > 0) {
                                for (let e of a) {
                                    let a = e.orderId;
                                    1 == e.isFirstRecharge ? (s.Ay.EventDoCharge(e.amount, e, "InitiateCheckout", a), d.Ay.EventFirstChargeKwaiq((0, u.changeAmount)(e.amount)), c.Ay.oksFirstRecharge((0, u.changeAmount)(e.amount)), p.Ay.adPowerFirstRecharge((0, u.changeAmount)(e.amount))) : s.Ay.EventDoCharge(e.amount, e, "rechargesuccess", a), o.push(a), d.Ay.EventDoChargeKwaiq((0, u.changeAmount)(e.amount)), c.Ay.oksRechargeSuccess((0, u.changeAmount)(e.amount)), p.Ay.adPowerRechargeSuccess((0, u.changeAmount)(e.amount))
                                }
                                o.length > 0 && (0, i.d)({
                                    reportStatus: 1,
                                    errorCode: "",
                                    enableFlag: 1,
                                    orderIds: o
                                }).then((e => {}))
                            }
                        } else(0, n.y8)(e.msg)
                    }))
                }
            },
            5200: function(e, a, o) {
                "use strict";
                var t = {};
                o.r(t), o.d(t, {
                    copy: function() {
                        return ao
                    },
                    default: function() {
                        return to
                    },
                    getIsApp: function() {
                        return oo
                    },
                    getJsUrl: function() {
                        return eo
                    }
                });
                var r = o(66848),
                    n = function() {
                        var e = this,
                            a = e.$createElement,
                            o = e._self._c || a;
                        return o("a-config-provider", {
                            scopedSlots: e._u([{
                                key: "renderEmpty",
                                fn: function() {
                                    return [o("Empty", {
                                        attrs: {
                                            text: "emptyTxt1"
                                        }
                                    })]
                                },
                                proxy: !0
                            }])
                        }, [o("div", {
                            staticClass: "app-content"
                        }, [o("div", {
                            attrs: {
                                id: "app"
                            }
                        }, [e.$store.state.spinning ? o("div", {
                            staticClass: "loading"
                        }, [o("a-spin", {
                            attrs: {
                                size: "large"
                            }
                        })], 1) : e._e(), o("keep-alive", [o("router-view")], 1)], 1), o("PayModal"), o("BottomNav", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.$route.meta.nav,
                                expression: "$route.meta.nav"
                            }]
                        }), e.$store.state.gameUrl ? o("Iframe", {
                            attrs: {
                                href: e.$store.state.gameUrl,
                                newStyle: "display: block !important;"
                            }
                        }) : e._e(), o("popupDefault", {
                            attrs: {
                                visible: 2 == e.$store.state.isDefault
                            },
                            on: {
                                handleDefault: e.handleDefault
                            }
                        }), e.isNewPlayer ? o("popupNewplayer", {
                            attrs: {
                                visible: e.isNewPlayer
                            },
                            on: {
                                handleOK: e.handlePlayer
                            }
                        }) : e._e(), !e.$store.state.eighteenPop && e.$store.state.isShowLuckyBag ? o("popupBag", {
                            attrs: {
                                visible: !e.$store.state.eighteenPop && e.$store.state.isShowLuckyBag
                            },
                            on: {
                                closeLuckyBag: e.closeLuckyBag
                            }
                        }) : e._e(), o("popupGive", {
                            attrs: {
                                visible: e.$store.state.isShowGive
                            },
                            on: {
                                onPopsGive: e.onPopsGive
                            }
                        }), e.$store.state.isShowPopupCharge ? o("popupCharge", {
                            attrs: {
                                visible: e.$store.state.isShowPopupCharge
                            },
                            on: {
                                onCancel: e.onCancelCharge,
                                onConfirm: e.onConfirmCharge
                            }
                        }) : e._e(), o("popupEighteen", {
                            attrs: {
                                visible: e.$store.state.eighteenPop
                            }
                        }), o("CheckDebug"), o("tipsPop", {
                            attrs: {
                                visible: 0 != e.$store.state.tipsVisible,
                                tipsType: e.$store.state.tipsVisible
                            },
                            on: {
                                "update:visible": function(a) {
                                    return e.$set(e.$store.state, "tipsVisible != 0", a)
                                },
                                handleOk: e.handleTips
                            }
                        })], 1)])
                    },
                    i = [],
                    s = (o(44114), function() {
                        var e = this,
                            a = e.$createElement,
                            o = e._self._c || a;
                        return o("div", {
                            staticClass: "nav-bottom-wrap"
                        }, e._l(e.list, (function(a, t) {
                            return o("div", {
                                key: t,
                                staticClass: "nav-item",
                                class: {
                                    active: e.$route.path === a.path
                                },
                                on: {
                                    click: function(o) {
                                        return e.handleClick(a)
                                    }
                                }
                            }, [o("img", {
                                attrs: {
                                    src: e.$route.path === a.path ? a.activeImg : a.img
                                }
                            }), o("span", [e._v(e._s(e.$t(a.title)))])])
                        })), 0)
                    }),
                    d = [],
                    l = o(55129),
                    c = {
                        name: "bottomNav",
                        data() {
                            return {
                                list: [{
                                    title: "home.1",
                                    img: o(64341),
                                    activeImg: o(20973),
                                    path: "/"
                                }, {
                                    title: "bottomNav.1",
                                    img: o(52202),
                                    activeImg: o(12116),
                                    path: "/event"
                                }, {
                                    title: "common.2",
                                    img: o(19541),
                                    activeImg: o(48375),
                                    path: "/security"
                                }, {
                                    title: "home.8",
                                    img: o(32282),
                                    activeImg: o(1688),
                                    path: "/service"
                                }, {
                                    title: "bottomNav.2",
                                    img: o(82785),
                                    activeImg: o(61656),
                                    path: "/mine"
                                }]
                            }
                        },
                        created() {},
                        methods: {
                            handleClick(e) {
                                this.$store.commit("setLoginCallBack", (() => {
                                    e.click ? e.click() : this.$router.push(e.path)
                                })), this.$store.dispatch("handleCheckLogin")
                            },
                            download() {
                                navigator.serviceWorker || this.$toast("Browser does not support")
                            }
                        }
                    },
                    p = c,
                    u = o(81656),
                    m = (0, u.A)(p, s, d, !1, null, "45a5b748", null),
                    h = m.exports,
                    f = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("a-drawer", {
                            staticClass: "pay-modal",
                            attrs: {
                                placement: "bottom",
                                closable: !1,
                                visible: e.$store.state.payModalVisible,
                                height: "auto"
                            },
                            on: {
                                close: e.onCancel
                            }
                        }, [t("div", {
                            staticClass: "modal-wrap"
                        }, [t("div", {
                            staticClass: "header-wrap"
                        }, [t("span", [e._v(e._s(e.$t(e.config[e.type].title)))]), t("img", {
                            staticClass: "close-icon",
                            attrs: {
                                src: o(46581)
                            },
                            on: {
                                click: e.handleBack
                            }
                        })])]), t(e.config[e.type].component, {
                            tag: "component",
                            on: {
                                onCancel: e.onCancel
                            }
                        })], 1)
                    },
                    g = [],
                    w = function() {
                        var e = this,
                            a = e.$createElement,
                            o = e._self._c || a;
                        return o("div", {
                            staticClass: "pay-wrap"
                        }, [o("div", {
                            staticClass: "modal-box"
                        }, [o("div", {
                            staticClass: "title-wrap"
                        }, [o("span", {
                            staticClass: "title"
                        }, [e._v(e._s(e.$t("deposit.1")))])])]), o("div", {
                            staticClass: "list-box"
                        }, [o("div", {
                            staticClass: "list-title"
                        }, [o("span", {
                            staticClass: "title"
                        }, [e._v(e._s(e.$t("deposit.2")))])]), o("div", {
                            staticClass: "list-wrap"
                        }, e._l(e.moneyList, (function(a) {
                            return o("div", {
                                key: a.orderAmount,
                                staticClass: "item"
                            }, [o("div", {
                                staticClass: "item-active",
                                class: {
                                    active: a.orderAmount === e.moneyActive
                                },
                                on: {
                                    click: function(o) {
                                        return e.selectedMoney(a)
                                    }
                                }
                            }, ["BDT" == e.currency ? o("div", [o("span", {
                                staticStyle: {
                                    "font-size": "18rem",
                                    "font-weight": "600"
                                }
                            }, [e._v(e._s(e.$utils.convertCurrency()))]), o("span", [e._v(e._s(e.$utils.changeMoney(a.orderAmount)))])]) : o("span", [e._v(e._s(e.$utils.getGold(a.orderAmount)))]), a.givingRate && 0 != a.givingRate ? o("div", {
                                staticClass: "insideCard"
                            }, [o("span", [e._v(" +" + e._s(100 * a.givingRate) + "% ")])]) : e._e()])])
                        })), 0), o("a-input", {
                            staticClass: "money-input",
                            attrs: {
                                allowClear: "",
                                size: "large",
                                prefix: e.ChannelConfig.currencyGold,
                                disabled: ""
                            },
                            scopedSlots: e._u([e.showMoney ? {
                                key: "addonAfter",
                                fn: function() {
                                    return [o("div", {
                                        staticClass: "btn-extra"
                                    }, [e._v(" " + e._s(e.$t("deposit.4")) + " +" + e._s(e.ChannelConfig.currencyGold) + e._s(e.giveMoney) + " ")])]
                                },
                                proxy: !0
                            } : null], null, !0),
                            model: {
                                value: e.showMoney,
                                callback: function(a) {
                                    e.showMoney = a
                                },
                                expression: "showMoney"
                            }
                        })], 1), o("div", {
                            staticClass: "prompt"
                        }, [e._v(" " + e._s(e.$t("deposit.3")) + " ")]), o("div", {
                            staticClass: "btn-wrap"
                        }, [o("a-button", {
                            staticClass: "btn",
                            attrs: {
                                size: "large",
                                type: "primary"
                            },
                            on: {
                                click: e.handleSubmit
                            }
                        }, [e._v(" " + e._s(e.$t("common.1")) + " ")])], 1)])
                    },
                    y = [],
                    v = o(47796),
                    A = o(83006),
                    b = o(43705),
                    C = {
                        props: {},
                        name: "Pay",
                        data() {
                            return {
                                payActive: 0,
                                showMoney: "",
                                tempGiveMoney: 0,
                                moneyActive: 1e3,
                                moneyList: [],
                                giveMoney: ""
                            }
                        },
                        created() {
                            this.rechargeChannel()
                        },
                        computed: {
                            currency() {
                                return this.$store.state.currency
                            }
                        },
                        methods: {
                            handleSubmit() {
                                this.moneyActive ? (this.$store.state.orderAmount = this.moneyActive, this.$store.state.extraAmount = this.tempGiveMoney, this.$store.state.popupChargeType = 120, (0, A.O)(this.moneyActive, "payPage")) : "BR" == store.state.localeLanguage ? this.$toast("Por favor, insira a conta de saque que precisa ser vinculada") : this.$toast("Please enter the withdrawal account that needs to be linked")
                            },
                            rechargeChannel() {
                                (0, v.hy)({}).then((e => {
                                    if (e.success && e.data.list.length > 0) {
                                        let a = e.data;
                                        a.list.sort(((e, a) => e.orderAmount - a.orderAmount)), this.moneyList = a.list, this.$store.state.currency == this.$config.CURRENCY_CONFIG.NGN && "1" == this.$store.state.userType ? this.moneyList[0].orderAmount = 5e3 : this.$store.state.currency == this.$config.CURRENCY_CONFIG.COP && "3" == this.$store.state.userType && (this.moneyList[0].orderAmount = 2e3), this.classify(this.moneyList[0])
                                    }
                                }))
                            },
                            classify(e) {
                                let a = { ...e
                                };
                                this.moneyActive = a.orderAmount, this.showMoney = this.$utils.changeMoney(this.moneyActive), this.tempGiveMoney = this.$utils.accMul(this.moneyActive, a.givingRate), this.giveMoney = this.$utils.changeMoney(this.tempGiveMoney)
                            },
                            selectedMoney(e) {
                                this.classify(e)
                            }
                        }
                    },
                    k = C,
                    I = (0, u.A)(k, w, y, !1, null, "7ecd3afc", null),
                    P = I.exports,
                    E = function() {
                        var e = this,
                            a = e.$createElement,
                            o = e._self._c || a;
                        return o("div", {
                            staticClass: "history-wrap"
                        }, [o("Table", {
                            attrs: {
                                columns: e.columns,
                                source: e.source,
                                searchParam: e.searchParam
                            }
                        })], 1)
                    },
                    D = [],
                    N = function() {
                        var e = this,
                            a = e.$createElement,
                            o = e._self._c || a;
                        return o("div", {
                            staticClass: "table-wrap"
                        }, [e.formList || e.$slots["header-right"] ? o("div", {
                            staticClass: "table-header"
                        }, [e.formList ? o("div", {
                            staticClass: "header-flex"
                        }, [e._l(e.formList, (function(a, t) {
                            return ["select" === a.type ? o("a-select", {
                                key: t,
                                staticClass: "sel",
                                attrs: {
                                    options: a.options,
                                    placeholder: a.placeholder
                                },
                                on: {
                                    change: e.searchChange
                                },
                                model: {
                                    value: e.param[a.key],
                                    callback: function(o) {
                                        e.$set(e.param, a.key, o)
                                    },
                                    expression: "param[item.key]"
                                }
                            }) : e._e(), "input" === a.type ? o("a-input-search", {
                                key: t,
                                staticClass: "header-search",
                                attrs: {
                                    placeholder: a.placeholder
                                },
                                on: {
                                    search: e.onSearch
                                },
                                model: {
                                    value: e.param[a.key],
                                    callback: function(o) {
                                        e.$set(e.param, a.key, o)
                                    },
                                    expression: "param[item.key]"
                                }
                            }) : e._e(), "date" === a.type ? o("div", {
                                key: t,
                                staticClass: "date-show-box"
                            }, [o("div", {
                                staticClass: "date-item",
                                on: {
                                    click: function(o) {
                                        return e.handleData(0, a)
                                    }
                                }
                            }, [e._v(" " + e._s(e.dateParam[e.range[0]] || e.$moment().format("DD/MM/YYYY")) + " ")]), o("span", [e._v("-")]), o("div", {
                                staticClass: "date-item",
                                on: {
                                    click: function(o) {
                                        return e.handleData(1, a)
                                    }
                                }
                            }, [e._v(" " + e._s(e.dateParam[e.range[1]] || e.$moment().format("DD/MM/YYYY")) + " ")])]) : e._e()]
                        }))], 2) : e._e(), e._t("header-right")], 2) : e._e(), o("van-popup", {
                            attrs: {
                                position: "bottom"
                            },
                            model: {
                                value: e.dateShow,
                                callback: function(a) {
                                    e.dateShow = a
                                },
                                expression: "dateShow"
                            }
                        }, [o("van-datetime-picker", {
                            attrs: {
                                type: "date"
                            },
                            on: {
                                confirm: e.dateConfirm,
                                cancel: function(a) {
                                    e.dateShow = !1
                                }
                            },
                            model: {
                                value: e.dateValue,
                                callback: function(a) {
                                    e.dateValue = a
                                },
                                expression: "dateValue"
                            }
                        })], 1), o("a-table", {
                            attrs: {
                                columns: e.columns,
                                "data-source": e.source,
                                pagination: e.pagination,
                                rowKey: e.rowKey
                            }
                        })], 1)
                    },
                    S = [],
                    T = {
                        props: {
                            columns: {
                                type: Array
                            },
                            source: {
                                type: Array
                            },
                            formList: {
                                type: Array
                            },
                            searchParam: {
                                type: Object
                            },
                            pagination: {
                                type: Boolean,
                                default: !0
                            },
                            rowKey: {
                                type: String,
                                default: "id"
                            }
                        },
                        name: "Table",
                        data() {
                            return {
                                dateShow: !1,
                                param: { ...this.searchParam
                                },
                                activeDate: {},
                                dateParam: {},
                                dateValue: new Date,
                                test: "",
                                range: ["", ""],
                                active: 0
                            }
                        },
                        methods: {
                            handleData(e, a) {
                                this.active = e, this.range[e] = a.range[e], this.dateShow = !0
                            },
                            dateConfirm(e) {
                                this.dateParam[this.range[this.active]] = this.$moment(e).format("DD/MM/YYYY"), this.dateShow = !1
                            },
                            searchChange() {
                                console.log(this.param)
                            },
                            onSearch(e) {
                                console.log(e)
                            }
                        }
                    },
                    R = T,
                    x = (0, u.A)(R, N, S, !1, null, "01b09215", null),
                    F = x.exports,
                    q = {
                        props: {},
                        name: "History",
                        components: {
                            Table: F
                        },
                        data() {
                            return {
                                columns: [],
                                source: [],
                                searchParam: {
                                    value: "Hoje"
                                }
                            }
                        },
                        methods: {}
                    },
                    O = q,
                    B = (0, u.A)(O, E, D, !1, null, "1861f72f", null),
                    V = B.exports,
                    U = {
                        props: {},
                        name: "PayModal",
                        components: {
                            Pay: P,
                            History: V
                        },
                        data() {
                            return {
                                type: "pay",
                                config: {
                                    pay: {
                                        title: "common.1",
                                        component: "Pay"
                                    },
                                    history: {
                                        title: "deposit.log",
                                        component: "History"
                                    }
                                },
                                payActive: 0,
                                moneyActive: "",
                                moneyList: [{
                                    count: "10"
                                }, {
                                    count: "20"
                                }, {
                                    count: "30"
                                }, {
                                    count: "40"
                                }, {
                                    count: "50"
                                }, {
                                    count: "100"
                                }]
                            }
                        },
                        watch: {
                            visible(e) {
                                console.log(e)
                            }
                        },
                        methods: {
                            handleBack() {
                                "pay" === this.type ? this.onCancel() : this.type = "pay"
                            },
                            handleSubmit() {
                                "" !== this.moneyActive ? +this.moneyActive < 10 || +this.moneyActive > 2e4 ? this.$toast("Caro jogador, esse montante suportaCCapenas 10~20000") : this.onCancel() : this.$toast(this.$t("deposit-verify-money"))
                            },
                            onCancel() {
                                this.$store.commit("setPayModalVisible", !1)
                            }
                        }
                    },
                    j = U,
                    Y = (0, u.A)(j, f, g, !1, null, "4a90ec4c", null),
                    L = Y.exports,
                    G = o(37319),
                    W = o(65340),
                    z = o(49148),
                    M = o.n(z),
                    Q = (o(20998), function() {
                        var e = this,
                            a = e.$createElement,
                            o = e._self._c || a;
                        return o("div", {
                            staticClass: "all"
                        }, [o("iframe", {
                            ref: "iframe",
                            staticClass: "full_screen",
                            style: e.newStyle,
                            attrs: {
                                id: "full_screen",
                                src: e.href,
                                frameborder: "0",
                                height: "100%",
                                width: "100%",
                                scrolling: "no",
                                title: e.appName,
                                allow: "fullscreen"
                            }
                        })])
                    }),
                    K = [],
                    H = o(93991),
                    J = {
                        name: "game",
                        props: {
                            href: {
                                type: String,
                                default: ""
                            },
                            newStyle: {
                                type: String,
                                default: "display: block !important;"
                            }
                        },
                        computed: {
                            appName() {
                                return "Welcome to Slots"
                            }
                        },
                        data() {
                            return {
                                load: 0,
                                game: ""
                            }
                        },
                        components: {},
                        created() {
                            let e = this.$router.currentRoute.path,
                                a = this.$router.currentRoute.query;
                            window.addEventListener("message", this.onEventBack), this.$router.push({
                                path: e,
                                query: {
                                    game: "Iframe",
                                    ...a
                                }
                            })
                        },
                        destroyed() {
                            window.removeEventListener("message", this.onEventBack)
                        },
                        mounted() {
                            this.$refs.iframe.addEventListener("load", (() => {
                                this.load++, 2 == this.load && (localStorage.setItem(H.A.LOCAL_CONST.CLOSE_GAME, "Exit game"), l.A.state.gameUrl = "", clearInterval(l.A.state.Time), this.load = 0, this.$store.commit("getRefreshBalance", !0), 1 == this.$store.state.isDefault && (this.$store.state.isDefault = 2))
                            }))
                        },
                        methods: {
                            onEventBack(e) {
                                let a = e.data;
                                if (a) switch (a.msgType) {
                                    case "cc_game_web_shop":
                                        this.goDeposit(a.msgData);
                                        break
                                }
                            },
                            goDeposit(e) {
                                this.$store.commit("setLoginCallBack", (() => {
                                    this.$store.commit("setPayModalVisible", !0)
                                })), this.$store.dispatch("handleCheckLogin")
                            }
                        }
                    },
                    X = J,
                    Z = (0, u.A)(X, Q, K, !1, null, "1579ca5e", null),
                    _ = Z.exports,
                    $ = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("a-modal", {
                            attrs: {
                                visible: e.visible,
                                "confirm-loading": e.confirmLoading,
                                footer: null,
                                maskClosable: !1,
                                centered: "",
                                width: "340rem"
                            },
                            on: {
                                cancel: function(a) {
                                    return e.$emit("handleOk", "confirme")
                                }
                            }
                        }, [t("div", {
                            staticClass: "container"
                        }, [t("img", {
                            staticClass: "title",
                            attrs: {
                                src: o(6730)("./" + e.$t("popupDial.4"))
                            }
                        }), t("img", {
                            staticClass: "money",
                            attrs: {
                                src: o(6730)("./" + e.$t("popupDial.3"))
                            }
                        }), t("div", {
                            staticClass: "Wallet",
                            staticStyle: {
                                width: "100%"
                            }
                        }, [t("img", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: 1 === e.lantern,
                                expression: "lantern === 1"
                            }],
                            staticClass: "money1",
                            attrs: {
                                src: o(33722)
                            }
                        }), t("img", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: 2 === e.lantern,
                                expression: "lantern === 2"
                            }],
                            staticClass: "money1",
                            attrs: {
                                src: o(54833)
                            }
                        }), t("div", {
                            staticClass: "round"
                        }, [t("img", {
                            staticClass: "roundImg",
                            attrs: {
                                src: o(94670)
                            }
                        })]), t("div", {
                            staticClass: "injectionParent"
                        }, [t("img", {
                            staticClass: "injection",
                            attrs: {
                                src: o(54609)
                            }
                        })]), t("LuckyWheel", {
                            ref: "myLucky",
                            staticStyle: {
                                position: "absolute",
                                left: "50%",
                                top: "38.5%",
                                transform: "translate(-50%, -50%)"
                            },
                            attrs: {
                                width: "348rem",
                                height: "348rem",
                                prizes: e.prizes,
                                blocks: e.blocks,
                                buttons: e.buttons
                            },
                            on: {
                                start: e.startCallback,
                                end: e.endCallback
                            }
                        }), e.isShowShou ? t("img", {
                            staticStyle: {
                                width: "72rem",
                                height: "71.5rem",
                                position: "absolute",
                                left: "57%",
                                top: "44%",
                                transform: "translate(-50%, -50%)"
                            },
                            attrs: {
                                src: o(54853)
                            },
                            on: {
                                click: e.startCallback
                            }
                        }) : e._e()], 1)])])
                    },
                    ee = [],
                    ae = {
                        props: {
                            visible: {
                                type: Boolean
                            }
                        },
                        name: "WithdrawPopups",
                        data() {
                            return {
                                lantern: 0,
                                confirmLoading: !1,
                                ConstConfig: H.A,
                                isShowShou: !0,
                                blocks: [{
                                    padding: "13rem",
                                    imgs: [{
                                        src: o(6730)("./" + this.$t("popupDial.1")),
                                        width: "100%",
                                        rotate: !0
                                    }]
                                }],
                                prizes: [{
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }, {
                                    fonts: [{
                                        text: ""
                                    }]
                                }],
                                buttons: [{
                                    radius: "32.8%",
                                    pointer: !0,
                                    fonts: [{
                                        text: "",
                                        num: "0",
                                        fontColor: "#7CFF69",
                                        fontStyle: "Orelega One-Regular",
                                        fontWeight: "600",
                                        fontSize: "14rem"
                                    }],
                                    imgs: [{
                                        src: o(6730)("./" + this.$t("popupDial.2")),
                                        width: "140rem",
                                        height: "140rem",
                                        top: "-70rem"
                                    }]
                                }]
                            }
                        },
                        created() {},
                        methods: {
                            handleNext() {
                                this.$emit("handleOk", "onChargeCPF")
                            },
                            startCallback() {
                                this.$refs.myLucky.play(), this.isShowShou = !1, setTimeout((() => {
                                    this.$refs.myLucky.stop(1.78)
                                }), 3e3)
                            },
                            endCallback(e) {
                                console.log(e), this.lantern = 1;
                                let a = setInterval(this.toggleImages, 100);
                                setTimeout((() => {
                                    clearInterval(a), this.$emit("set-Dialshow", !1)
                                }), 1800)
                            },
                            toggleImages() {
                                this.lantern = 1 === this.lantern ? 2 : 1
                            }
                        }
                    },
                    oe = ae,
                    te = (0, u.A)(oe, $, ee, !1, null, "44dbbb2e", null),
                    re = te.exports,
                    ne = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("a-modal", {
                            attrs: {
                                title: e.$t("pops.1"),
                                visible: e.visible,
                                "confirm-loading": e.confirmLoading,
                                footer: null,
                                maskClosable: !1,
                                centered: "",
                                width: "340rem"
                            },
                            on: {
                                cancel: function(a) {
                                    return e.$emit("handleDefault", "confirme")
                                }
                            }
                        }, [t("img", {
                            staticClass: "treasure",
                            attrs: {
                                src: o(64040)
                            }
                        }), t("div", {
                            staticClass: "modal-wrap"
                        }, [t("div", {
                            staticClass: "descriptive",
                            class: {
                                descriptiveVnd: "VND" == e.$store.state.currency
                            }
                        }, [t("span", {
                            domProps: {
                                innerHTML: e._s(e.$t("pops.2", {
                                    amount1: e.$utils.getGold(e.ChannelConfig.activityPayAmount),
                                    amount2: e.$utils.getGold(3 * e.ChannelConfig.activityPayAmount)
                                }))
                            }
                        })]), t("div", {
                            staticClass: "btn"
                        }, [t("div", {
                            staticClass: "sure",
                            class: {
                                cancleVnd: "VND" == e.$store.state.currency
                            },
                            on: {
                                click: function(a) {
                                    return a.stopPropagation(), e.toCharge.apply(null, arguments)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("common.12")) + " ")])])]), t("img", {
                            staticClass: "close",
                            attrs: {
                                src: o(46581)
                            },
                            on: {
                                click: function(a) {
                                    return e.$emit("handleDefault", "close")
                                }
                            }
                        })])
                    },
                    ie = [],
                    se = {
                        props: {
                            visible: {
                                type: Boolean
                            }
                        },
                        name: "WithdrawPopups",
                        data() {
                            return {
                                lantern: 0,
                                confirmLoading: !1,
                                ConstConfig: H.A,
                                promotionsImg: null
                            }
                        },
                        created() {},
                        methods: {
                            toWallet() {
                                this.$emit("handleDefault", "playGame")
                            },
                            toCharge() {
                                this.$store.state.extraAmount = 3 * this.ChannelConfig.activityPayAmount - this.ChannelConfig.activityPayAmount, this.$emit("handleDefault", "charge")
                            },
                            getAmountIndex: b.getAmountIndex
                        }
                    },
                    de = se,
                    le = (0, u.A)(de, ne, ie, !1, null, "35cf1b4b", null),
                    ce = le.exports,
                    pe = function() {
                        var e = this,
                            a = e.$createElement,
                            o = e._self._c || a;
                        return o("a-modal", {
                            attrs: {
                                title: "",
                                visible: e.visible,
                                "confirm-loading": e.confirmLoading,
                                footer: null,
                                maskClosable: !1,
                                centered: "",
                                width: "340rem"
                            },
                            on: {
                                cancel: function(a) {
                                    return e.$emit("onPopsGive")
                                }
                            }
                        }, [o("div", {
                            staticClass: "close",
                            on: {
                                click: function(a) {
                                    return e.$emit("onPopsGive")
                                }
                            }
                        })])
                    },
                    ue = [],
                    me = {
                        props: {
                            visible: {
                                type: Boolean
                            }
                        },
                        name: "WithdrawPopups",
                        data() {
                            return {
                                lantern: 0,
                                confirmLoading: !1,
                                ConstConfig: H.A,
                                promotionsImg: null
                            }
                        },
                        created() {},
                        methods: {
                            toWallet() {
                                this.$emit("handleDefault", "playGame")
                            },
                            toCharge() {
                                this.$store.state.extraAmount = 3 * this.ChannelConfig.activityPayAmount - this.ChannelConfig.activityPayAmount, this.$emit("handleDefault", "charge")
                            },
                            getAmountIndex: b.getAmountIndex
                        }
                    },
                    he = me,
                    fe = (0, u.A)(he, pe, ue, !1, null, "2a78668d", null),
                    ge = fe.exports,
                    we = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("a-modal", {
                            attrs: {
                                visible: e.visible,
                                "confirm-loading": e.confirmLoading,
                                footer: null,
                                maskClosable: !1,
                                width: "340rem",
                                centered: ""
                            },
                            on: {
                                cancel: function(a) {
                                    return e.$emit("handleOK", "close")
                                }
                            },
                            scopedSlots: e._u([{
                                key: "title",
                                fn: function() {
                                    return [t("div", {
                                        style: {
                                            fontSize: e.titleFontSize + "rem"
                                        }
                                    }, [e._v(" " + e._s(e.$t("task.5")) + " ")])]
                                },
                                proxy: !0
                            }])
                        }, [t("img", {
                            staticClass: "treasure",
                            attrs: {
                                src: o(69489)
                            }
                        }), t("div", {
                            staticClass: "mask"
                        }, [t("div", {
                            staticClass: "box_bg",
                            attrs: {
                                id: "box_bg"
                            }
                        }, [t("div", {
                            staticClass: "content"
                        }, [t("div", {
                            staticClass: "acctile"
                        }, [t("span", {
                            domProps: {
                                innerHTML: e._s(e.$t("task.6", {
                                    amount: e.$utils.getGold(e.ChannelConfig.newTaskReward)
                                }))
                            }
                        })]), t("div", {
                            staticClass: "task_list"
                        }, e._l(e.taskLsit, (function(a) {
                            return t("div", {
                                staticClass: "task display align-items justify-content"
                            }, [t("img", {
                                staticClass: "task_pic",
                                attrs: {
                                    src: a.iconUrl
                                }
                            }), t("div", {
                                staticClass: "comtent",
                                class: [{
                                    tasked: "100" == a.game_needed
                                }]
                            }, [t("div", {
                                staticClass: "com_pro display align-items justify-content"
                            }, [t("div", {
                                staticClass: "gameName"
                            }, [e._v(e._s(a.gameName))]), a.currentProcess == a.maxProcess ? t("div", {
                                staticClass: "go_task grey"
                            }, [e._v(" " + e._s(e.$t("task.8")) + " ")]) : t("div", {
                                staticClass: "go_task",
                                on: {
                                    click: function(o) {
                                        return e.playGame(a)
                                    }
                                }
                            }, [e._v(" " + e._s(e.$t("task.7")) + " ")])]), t("div", {
                                staticClass: "produce"
                            }, [t("div", {
                                staticClass: "ing",
                                class: {
                                    com: a.currentProcess == a.maxProcess
                                },
                                style: {
                                    width: a.currentProcess / a.maxProcess * 100 + "%"
                                }
                            }, [t("div", {
                                staticClass: "process"
                            }, [e._v(" " + e._s(a.currentProcess) + "/" + e._s(a.maxProcess) + " ")])])])])])
                        })), 0)]), t("div", {
                            staticClass: "btn display space-center"
                        }, [0 == e.gotFlag ? t("div", {
                            staticClass: "sure",
                            staticStyle: {
                                padding: "0px 16px",
                                height: "38px",
                                "line-height": "38px",
                                background: "#808080"
                            }
                        }, [t("div", {
                            staticClass: "reward_button1"
                        }, [e._v(" " + e._s(e.$t("task.9", {
                            amount: e.$utils.getGold(e.ChannelConfig.newTaskReward)
                        })) + " ")])]) : 1 == e.gotFlag ? t("div", {
                            staticClass: "sure",
                            staticStyle: {
                                padding: "0px 16px",
                                height: "38px",
                                "line-height": "38px"
                            },
                            on: {
                                click: e.onReward
                            }
                        }, [t("div", {
                            staticClass: "reward_button"
                        }, [e._v(" " + e._s(e.$t("task.9", {
                            amount: e.$utils.getGold(e.ChannelConfig.newTaskReward)
                        })) + " ")])]) : 2 == e.gotFlag ? t("div", {
                            staticClass: "sure",
                            staticStyle: {
                                padding: "0px 16px",
                                height: "38px",
                                "line-height": "38px",
                                background: "#808080"
                            }
                        }, [t("div", {
                            staticClass: "reward_button1"
                        }, [e._v(e._s(e.$t("task.3")))])]) : e._e()]), t("img", {
                            staticClass: "close",
                            attrs: {
                                src: o(46581)
                            },
                            on: {
                                click: function(a) {
                                    return e.$emit("handleOK", "close")
                                }
                            }
                        })])])])
                    },
                    ye = [],
                    ve = o(44962),
                    Ae = {
                        props: {
                            visible: {
                                type: Boolean
                            }
                        },
                        name: "WithdrawPopups",
                        data() {
                            return {
                                titleFontSize: 24,
                                ConstConfig: H.A,
                                confirmLoading: !1,
                                taskLsit: [],
                                gotFlag: 0,
                                gameAllList: [{
                                    name: "Fortune Tiger",
                                    img: o(62413),
                                    id: "66121",
                                    type: "PG",
                                    best: !0
                                }, {
                                    name: "Fortune Ox",
                                    img: o(65775),
                                    type: "PG",
                                    id: "66122"
                                }, {
                                    name: "Fortune Rabbit",
                                    img: o(76822),
                                    type: "PG",
                                    id: "66123"
                                }]
                            }
                        },
                        created() {
                            this.getTaskProcess(), "VND" == l.A.state.currency && (this.titleFontSize = 18)
                        },
                        methods: {
                            getAmountIndex: b.getAmountIndex,
                            getTaskProcess() {
                                (0, v.R1)({}).then((e => {
                                    e.success ? e.data.result.taskItems && (this.taskLsit = e.data.result.taskItems.map((e => (this.gameAllList.map((a => {
                                        e.gameId == a.id && (e.iconUrl = a.img)
                                    })), { ...e,
                                        id: e.gameId
                                    }))), this.gotFlagAcc = e.data.result.gotFlag) : this.$toast(e.msg)
                                }))
                            },
                            onReward() {
                                (0, v.wd)({}).then((e => {
                                    if (this.showLoading = !1, 0 == e.success) return this.$toast(e.msg);
                                    this.gotFlag = 2
                                }))
                            },
                            playGame(e) {
                                this.$emit("handleOK", "close"), (0, ve.tO)(e.id)
                            }
                        }
                    },
                    be = Ae,
                    Ce = (0, u.A)(be, we, ye, !1, null, "2ba224c6", null),
                    ke = Ce.exports,
                    Ie = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("a-modal", {
                            attrs: {
                                visible: e.visible,
                                "confirm-loading": e.confirmLoading,
                                footer: null,
                                title: e.$t("eighteen.1"),
                                maskClosable: !1,
                                centered: "",
                                width: "340rem"
                            },
                            on: {
                                cancel: function(a) {
                                    return e.$emit("handleOk", "confirme")
                                }
                            }
                        }, [t("div", {
                            staticClass: "eight-body"
                        }, [t("div", {
                            staticClass: "edit-name"
                        }, [t("span", [e._v(e._s(e.$t("eighteen.2")))]), t("div", {
                            staticClass: "name-input"
                        }, [t("img", {
                            staticClass: "edit-img",
                            attrs: {
                                src: o(16008)
                            }
                        }), t("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.input.value,
                                expression: "input.value"
                            }],
                            staticClass: "input-class",
                            attrs: {
                                placeholder: e.$t("eighteen.3")
                            },
                            domProps: {
                                value: e.input.value
                            },
                            on: {
                                input: [function(a) {
                                    a.target.composing || e.$set(e.input, "value", a.target.value)
                                }, e.validateInput]
                            }
                        })]), 2 == e.nameVal ? t("span", {
                            staticClass: "error-format"
                        }, [e._v(e._s(e.$t("eighteen.8")))]) : e._e()]), t("div", {
                            staticClass: "edit-date"
                        }, [t("span", [e._v(e._s(e.$t("eighteen.4")))]), t("div", {
                            staticClass: "date-div",
                            on: {
                                click: function(a) {
                                    e.showDate = !0
                                }
                            }
                        }, [t("img", {
                            staticClass: "edit-img",
                            attrs: {
                                src: o(52867)
                            }
                        }), t("span", {
                            staticClass: "date-text",
                            class: {
                                normal: "DD-MM-YYYY" === e.dateStr
                            }
                        }, [e._v(e._s(e.dateStr))])]), 2 == e.selectDate ? t("span", {
                            staticClass: "error-format"
                        }, [e._v(e._s(e.$t("eighteen.6")))]) : 4 == e.selectDate ? t("span", {
                            staticClass: "error-format"
                        }, [e._v(e._s(e.$t("eighteen.7")))]) : e._e()]), t("div", {
                            staticClass: "edit-select",
                            on: {
                                click: e.onClickRadio
                            }
                        }, [e.needSelect ? t("div", [t("img", {
                            staticClass: "edit-img",
                            attrs: {
                                src: o(16034)
                            }
                        })]) : t("div", [e.selectRadio ? t("img", {
                            staticClass: "edit-img",
                            attrs: {
                                src: o(79691)
                            }
                        }) : t("img", {
                            staticClass: "edit-img",
                            attrs: {
                                src: o(14288)
                            }
                        })]), t("div", {
                            staticClass: "edit-msg"
                        }, [t("span", [e._v(e._s(e.$t("eighteen.5")))])])]), t("div", {
                            staticClass: "edit-btn",
                            on: {
                                click: e.onClickConfirm
                            }
                        }, [t("span", [e._v(e._s(e.$t("common.3")))])])]), t("SelectDate", {
                            attrs: {
                                visible: e.showDate,
                                currentDate: e.currentDate
                            },
                            on: {
                                onHandleClick: e.onHandleClick
                            }
                        })], 1)
                    },
                    Pe = [],
                    Ee = function() {
                        var e = this,
                            a = e.$createElement,
                            o = e._self._c || a;
                        return e.visible ? o("div", {
                            staticClass: "date-body"
                        }, [o("div", {
                            staticClass: "date-mask"
                        }), o("div", {
                            staticClass: "date-content"
                        }, [o("van-datetime-picker", {
                            attrs: {
                                type: "date",
                                "min-date": e.minDate,
                                "max-date": e.maxDate,
                                "confirm-button-text": e.$t("common.3"),
                                "cancel-button-text": e.$t("common.10")
                            },
                            on: {
                                confirm: e.onHandleConfirm,
                                cancel: e.onHandleCancel
                            },
                            model: {
                                value: e.showDate,
                                callback: function(a) {
                                    e.showDate = a
                                },
                                expression: "showDate"
                            }
                        })], 1)]) : e._e()
                    },
                    De = [],
                    Ne = {
                        props: {
                            visible: {
                                type: Boolean,
                                default: !1
                            },
                            currentDate: {
                                type: Date
                            }
                        },
                        name: "SelectDate",
                        data() {
                            return {
                                minDate: new Date,
                                maxDate: new Date,
                                showDate: new Date
                            }
                        },
                        created() {
                            this.showDate = this.currentDate;
                            let e = new Date;
                            this.minDate = new Date(e.getFullYear() - 50, 0, 1), this.maxDate = new Date(e.getFullYear(), e.getMonth(), e.getDate())
                        },
                        methods: {
                            onHandleConfirm() {
                                this.$emit("onHandleClick", {
                                    state: 1,
                                    selectDate: this.showDate
                                })
                            },
                            onHandleCancel() {
                                this.$emit("onHandleClick", {
                                    state: 2
                                })
                            }
                        }
                    },
                    Se = Ne,
                    Te = (0, u.A)(Se, Ee, De, !1, null, "21d98c48", null),
                    Re = Te.exports,
                    xe = {
                        props: {
                            visible: {
                                type: Boolean,
                                default: !0
                            }
                        },
                        components: {
                            SelectDate: Re
                        },
                        name: "WithdrawPopups",
                        data() {
                            return {
                                currentDate: new Date,
                                confirmLoading: !1,
                                selectRadio: !0,
                                selectDate: 1,
                                input: {
                                    value: ""
                                },
                                nameVal: 1,
                                showDate: !1,
                                dateStr: "DD-MM-YYYY",
                                needSelect: !1
                            }
                        },
                        created() {},
                        methods: {
                            onHandleConfirm() {
                                console.log(this.currentDate)
                            },
                            validateInput() {
                                let e = this.input.value;
                                e.length < 3 || e.length > 15 ? this.nameVal = 2 : this.nameVal = 3
                            },
                            validateDate() {
                                let e = new Date,
                                    a = this.currentDate,
                                    o = a.getFullYear(),
                                    t = a.getMonth(),
                                    r = a.getDate(),
                                    n = e.getFullYear(),
                                    i = e.getMonth(),
                                    s = e.getDate(),
                                    d = n - o;
                                (i < t || i === t && s < r) && d--, this.selectDate = d >= 18 ? 3 : 2, this.dateStr = r + "-" + (t + 1) + "-" + o
                            },
                            onHandleClick(e) {
                                1 == e.state && (this.currentDate = e.selectDate, this.validateDate()), this.showDate = !1
                            },
                            onClickConfirm() {
                                let e = !0;
                                3 != this.nameVal && (this.nameVal = 2, e = !1), 3 != this.selectDate && ("DD-MM-YYYY" === this.dateStr ? this.selectDate = 4 : this.selectDate = 2, e = !1), this.selectRadio || (this.needSelect = !0, e = !1), e && (this.$store.state.eighteenPop = !1)
                            },
                            onClickRadio() {
                                this.selectRadio = !this.selectRadio, this.needSelect = !1
                            }
                        }
                    },
                    Fe = xe,
                    qe = (0, u.A)(Fe, Ie, Pe, !1, null, "0c457fbd", null),
                    Oe = qe.exports,
                    Be = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("a-modal", {
                            attrs: {
                                title: e.$t("prop.tip.3"),
                                visible: e.visible,
                                footer: null,
                                maskClosable: !1,
                                width: "340rem",
                                centered: ""
                            }
                        }, [e.isID ? t("div", {
                            staticClass: "modal-wrap-ID"
                        }, [t("div", {
                            staticClass: "descriptive"
                        }, [e._v(" " + e._s(e.$t(121 == e.$store.state.popupChargeType ? "order.info.26" : 122 == e.$store.state.popupChargeType ? "order.info.31" : "prop.tip.4", {
                            amount: e.$utils.getGold(e.$store.state.needChargeAmount),
                            extra: e.$utils.getGold(e.$store.state.needChargeAmount + e.$store.state.extraAmount)
                        })) + " ")]), 1 == e.step ? t("div", {
                            staticClass: "bank-list"
                        }, [e._l(e.payChannelArr, (function(a) {
                            return t("div", {
                                class: ["bank", a.bankName],
                                on: {
                                    click: function(o) {
                                        e.selectChannel = a
                                    }
                                }
                            }, [a.id == e.selectChannel.id ? t("img", {
                                staticClass: "active_icon",
                                attrs: {
                                    src: o(1728)
                                }
                            }) : e._e()])
                        })), e.bankArr.length > 0 ? t("div", {
                            class: ["bank", "VA"],
                            on: {
                                click: e.onChannel
                            }
                        }) : e._e()], 2) : e._e(), 2 == e.step ? t("div", {
                            staticClass: "bank-list"
                        }, e._l(e.bankArr, (function(a) {
                            return t("div", {
                                class: ["bank", a.bankName],
                                on: {
                                    click: function(o) {
                                        e.selectChannel = a
                                    }
                                }
                            }, [a.id == e.selectChannel.id ? t("img", {
                                staticClass: "active_icon",
                                attrs: {
                                    src: o(1728)
                                }
                            }) : e._e()])
                        })), 0) : e._e(), t("div", {
                            staticClass: "btns"
                        }, [t("div", {
                            staticClass: "btn cancel",
                            on: {
                                click: e.onCancel
                            }
                        }, [e._v(e._s(e.$t("common.10")))]), t("div", {
                            staticClass: "btn confirm",
                            on: {
                                click: e.onConfirm
                            }
                        }, [e._v(e._s(e.$t("prop.tip.5")))])])]) : t("div", {
                            staticClass: "modal-wrap"
                        }, [t("div", {
                            staticClass: "recharge-msg"
                        }, [121 == e.$store.state.popupChargeType || 122 == e.$store.state.popupChargeType ? t("div", {
                            staticClass: "other-recharge",
                            domProps: {
                                innerHTML: e._s(e.$t(121 == e.$store.state.popupChargeType ? "order.info.26" : "order.info.31", {
                                    amount: e.$utils.getGold(e.$store.state.needChargeAmount),
                                    extra: e.$utils.getGold(e.$store.state.needChargeAmount + e.$store.state.extraAmount)
                                }))
                            }
                        }) : t("div", {
                            staticClass: "recharge"
                        }, [t("div", {
                            staticClass: "text"
                        }, [t("span", {
                            staticClass: "normal"
                        }, [e._v(" " + e._s(e.$t("common.1")) + " ")]), t("span", {
                            staticClass: "special"
                        }, [e._v(" " + e._s(e.$utils.getGold(e.$store.state.needChargeAmount)) + " ")])]), t("div", {
                            staticClass: "text"
                        }, [t("span", {
                            staticClass: "normal"
                        }, [e._v(" " + e._s(e.$t("promote.9")) + " ")]), t("span", {
                            staticClass: "special"
                        }, [e._v(" " + e._s(e.$utils.getGold(e.$store.state.needChargeAmount + e.$store.state.extraAmount)) + " ")])])]), "NGN" == this.$store.state.currency || "MXN" == this.$store.state.currency || "COP" == this.$store.state.currency || "BDT" == this.$store.state.currency ? t("div", {
                            staticClass: "warning"
                        }, [t("van-icon", {
                            staticClass: "warning-icon",
                            attrs: {
                                name: "warning-o"
                            }
                        }), t("span", {
                            staticClass: "warning-text"
                        }, [e._v(e._s(e.$t("prop.tip.12")))])], 1) : e._e()]), t("div", {
                            staticClass: "btns"
                        }, [t("div", {
                            staticClass: "btn cancel",
                            on: {
                                click: function(a) {
                                    return e.$emit("onCancel")
                                }
                            }
                        }, [e._v(e._s(e.$t("common.10")))]), t("div", {
                            staticClass: "btn confirm",
                            on: {
                                click: function(a) {
                                    return e.$emit("onConfirm")
                                }
                            }
                        }, [e._v(e._s(e.$t("prop.tip.5")))])])])])
                    },
                    Ve = [],
                    Ue = {
                        name: "popupCharge",
                        props: {
                            visible: {
                                type: Boolean
                            }
                        },
                        data() {
                            return {
                                isID: this.$store.state.currency == this.$config.CURRENCY_CONFIG.IDR,
                                bankArr: [],
                                payChannelArr: [],
                                selectChannel: {},
                                step: 1,
                                lastChannel: {}
                            }
                        },
                        created() {
                            this.isID && this.getBankArr()
                        },
                        methods: {
                            getBankArr() {
                                (0, v.xI)({}).then((e => {
                                    if (e.success && e.data.list && e.data.list.length > 0) {
                                        let a = e.data.list;
                                        a.forEach((e => {
                                            e.type == this.$config.ORDER_TYPE_CONFIG.BANK ? this.bankArr.push(e) : this.payChannelArr.push(e)
                                        })), this.payChannelArr.length > 0 ? this.selectChannel = this.payChannelArr[0] : this.bankArr.length > 0 && onChannel()
                                    }
                                }))
                            },
                            onChannel() {
                                this.step = 2, this.lastChannel = this.selectChannel, this.selectChannel = this.bankArr[0]
                            },
                            onCancel() {
                                1 != this.step ? 2 == this.step && (this.step = 1, this.selectChannel = this.lastChannel) : this.$emit("onCancel")
                            },
                            onConfirm() {
                                this.$store.state.payType = this.selectChannel.type, this.$store.state.payTypeCode = this.selectChannel.bankName, this.$emit("onConfirm")
                            }
                        }
                    },
                    je = Ue,
                    Ye = (0, u.A)(je, Be, Ve, !1, null, "2c7d6c86", null),
                    Le = Ye.exports,
                    Ge = function() {
                        var e = this,
                            a = e.$createElement,
                            o = e._self._c || a;
                        return o("div")
                    },
                    We = [],
                    ze = {
                        name: "CheckDebug",
                        props: {},
                        data() {
                            return {}
                        },
                        watch: {
                            $route(e) {
                                this.check()
                            }
                        },
                        created() {
                            this.check()
                        },
                        methods: {
                            check() {
                                let e = this.getParameterByName("d");
                                "false" != e && this.checkIsChinese()
                            },
                            checkIsPhone() {
                                let e = window.matchMedia("(pointer:coarse)").matches;
                                e || this.showDebugAlert()
                            },
                            checkIsChinese() {
                                let e = navigator.language || navigator.userLanguage;
                                "zh-cn" == e.toLowerCase() && this.showDebugAlert()
                            },
                            showDebugAlert() {
                                window.location.replace("403.html")
                            },
                            getParameterByName(e, a) {
                                a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                                var o = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                                    t = o.exec(a);
                                return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
                            }
                        }
                    },
                    Me = ze,
                    Qe = (0, u.A)(Me, Ge, We, !1, null, null, null),
                    Ke = Qe.exports,
                    He = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("div", [t("a-modal", {
                            attrs: {
                                visible: e.visible,
                                footer: null,
                                maskClosable: !1,
                                centered: "",
                                width: "340rem"
                            }
                        }, [1 == e.step ? t("div", {
                            staticClass: "tigerBg"
                        }, [t("img", {
                            staticClass: "light-bg",
                            attrs: {
                                src: o(17229)
                            }
                        }), t("div", {
                            class: ["tigerContent", e.channel]
                        }), 1 == e.firstStep ? t("div", {
                            staticClass: "tigerWait"
                        }, [t("img", {
                            attrs: {
                                src: o(28023)
                            }
                        })]) : e._e(), t("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: 2 == e.firstStep,
                                expression: "firstStep == 2"
                            }],
                            staticClass: "tigerWait",
                            on: {
                                click: e.onClickBag
                            }
                        }, [t("img", {
                            attrs: {
                                src: o(2550)
                            }
                        })]), 3 == e.firstStep ? t("div", {
                            staticClass: "tigerWait"
                        }, [t("img", {
                            attrs: {
                                src: o(21425)
                            }
                        })]) : e._e(), t("div", {
                            class: ["tigerTitle", e.channel]
                        }), t("div", {
                            class: ["btn_confirm", e.channel],
                            on: {
                                click: e.onClickBag
                            }
                        })]) : e._e(), 2 == e.step ? t("div", {
                            staticClass: "rewardBg"
                        }, [t("div", {
                            staticClass: "rewardWait"
                        }, [t("img", {
                            attrs: {
                                src: o(97092)
                            }
                        })]), t("div", {
                            class: ["rewardContent", e.channel]
                        }), t("div", {
                            class: ["rewardTitle", e.channel]
                        }), t("div", {
                            class: ["btn_confirm", e.channel],
                            on: {
                                click: function(a) {
                                    return e.$emit("closeLuckyBag")
                                }
                            }
                        })]) : e._e()])], 1)
                    },
                    Je = [],
                    Xe = {
                        props: {
                            visible: {
                                type: Boolean
                            }
                        },
                        name: "PopupBag",
                        data() {
                            return {
                                step: 1,
                                firstStep: 1
                            }
                        },
                        created() {},
                        computed: {
                            channel() {
                                return this.$store.state.localeLanguage
                            }
                        },
                        mounted() {
                            setTimeout((() => {
                                this.firstStep = 2
                            }), 600)
                        },
                        methods: {
                            onCloseBg() {
                                this.step = 2
                            },
                            onClickBag() {
                                3 != this.firstStep && (this.firstStep = 3, setTimeout((() => {
                                    this.firstStep = 4, this.step = 2
                                }), 400))
                            }
                        }
                    },
                    Ze = Xe,
                    _e = (0, u.A)(Ze, He, Je, !1, null, "314db861", null),
                    $e = _e.exports,
                    ea = function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t("a-modal", {
                            class: {
                                treasure: !1, VIP: !1, PIX: !1
                            },
                            attrs: {
                                title: e.$t("common.4"),
                                visible: e.visible,
                                "confirm-loading": e.confirmLoading,
                                footer: null,
                                maskClosable: !1,
                                width: "340rem",
                                centered: ""
                            },
                            on: {
                                cancel: function(a) {
                                    return e.$emit("handleOk", "confirme")
                                }
                            }
                        }, [e.isShowClose ? t("img", {
                            staticClass: "close",
                            attrs: {
                                src: o(46581)
                            },
                            on: {
                                click: function(a) {
                                    return e.$emit("handleOk", "confirme")
                                }
                            }
                        }) : e._e(), 302 == e.tipsType || 303 == e.tipsType ? t("img", {
                            staticClass: "treasure",
                            attrs: {
                                src: o(92218)
                            }
                        }) : e._e(), 301 == e.tipsType && e.$store.state.currency == e.$config.CURRENCY_CONFIG.INR && 0 == e.$store.state.withdraw_num && "3" != e.$store.state.userType ? t("div", {
                            staticClass: "modal-wrap"
                        }, [t("div", {
                            staticClass: "descriptive"
                        }, [e._v(" " + e._s(e.$t("prop.tip.7")) + " ")]), t("div", {
                            staticClass: "btns"
                        }, [t("div", {
                            staticClass: "cancle",
                            on: {
                                click: function(a) {
                                    return a.stopPropagation(), e.onGameLink.apply(null, arguments)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("prop.tip.7.1")) + " ")]), t("div", {
                            staticClass: "sure",
                            on: {
                                click: function(a) {
                                    return a.stopPropagation(), e.handleNext.apply(null, arguments)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("prop.tip.7.2")) + " ")])])]) : 301 == e.tipsType ? t("div", {
                            staticClass: "modal-wrap"
                        }, [t("div", {
                            staticClass: "descriptive"
                        }, [e._v(" " + e._s(e.$t("prop.tip.7.i")) + " ")]), t("div", {
                            staticClass: "btn display space-center"
                        }, [t("div", {
                            staticClass: "cancle",
                            on: {
                                click: function(a) {
                                    return a.stopPropagation(), e.handleNext.apply(null, arguments)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("common.3")) + " ")])])]) : e._e(), 302 == e.tipsType ? t("div", {
                            staticClass: "modal-wrap"
                        }, [t("div", {
                            staticClass: "descriptive",
                            domProps: {
                                innerHTML: e._s(e.$t("prop.tip.1", {
                                    amount: e.$utils.getGold(e.$store.state.gold)
                                }))
                            }
                        }), t("div", {
                            staticClass: "btn display space-center"
                        }, [t("div", {
                            staticClass: "cancle",
                            on: {
                                click: function(a) {
                                    return a.stopPropagation(), e.handleNext.apply(null, arguments)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("common.2")) + " ")])])]) : e._e(), 303 == e.tipsType ? t("div", {
                            staticClass: "modal-wrap"
                        }, [t("div", {
                            staticClass: "descriptive"
                        }, [e._v(" " + e._s(e.$t("prop.tip.1", {
                            amount: e.$utils.getGold(e.ChannelConfig.amountLimitTip)
                        })) + " ")]), t("div", {
                            staticClass: "btn display space-center"
                        }, [t("div", {
                            staticClass: "cancle",
                            on: {
                                click: function(a) {
                                    return a.stopPropagation(), e.handleNext.apply(null, arguments)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("common.2")) + " ")])])]) : e._e(), 304 == e.tipsType ? t("div", {
                            staticClass: "modal-wrap"
                        }, [t("div", {
                            staticClass: "descriptive"
                        }, [e._v(" " + e._s(e.$t("times.6")) + " ")]), t("div", {
                            staticClass: "btn display space-center"
                        }, [t("div", {
                            staticClass: "cancle",
                            on: {
                                click: function(a) {
                                    return a.stopPropagation(), e.handleNext.apply(null, arguments)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("common.3")) + " ")])])]) : e._e()])
                    },
                    aa = [],
                    oa = {
                        props: {
                            visible: {
                                type: Boolean
                            },
                            tipsType: {
                                type: Number,
                                default: 0
                            },
                            waitTime: {
                                type: Number,
                                default: 1728e5
                            },
                            ChargeAmount: {
                                type: Number,
                                default: 0
                            }
                        },
                        name: "WithdrawPopups",
                        data() {
                            return {
                                confirmLoading: !1,
                                focused: !1,
                                password: "",
                                title: this.$t("common.4"),
                                pixText: "pixText",
                                ConstConfig: H.A,
                                isShowClose: !0
                            }
                        },
                        created() {},
                        activated() {},
                        watch: {
                            tipsType: {
                                handler(e, a) {
                                    this.isShowClose = (304 != a || 304 == e) && 304 != e
                                }
                            }
                        },
                        methods: {
                            getAmountIndex: b.getAmountIndex,
                            handleNext() {
                                switch (this.tipsType) {
                                    case 301:
                                        this.$emit("handleOk", "lookTracker");
                                        break;
                                    case 302:
                                        this.$emit("handleOk", "goWithdraw");
                                        break;
                                    case 303:
                                        this.$emit("handleOk", "goWithdraw");
                                        break;
                                    case 304:
                                        this.$emit("handleOk", "goPlayGame");
                                        break
                                }
                            },
                            onGameLink() {
                                this.$emit("handleOk", "onGameLink")
                            }
                        }
                    },
                    ta = oa,
                    ra = (0, u.A)(ta, ea, aa, !1, null, "9b9ead16", null),
                    na = ra.exports;
                M().locale("en-au");
                var ia = {
                        name: "App",
                        components: {
                            BottomNav: h,
                            PayModal: L,
                            drashModel: G.A,
                            Empty: W.A,
                            Iframe: _,
                            popupDial: re,
                            popupDefault: ce,
                            popupGive: ge,
                            popupNewplayer: ke,
                            popupCharge: Le,
                            CheckDebug: Ke,
                            popupBag: $e,
                            popupEighteen: Oe,
                            tipsPop: na
                        },
                        data() {
                            return {
                                i: 0,
                                isNewPlayer: !1
                            }
                        },
                        created() {
                            this.showDial()
                        },
                        methods: {
                            handleDial(e) {
                                this.i++, 1 == this.i && (this.$store.state.isShowDial = !1)
                            },
                            handleDefault(e) {
                                this.$store.state.isDefault = 0, "playGame" == e ? (0, ve.tO)("66122") : "charge" == e ? (this.$store.commit("setLoginCallBack", (() => {
                                    this.$store.state.orderAmount = this.ChannelConfig.activityPayAmount, (0, A.O)(this.ChannelConfig.activityPayAmount)
                                })), this.$store.dispatch("handleCheckLogin")) : "close" == e && (this.isNewPlayer = !0)
                            },
                            showDial() {
                                if (1 != this.$store.state.isLogin) {
                                    let e = localStorage.getItem(H.A.LOCAL_CONST.PROP_NEW_USER);
                                    if (e && "1" == e) return;
                                    if (localStorage.setItem(H.A.LOCAL_CONST.PROP_NEW_USER, "1"), 1 != this.$store.state.isLogin && (2 != this.$store.state.isDefault || 1 != this.$store.state.isDefault)) {
                                        let e = setInterval((() => {
                                            let a = localStorage.getItem("isLoadEventId");
                                            "1" == a && ((0, ve.rI)(), clearInterval(e))
                                        }), 100)
                                    }
                                }
                            },
                            handlePlayer() {
                                this.isNewPlayer = !1
                            },
                            onPopsGive() {
                                this.$store.state.isShowGive = !1, this.$store.state.isDefault = 2
                            },
                            onCancelCharge() {
                                this.$store.state.isShowPopupCharge = !1
                            },
                            onConfirmCharge() {
                                (0, A.O)(this.$store.state.needChargeAmount)
                            },
                            checkLoginAuth() {
                                let e = navigator.language;
                                return "zh-cn" != e.toLowerCase() || "true" == {
                                    NODE_ENV: "production",
                                    VUE_APP_BASEURL: "https://ind.nirione.fun/7web",
                                    VUE_APP_CHANNEL: "IN",
                                    VUE_APP_ISAPK: "false",
                                    VUE_APP_NAME: "Welcome to Slots",
                                    VUE_APP_PUBLICPATH: "/",
                                    VUE_APP_VERSION: "1.0.1",
                                    BASE_URL: ""
                                }.VUE_APP_TEST || (window.location.replace("403.html"), !1)
                            },
                            closeLuckyBag() {
                                this.$store.state.isShowLuckyBag = !1, this.$store.state.isShowMyInfo = !0, (0, ve.tO)("66122")
                            },
                            handleTips(e) {
                                switch (this.$store.state.tipsVisible = 0, e) {
                                    case "lookTracker":
                                        let e = localStorage.getItem(H.A.LOCAL_CONST.USER_ORDER_OBJECT),
                                            a = JSON.parse(e);
                                        (a.Ordering && a.orderIding || a.orderIding) && this.$router.push({
                                            path: 1 == this.$store.state.userType ? "/withdrawalTrackerA" : 3 == this.$store.state.userType ? "/withdrawalTrackerC" : "/withdrawalTracker",
                                            query: {
                                                orderId: a.orderIding,
                                                payType: a.payType
                                            }
                                        });
                                        break;
                                    case "goWithdraw":
                                        this.$router.push("/security");
                                        break;
                                    case "onGameLink":
                                        (0, ve.tO)(this.$store.state.gameId), this.$store.state.gameId = 0;
                                        break;
                                    case "goPlayGame":
                                        let o = this.$store.state.needJumpGameUrl;
                                        this.$store.state.gameUrl = o, localStorage.setItem(H.A.LOCAL_CONST.GAME_URL, o), this.$store.state.needJumpGameUrl = "";
                                        break
                                }
                            }
                        }
                    },
                    sa = ia,
                    da = (0, u.A)(sa, n, i, !1, null, null, null),
                    la = da.exports,
                    ca = o(39325),
                    pa = o(69522),
                    ua = {
                        "common.1": "Depósito",
                        "common.2": "Saque",
                        "common.3": "Confirme",
                        "common.4": "Dica",
                        "common.5": "Detalhes",
                        "common.6": "Copiado com sucesso",
                        "common.7": "Linguagem",
                        "common.8": "Bem-vindo aos caça-níqueis",
                        "common.9": "Cópia",
                        "common.10": "Cancelar",
                        "common.11": "Alcume",
                        "common.12": "Vá para depositar",
                        "common.13": "minutos",
                        "common.14": "segundos",
                        "common.16": "Vá",
                        "home.1": "Casino",
                        "home.2": "Eventos",
                        "home.3": "Bónus",
                        "home.4": "Convidar",
                        "home.5": "Jogo",
                        "home.6": "Slots",
                        "home.7": "Pescaria",
                        "home.8": "Suporte",
                        "home.9": "       Bem-vindo ao Slots. O Group é um dos operadores de jogos de azar online mais renomados do mundo, oferecendo uma variedade de jogos emocionantes, como caça-níqueis, pesca, loterias e muito mais. O Group passou por todas as verificações de conformidade e tem autorização legal para conduzir todas as operações de jogos que envolvam apostas. Garantimos que todos os jogadores possam jogar em um ambiente justo e confiável e estamos comprometidos em fornecer aos jogadores a melhor experiência de jogo.\n      Esta plataforma está disponível apenas para usuários com 18 anos ou mais. Esta plataforma não assume qualquer responsabilidade legal decorrente da utilização de jogos nesta plataforma por menores.",
                        "eighteen.1": "Configurar conta",
                        "eighteen.2": "Nome de usuário",
                        "eighteen.3": "Por favor insira o nome de usuário",
                        "eighteen.4": "Data de nascimento",
                        "eighteen.5": "Tenho mais de 18 anos e entendo os termos e condições",
                        "eighteen.6": "Aberto apenas para usuários maiores de 18 anos",
                        "eighteen.7": "Por favor selecione a data de nascimento",
                        "eighteen.8": "Por favor insira 3-15 caracteres",
                        "bottomNav.1": "Promoção",
                        "bottomNav.2": "Perfil",
                        "info.1": "milhões mensais",
                        "info.2": "Sobre",
                        "about.1": "Temos uma extensa coleção de slots estilo Vegas e oferecemos a mais ampla variedade de jogos e produtos mais competitivos do mercado. Estamos comprometidos com a justiça e a integridade como um operador de jogos de azar online de renome internacional que passa por uma triagem rigorosa. Todas as plataformas acessam e selecionam apenas plataformas de jogos online de renome internacional para garantir que cada jogador possa jogar em um ambiente justo e confiável. Ao mesmo tempo, o governo da Costa Rica também monitorará os dados da plataforma de jogos para garantir a justiça e a autenticidade do jogo. Aproveite a diversão de jogar em Slots!",
                        "about.2": "Sobre Nós",
                        "pops.1": "Parabéns",
                        "pops.2": "Deposite <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount1}</span> e ganhe <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount2}</span>! Essa oportunidade só aparece uma vez, não perca!",
                        "pops.3": "Jogar jogos",
                        "promote.1": "meu convite",
                        "promote.2": "Hoje",
                        "promote.3": "Todos",
                        "promote.4": "Registro",
                        "promote.5": "Prêmio",
                        "promote.6": "Minha recompensa",
                        "promote.7": "Recebida",
                        "promote.8": "Disponível",
                        "promote.9": "Receber",
                        "promote.10": "Compartilhe com sua mídia social",
                        "promote.11": "Compartilhe o link com seus amigos",
                        "promote.12": "Recebido com sucesso",
                        "task.1": "Jogue",
                        "task.2": "vezes",
                        "task.3": "Já recebeu",
                        "task.4": "Conclua tarefas para obter recompensas",
                        "task.5": "Tarefa iniciante",
                        "task.6": "Complete os seguintes jogos e você receberá uma recompensa em dinheiro de <span style='color: #fff;font-size: 16rem;'>{amount}</span>",
                        "task.7": "Completar",
                        "task.8": "Completado",
                        "task.9": "Receba {amount}",
                        "task.10": "Tarefas do sistema",
                        "sign.1": "CHECK IN",
                        "sign.2": "Bônus diário",
                        "sign.3": "Complete o jogo uma vez para receber a recompensa do dia.",
                        "sign.4": "Check-in bem sucedido",
                        "service.1": "Atendimento ao Cliente",
                        "service.2": "Problema comum",
                        "service.3": "Como posso sacar dinheiro?",
                        "service.4": "Caros usuários, sacar moedas é um privilégio para membros seniores. Você pode atualizar para membro sênior recarregando qualquer quantia e desbloquear direitos de saque.",
                        "service.5": "Esta plataforma é digna da minha confiança?",
                        "service.6": "Você pode ter certeza de que somos uma marca do Grupo Las Vegas e oferecemos um serviço de ouro real 1:1. Não poupamos esforços e estamos comprometidos em criar a experiência de jogo mais autêntica, segura e justa para você.",
                        "service.7": "O que devo fazer se houver um problema com meu depósito?",
                        "service.8": "Primeiro, verifique o registro de pagamento e a conta bancária. Se a dedução for bem-sucedida, mas não recebida, entre em contato com o atendimento ao cliente da plataforma e forneça o comprovante da transação para que o atendimento ao cliente possa auxiliar no processamento.",
                        "service.8.D": "1. Verifique se o endereço e a rede estão corretos, certifique-se de que o endereço que você está usando esteja correto e que a conexão de rede esteja estável.\n2. Verifique se o atraso é causado por congestionamento da rede. Se houver congestionamento na rede, o depósito pode atrasar, aguarde pacientemente.\n3. Se não houver problemas óbvios, entre em contato com o atendimento ao cliente da plataforma.",
                        "service.9": "Por que o jogo carrega lentamente ou não abre?",
                        "service.10": "Problemas de carregamento de jogos podem ser causados ​​pela latência da rede, desempenho do dispositivo ou manutenção da plataforma. Recomenda-se verificar a conexão de rede ou relatar o problema ao atendimento ao cliente para obter ajuda",
                        "service.11": "E se a retirada falhar?",
                        "service.12": "Se o saque falhar, verifique se sua conta de saque está correta ou altere a conta de saque e retire o dinheiro novamente.",
                        "service.12.D": "Se o saque falhar, verifique se a rede que você selecionou ao sacar é consistente com a rede suportada pela sua carteira",
                        "deposit.1": "Deposite on-line",
                        "deposit.2": "Selecione o valor do depósito",
                        "deposit.3": "Após o pagamento bem-sucedido, o sistema adicionará o valor para sua conta de 1 a 5 minutos.",
                        "deposit.4": "Extra",
                        "deposit.5": "Valor do pedido",
                        "deposit.6": "Tempo de pedido",
                        "deposit.7": "Número do pedido",
                        "deposit.8": "Método de pagamento",
                        "deposit.9": "USDT",
                        "deposit.10": "BRL",
                        "deposit.11": "Detalles de pago",
                        "deposit.12": "Valor real pago",
                        "deposit.13": "Moeda de depósito",
                        "deposit.14": "Selecione a rede",
                        "deposit.15": "Endereço de depósito",
                        "deposit.16": "Copiar endereço",
                        "deposit.17": "Por favor, certifique-se de completar o pagamento de acordo com o valor real do pagamento. Se o valor não corresponder, ele não será creditado na conta.",
                        "deposit.18": "Taxa de câmbio:",
                        "deposit.19": "Em manutenção",
                        "deposit.20": "O método de depósito em moeda legal está em manutenção. Agora você pode desfrutar de um desconto de XXX ao pagar com USDT!",
                        "deposit.21": "Detalhes de saque",
                        "deposit.22": "Valor real recebido",
                        "deposit.23": "Por favor insira ou cole o endereço",
                        "deposit.24": "Por favor, confirme cuidadosamente suas informações de rede e endereço. Se os fundos não chegarem devido a informações incorretas, você será o único responsável pelas perdas relacionadas.",
                        "deposit.25": "Por favor, verifique cuidadosamente as informações da sua conta de saque. Quaisquer perdas econômicas causadas por erros de conta serão suportadas por você.",
                        "deposit.26": "A função de retirada de moeda fiduciária está em manutenção e temporariamente indisponível. Por favor, use o método de moeda USDT para retirar dinheiro",
                        "deposit.27": "Método de retirada",
                        "deposit.28": "Moeda de retirada",
                        "deposit.29": "Endereço de saque",
                        "deposit.30": "Rede",
                        "deposit.31": "A rede está em manutenção no momento. Tente novamente mais tarde.",
                        "deposit.32": "Confirmar informações",
                        "withdrawal.1": "Valor que pode ser sacado:",
                        "withdrawal.2": "Valor da retirada",
                        "withdrawal.3": "Saque em andamento",
                        "withdrawal.4": "Saldo da conta",
                        "withdrawal.5": "Regras de conversão de recompensas：",
                        "withdrawal.6": "1.As recompensas obtidas pelos jogadores cada vez que fazem apostas em jogos de slot machine serão convertidas em dinheiro na proporção de 1:1 e depositadas diretamente na conta de jogo do jogador.\n2.O saldo da conta é a recompensa que os jogadores recebem nos jogos de caça-níqueis, mas o saldo da conta não pode ser sacado diretamente.\n3.O valor sacável é o valor após o sistema converter o saldo da conta 1:1, que pode ser sacado integralmente para sua conta",
                        "history.1": "Quantia",
                        "history.2": "Tempo",
                        "history.3": "Estado",
                        "history.4": "Histórico de retiradas",
                        "history.5": "A conta de saque está errada, verifique as informações da conta e reinicie o saque.",
                        "history.5.D": "Verifique novamente se o endereço e a rede da sua carteira estão corretos e reinicie os saques.",
                        "history.6": "Nenhum dado",
                        "drawcash.1": "Adicionar chave pix de saque",
                        "drawcash.2": "Nome do titular da conta",
                        "drawcash.3": "Por favor insira o nome do titular da conta",
                        "drawcash.4": "Tipo de chave PIX",
                        "drawcash.5": "PIX",
                        "drawcash.6": "Por favor insira sua conta PIX",
                        "drawcash.7": "CPF",
                        "drawcash.8": "Por favor insira seu CPF",
                        "drawcash.9": "drawcash.9    /*no value*/",
                        "drawcash.10": "Número de telefone",
                        "drawcash.11": "Por favor, digite seu número de telefone",
                        "drawcash.12": "Erro de formato",
                        "drawcash.13": "drawcash.13    /*no value*/",
                        "drawcash.14": "drawcash.14    /*no value*/",
                        "prop.tip.1": "Prezado usuário, você acumulou bônus de <span style='font-weight: 600; color: #ffc025'>{amount}</span>. Todos os bônus podem ser sacados para sua conta.Vá e extraia-o rápido",
                        "prop.tip.2": "Caros usuários:<br/>&nbsp;&nbsp;&nbsp;&nbsp;A função de retirada é um privilégio de membro premium.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Você pode se tornar um membro premium recarregando qualquer quantia e desbloquear direitos de saque e, em seguida, sacar dinheiro.",
                        "prop.tip.3": "Detalhes do pedido",
                        "prop.tip.4": "Deposite {amount}, receba {extra}",
                        "prop.tip.5": "Vá pagar",
                        "prop.tip.6": "Prezado usuário, esta é a primeira vez que você saca dinheiro. Para a segurança do saldo de sua conta e familiaridade com o processo de retirada do sistema, escolha <span style='color:#06d0df;'>{amount}</span>  para sacar dinheiro. Depois que a primeira retirada for bem-sucedida, outros valores de retirada serão desbloqueados automaticamente.",
                        "prop.tip.7": "Caro usuário, você tem atualmente uma solicitação de saque inacabada, vá e resolva-a.",
                        "prop.tip.7.i": "Caro usuário, você tem atualmente uma solicitação de saque inacabada, vá e resolva-a.",
                        "prop.tip.8": "Caro usuário, o saldo da sua conta é insuficiente. você pode tentar jogar para ganhar mais dinheiro e depois sacar dinheiro.",
                        "prop.tip.9": "Caro usuário: Parabéns pelo seu primeiro saque bem-sucedido. Você desbloqueou com sucesso outros valores de saque.",
                        "prop.tip.10": "Prezado usuário, devido aos seus saques frequentes da última vez, uma tarefa de resfriamento foi acionada. Por favor, conclua a tarefa primeiro antes de fazer qualquer saque.",
                        "prop.tip.11": "prop.tip.11    /*no value*/",
                        "prop.tip.12": "prop.tip.12    /*no value*/",
                        "order.info.1": "Rastreamento de Pedidos",
                        "order.info.2": "Retirada em andamento",
                        "order.info.3": "O sistema aceitou o pedido de saque e está aguardando para ser processado...",
                        "order.info.4": "O sistema processou a solicitação de saque e está aguardando para alocar o canal de saque...",
                        "order.info.5": "Na primeira vez que um usuário sacar dinheiro, ele poderá usar o canal de pagamento VIP gratuitamente uma vez. O canal de pagamento VIP está sendo alocado...",
                        "order.info.6": "O primeiro saque do usuário foi atribuído a um canal VIP e será enviado ao banco para processamento...",
                        "order.info.7": "O primeiro saque do usuário foi atribuído a um canal VIP e será enviado ao banco para processamento...",
                        "order.info.7.D": "Canais de pagamento VIP foram atribuídos e solicitações de saque foram enviadas para a exchange...",
                        "order.info.8": "O pedido de saque foi encaminhado ao Banco Central e está sendo processado pelo banco...",
                        "order.info.8.D": "A exchange aceitou o pedido de saque e está processando o saque...",
                        "order.info.9": "Retirada bancária processada com sucesso",
                        "order.info.9.D": "Saque processado com sucesso",
                        "order.info.10": "Erro na conta, falha no processamento bancário, o valor do saque foi devolvido à sua conta do jogo, retire novamente.",
                        "order.info.10.D": "As informações de retirada enviadas estão incorretas, a exchange falhou no processamento. O valor da retirada foi devolvido à sua conta de jogo.Retire novamente.",
                        "order.info.11": "O canal de retirada VIP gratuito foi usado, o canal de retirada comum foi alocado e a retirada está sendo colocada na fila.",
                        "order.info.11.C": "order.info.11.C    /*no value*/",
                        "order.info.12": "O canal normal de saque está na fila para processar o saque, que deve levar <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> horas.",
                        "order.info.12.C": "order.info.12.C    /*no value*/",
                        "order.info.13": "O canal normal de saque está na fila para processar o saque, que deve levar {time} horas.",
                        "order.info.14": "Número de pessoas na fila:",
                        "order.info.15": "Tempo previsto:",
                        "order.info.16": "Use canal de retirada VIP",
                        "order.info.17": "Parabéns! Você pode aproveitar o canal VIP de retirada rápida gratuitamente uma vez. Deposite {amount} agora e o sistema fornecerá a você um canal VIP de pagamento de saque rápido gratuitamente,As retiradas chegam em 5 minutos!",
                        "order.info.18": "Caro usuário, você tem a oportunidade de desfrutar gratuitamente do canal VIP de retirada rápida. Agora você deposita {amount} e o sistema fornecerá gratuitamente um canal VIP de saque rápido. Use o canal VIP de saque rápido e o saque chegará em 5 minutos!",
                        "order.info.19": "O sistema de recarga do usuário fornece canais VIP de retirada rápida, e canais VIP de retirada estão sendo alocados.",
                        "order.info.20": "O canal de saque VIP foi alocado com sucesso e a solicitação de saque está sendo processada.",
                        "order.info.21": "O valor de saque do usuário ultrapassa {amount}, o que ultrapassa o limite de isenção de taxas do canal VIP. Há uma taxa de retirada de {ratio}%. Após o recebimento da taxa, o canal de pagamento VIP envia a solicitação de remessa ao banco central para processamento.",
                        "order.info.21.D": "O valor de saque do usuário ultrapassa {amount}, o que ultrapassa o limite de isenção de taxas do canal VIP. Há uma taxa de retirada de {ratio}%.",
                        "order.info.22": "Caro usuário:\n       Temos o compromisso de fornecer aos usuários uma melhor experiência de saque em dinheiro. Se o valor único de saque exceder  {amount} usando o canal de pagamento VIP, o canal VIP cobrará {ratio}% do valor do saque como taxa de manuseio.\n       Após o pagamento da taxa de saque, a solicitação de saque será imediatamente encaminhada ao Banco Central para processamento.",
                        "order.info.22.D": "Caro usuário:\n        Estamos empenhados em fornecer aos usuários uma melhor experiência de saque em dinheiro. Se o valor único de saque exceder {amount} usando o canal de pagamento VIP, o canal VIP cobrará 5% do valor do saque como taxa de manuseio.\n       Após o pagamento da taxa de saque, a solicitação de saque será processada imediatamente.",
                        "order.info.23": "Comissão de retirada",
                        "order.info.24": "Pagar taxas de retirada",
                        "order.info.25": "Pagar comissão",
                        "order.info.26": "Taxa de manuseio <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.27": "Processamento bancário anormal: Este valor de saque é uma renda pessoal adicional. De acordo com os regulamentos federais, é necessário um imposto de renda pessoal de 10% do valor do saque.",
                        "order.info.27.D": "O processamento da retirada é anormal. O valor da retirada é uma renda pessoal adicional. De acordo com os regulamentos federais, é necessário um imposto de renda pessoal de 10% do valor da retirada.",
                        "order.info.28": "Caro usuário：\n      Esta retirada é sua renda pessoal adicional. De acordo com as regulamentações federais, os bancos são obrigados a cobrar um imposto de renda pessoal de 10%. Seu progresso atual de retirada é de 99.9%. Este é o último passo antes da chegada do saque. Depois de pagar o imposto, o banco remeterá o dinheiro.\n",
                        "order.info.28.D": "Caro usuário:\n     Esta retirada é sua renda pessoal adicional. De acordo com os regulamentos federais, é necessário um imposto de renda pessoal de 10%. Seu progresso atual de retirada é de 99,9%.Este é o último passo antes da chegada do saque. Após o pagamento dos impostos, o valor será imediatamente enviado para a bolsa para a transferência.",
                        "order.info.29": "impostos a pagar",
                        "order.info.30": "Pagar imposto pessoal",
                        "order.info.31": "Imposto de renda pessoal <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.32": "O banco recebeu o imposto e a remessa está sendo processada...",
                        "order.info.32.D": "A solicitação de saque foi enviada à exchange para processamento...",
                        "order.info.33": "Falha na transferência bancária: A chave PIX está errada e a chave PIX precisa ser modificada.",
                        "order.info.33.D": "Falha na retirada: tipo de rede errado",
                        "order.info.34": "O sistema recebeu uma notificação do banco informando que a transferência do sistema falhou devido a uma chave PIXincorreta. Verifique novamente sua chave PIX.",
                        "order.info.34.D": "O sistema recebeu uma notificação da exchange informando que a transferência falhou devido a uma incompatibilidade entre o tipo de rede e o endereço de retirada. Verifique novamente o tipo de rede que você escolher",
                        "order.info.35": "Chave PIX:",
                        "order.info.36": "Confirmar alteração",
                        "order.info.37": "Para garantir que seus saques funcionem corretamente, verifique novamente sua chave PIX.",
                        "order.info.37.D": "Para garantir que seus saques funcionem corretamente，verifique cuidadosamente se o tipo de rede selecionado é consistente com o endereço de saque.",
                        "order.info.38": "Verificar",
                        "order.info.39.A": "Caro usuário：\n      Devido a um erro no PIX que você enviou desta vez, seu pedido de saque foi temporariamente congelado para garantir a segurança da sua conta. Por favor, corrija a chave PIX e faça um depósito único de {amount} para verificação para remover a restrição. Após enviar o PIX correto, o Banco Central fará a remessa imediatamente.",
                        "order.info.39.B": "Caro usuário：\n      Devido a um erro no PIX que você enviou desta vez, seu pedido de saque foi temporariamente congelado para garantir a segurança da sua conta. Por favor, corrija a chave PIX e faça um depósito único de {amount} para verificação para remover a restrição. Após enviar o PIX correto, o Banco Central fará a remessa imediatamente.",
                        "order.info.39.D": "Caro usuário:\n     Devido ao erro de rede que você enviou desta vez, a transferência falhou. Para garantir a segurança da sua conta, seu pedido de saque foi temporariamente congelado.Corrija a rede correta e deposite <span>{amount}<span style='color: #FFC320'>{crypto}</span></span> para verificação para remover o limite.Após enviar a rede correta, a exchange transferirá o dinheiro imediatamente.",
                        "order.info.40": "Pague {amount}",
                        "order.info.41": "Alterar chave PIX",
                        "order.info.41.D": "Alterar tipo de rede",
                        "order.info.42": "O banco recebeu solicitação de correção do Chave PIX e a remessa está sendo reprocessada...",
                        "order.info.42.D": "A exchange recebeu solicitação de correção do tipo de rede e está reprocessando o saque..."
                    },
                    ma = {
                        "banner.1": "invite_br.png",
                        "banner.2": "newPlayer_br.png",
                        "banner.3": "check-in.png",
                        "banner.4": "daily.png",
                        "promote.img.1": "banner-invite.png",
                        "eventItem-Img.1": "banner-newplay.png",
                        "eventItem-Img.2": "banner-check.png",
                        "eventItem-Img.3": "banner-daily.png",
                        "eventItem-Img2.1": "R$.png",
                        "withdraw-Img.1": "gold.png",
                        "service.img.1": "service.png",
                        "popupDial.1": "turntable.png",
                        "popupDial.2": "turntable_arrow.png",
                        "popupDial.3": "turntable_money.png",
                        "popupDial.4": "turntable_title.png",
                        "popupBag.1": "step_title_1_br.png",
                        "popupBag.2": "step_msg_1_br.png",
                        "popupBag.3": "step_button_br.png",
                        "deposit.img.1": "icon_gold_br.png"
                    },
                    ha = { ...ua,
                        ...ma
                    },
                    fa = {
                        "common.1": "Deposito",
                        "common.2": "Penarikan",
                        "common.3": "Konfirmasi",
                        "common.4": "Kiat",
                        "common.5": "Detail",
                        "common.6": "Berhasil disalin",
                        "common.7": "Bahasa",
                        "common.8": "Selamat datang di Slots",
                        "common.9": "Menyalin",
                        "common.10": "Membatalkan",
                        "common.11": "Alias",
                        "common.12": "Pergi ke setoran",
                        "home.1": "kasino",
                        "home.2": "Aktivitas",
                        "home.3": "Bonus",
                        "home.4": "Mengundang",
                        "home.5": "Permainan",
                        "home.6": "Mesin slot ",
                        "home.7": "Perikanan",
                        "home.8": "Mendukung",
                        "home.9": "Kami adalah salah satu perusahaan pengoperasian kasino online terkenal secara internasional, menawarkan berbagai permainan menarik seperti slot, memancing, lotere, dan banyak lagi. Kami memastikan bahwa setiap pemain dapat bermain di lingkungan yang adil dan dapat dipercaya dan berkomitmen untuk memberikan pengalaman bermain terbaik kepada para pemain. Pendapatan akhir tidak dijamin.",
                        "bottomNav.1": "Promosi",
                        "bottomNav.2": "Informasi",
                        "info.1": "juta per bulan",
                        "info.2": "Tentang",
                        "about.1": "Kami memiliki banyak koleksi slot gaya Vegas dan menawarkan rangkaian permainan terluas dan produk paling kompetitif di pasar. Semua platform hanya mengakses dan memilih platform game online terkenal secara internasional untuk memastikan bahwa setiap pemain dapat bermain di lingkungan yang adil dan dapat dipercaya. Pada saat yang sama, pemerintah Kosta Rika juga akan memantau data platform game untuk memastikan keadilan dan keaslian game tersebut. Nikmati bermain game di Slots!",
                        "about.2": "Tentang kami",
                        "pops.1": "Selamat",
                        "pops.2": "Deposit <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount1}</span> dan dapatkan <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount2}</span>! Kesempatan ini hanya datang sekali, jangan lewatkan!",
                        "pops.3": "Bermain game",
                        "promote.1": "undanganku",
                        "promote.2": "Hari ini",
                        "promote.3": "Semua",
                        "promote.4": "Merekam",
                        "promote.5": "Penghargaan",
                        "promote.6": "Upahku",
                        "promote.7": "Diperoleh",
                        "promote.8": "Tersedia",
                        "promote.9": "Menerima",
                        "promote.10": "Berbagi ke media sosial Anda",
                        "promote.11": "Bagikan tautan dengan teman Anda",
                        "task.1": "Mainkan",
                        "task.2": "kali",
                        "task.3": "Sudah diterima",
                        "task.4": "Selesaikan tugas untuk mendapatkan hadiah",
                        "task.5": "Tugas pemula",
                        "task.6": "Selesaikan permainan berikut dan Anda akan menerima hadiah uang tunai sebesar <span style='color: #fff;font-size: 16rem;'>{amount}</span>",
                        "task.7": "Untuk menyelesaikan",
                        "task.8": "Selesai",
                        "task.9": "Menerima {amount}",
                        "task.10": "Tugas sistem",
                        "sign.1": "CHECK IN",
                        "sign.2": "Bonus Harian",
                        "sign.3": "Selesaikan game sekali untuk mendapatkan hadiah hari itu",
                        "sign.4": "Check-in berhasil",
                        "service.1": "Pelayanan pelanggan",
                        "service.2": "Masalah umum",
                        "service.3": "Bagaimana saya bisa menarik uang?",
                        "service.4": "Pengguna yang terhormat, penarikan adalah hak istimewa anggota premium. Anda dapat meningkatkan ke anggota senior dengan mengisi ulang jumlah berapa pun buka kunci izin penarikan",
                        "service.5": "Apakah ada biaya penarikan?",
                        "service.6": "Kami tidak membebankan biaya penarikan apa pun. Kami percaya dalam memberikan pengalaman bermain game yang transparan dan adil kepada para pemain, dan ini termasuk memungkinkan Anda memperoleh bonus tanpa biaya tambahan",
                        "deposit.1": "Deposito daring",
                        "deposit.2": "Jumlah deposit",
                        "deposit.3": "Ketentuan Penggunaan: Setelah pembayaran berhasil, sistem akan menambahkan jumlah tersebut ke akun Anda dalam waktu 1 hingga 5 menit.",
                        "deposit.4": "Ekstra",
                        "withdrawal.1": "Jumlah yang dapat ditarik:",
                        "withdrawal.2": "Jumlah penarikan",
                        "withdrawal.3": "sedang berlangsung",
                        "history.1": "Jumlah",
                        "history.2": "Waktu",
                        "history.3": "Menyatakan",
                        "history.4": "Riwayat penarikan",
                        "history.5": "Akun penarikan salah, harap periksa informasi akun dan mulai penarikan lagi.",
                        "drawcash.1": "Mengikat rekening penerima",
                        "drawcash.2": "Nama pemilik akun",
                        "drawcash.3": "Silakan masukkan nama pemilik akun",
                        "drawcash.4": "Rekening Penerima",
                        "drawcash.5": "Akun penarikan",
                        "drawcash.6": "Silakan masukkan akun",
                        "drawcash.7": "",
                        "drawcash.8": "",
                        "drawcash.9": "",
                        "drawcash.10": "Nomor telepon",
                        "drawcash.11": "Silakan masukkan nomor telepon Anda",
                        "drawcash.12": "Kesalahan format",
                        "prop.tip.1": "Pengguna yang terhormat, Anda telah memperoleh <span style='font-weight: 600; color: #ffc025'>{amount}</span>,Untuk membiasakan Anda dengan proses penarikan sesegera mungkin, harap segera tarik!",
                        "prop.tip.2": "Pengguna yang terhormat:<br/>&nbsp;&nbsp;&nbsp;&nbsp;Anda sekarang adalah pengguna biasa dan belum membuka kunci izin penarikan. Anda tidak dapat menggunakan fungsi penarikan untuk saat ini.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Anda dapat melakukan deposit berapa pun di mal untuk menjadi anggota premium dan membuka kunci fungsi penarikan. Setelah membuka kunci fungsi penarikan, Anda dapat segera menggunakan fungsi penarikan untuk menarik saldo akun Anda.",
                        "prop.tip.3": "Detail pesanan",
                        "prop.tip.4": "Setor {amount}, terima {extra}",
                        "prop.tip.5": "Pergi bayar",
                        "prop.tip.6": "Pengguna yang terhormat, ini pertama kalinya Anda menarik uang. Demi keamanan saldo akun Anda dan memahami proses penarikan sistem, silakan pilih <span style='color:#06d0df;'>{amount}</span> untuk menarik. Setelah penarikan pertama berhasil, jumlah penarikan lainnya akan otomatis dibuka kuncinya.",
                        "prop.tip.7": "Pengguna yang terhormat, saat ini Anda memiliki permintaan penarikan yang belum selesai, harap atasi.",
                        "prop.tip.8": "Pengguna yang terhormat, saldo akun Anda tidak mencukupi, Anda dapat mencoba bermain game untuk memenangkan lebih banyak uang, dan kemudian menarik uang.",
                        "prop.tip.9": "Pengguna yang terhormat: Selamat atas penarikan pertama Anda yang berhasil. Anda telah berhasil membuka jumlah penarikan tambahan.",
                        "prop.tip.10": "Pengguna yang terhormat, karena seringnya Anda melakukan penarikan terakhir kali, tugas cooldown terpicu. Silakan selesaikan tugas terlebih dahulu sebelum melakukan penarikan.",
                        "prop.tip.11": "Saluran pembayaran tidak tersedia, coba lagi nanti.",
                        "order.info.1": "Pelacakan pesanan",
                        "order.info.2": "Kemajuan penarikan",
                        "order.info.3": "Permintaan penarikan telah diterima oleh sistem dan menunggu untuk diproses…",
                        "order.info.4": "Sistem telah memproses permintaan penarikan dan menunggu saluran penarikan dialokasikan...",
                        "order.info.5": "Pertama kali pengguna menarik uang, dia dapat menggunakan saluran pembayaran VIP secara gratis satu kali.Saluran pembayaran VIP sedang dialokasikan...",
                        "order.info.6": "Penarikan pertama pengguna telah ditugaskan ke saluran VIP dan akan dikirim ke bank untuk diproses...",
                        "order.info.7": "Penarikan pertama pengguna telah ditugaskan ke saluran VIP dan akan dikirim ke bank untuk diproses...",
                        "order.info.8": "Permintaan penarikan telah diteruskan ke Bank Sentral dan sedang diproses oleh bank...",
                        "order.info.9": "Penarikan bank berhasil diproses",
                        "order.info.10": "Kesalahan akun, pemrosesan bank gagal, jumlah penarikan telah dikembalikan ke akun game Anda, silakan mulai ulang penarikan.",
                        "order.info.11": "Saluran penarikan VIP gratis telah digunakan, saluran penarikan umum telah dialokasikan, dan penarikan sedang dalam antrian.",
                        "order.info.12": "Saluran penarikan normal sedang mengantri untuk memproses penarikan, yang seharusnya memerlukan waktu <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> jam.",
                        "order.info.13": "Saluran penarikan normal sedang mengantri untuk memproses penarikan, yang akan memakan waktu {time} jam.",
                        "order.info.14": "Jumlah orang dalam antrean:",
                        "order.info.15": "perkiraan waktu:",
                        "order.info.16": "Gunakan saluran penarikan VIP",
                        "order.info.17": "Selamat!Anda dapat menikmati saluran tarik tunai cepat VIP secara gratis satu kali.setor {amount} sekarang,sistem akan memberi Anda saluran pembayaran penarikan cepat VIP secara gratis.penarikan tiba dalam 5 menit.",
                        "order.info.18": "Pengguna yang terhormat，Anda dapat menikmati saluran tarik tunai cepat VIP secara gratis satu kali.setor {amount} sekarang,sistem akan memberi Anda saluran pembayaran penarikan cepat VIP secara gratis.penarikan tiba dalam 5 menit.",
                        "order.info.19": "Sistem isi ulang pengguna menyediakan saluran penarikan cepat VIP, dan saluran penarikan VIP sedang dialokasikan.",
                        "order.info.20": "Saluran penarikan VIP telah berhasil dialokasikan dan permintaan penarikan sedang diproses.",
                        "order.info.21": "Jumlah penarikan pengguna melebihi {amount}, yang melebihi batas bebas biaya saluran VIP. Penarikan dikenakan biaya {ratio}%. Setelah menerima biaya, saluran pembayaran VIP mengirimkan permintaan pengiriman uang ke bank sentral untuk diproses.",
                        "order.info.22": "Pengguna yang terhormat: Kami berkomitmen untuk memberikan pengalaman penarikan yang lebih baik kepada pengguna. Jika jumlah penarikan tunggal menggunakan saluran pembayaran VIP melebihi {amount}, saluran VIP akan mengenakan biaya {ratio}% dari jumlah penarikan sebagai biaya penanganan. Biaya penarikan ini digunakan untuk menjaga sistem pembayaran.",
                        "order.info.23": "Komisi penarikan",
                        "order.info.24": "Bayar biaya penarikan",
                        "order.info.25": "Bayar komisi",
                        "order.info.26": "Biaya penanganan {amount}",
                        "order.info.27": "Pemrosesan bank yang tidak normal: Jumlah penarikan ini adalah penghasilan pribadi tambahanMenurut pedoman perpajakan, pajak penghasilan pribadi sebesar 10% dari jumlah penarikan harus dibayar.",
                        "order.info.28": "Pengguna yang terhormat\n    bank memberi tahu Anda bahwa penarikan ini dianggap sebagai penghasilan pribadi tambahan. Menurut panduan perpajakan, Anda akan dikenakan pajak penghasilan pribadi sebesar 10% dari jumlah penarikan. Begitu bank menerima pajak, maka bank akan segera memproses penarikannya.",
                        "order.info.29": "Pajak yang harus dibayar",
                        "order.info.30": "Bayar pajak pribadi",
                        "order.info.31": "pajak penghasilan pribadi {amount}",
                        "order.info.32": "Bank telah menerima pajak dan sedang memproses pengiriman uang...",
                        "order.info.33": "Transfer bank gagal: Nomor rekening salah dan nomor rekening perlu diubah.",
                        "order.info.34": "Sistem menerima notifikasi dari bank yang menyatakan bahwa transfer sistem gagal karena nomor rekening salah. Periksa kembali nomor rekening penarikan Anda.",
                        "order.info.35": "",
                        "order.info.36": "Konfirmasi perubahan",
                        "order.info.37": "Untuk memastikan penarikan Anda normal, harap periksa nomor rekening Anda dengan cermat.",
                        "order.info.38": "Memeriksa",
                        "order.info.39.A": "Pengguna yang terhormat:\nKarena kesalahan pada nomor rekening yang Anda kirimkan untuk penarikan ini,Pemrosesan penarikan gagal，Untuk mengoreksi akun Anda, saluran pembayaran VIP akan dikenakan biaya tambahan.jadi Anda harus membayar {amount}.Setelah pembayaran selesai, saluran penarikan VIP akan segera mengirimkan nomor rekening penarikan yang benar ke bank untuk memproses pengiriman uang.",
                        "order.info.39.B": "Pengguna yang terhormat: Karena kesalahan pada nomor rekening yang Anda kirimkan untuk penarikan ini,Pemrosesan penarikan gagal，Untuk mengoreksi akun Anda, saluran pembayaran VIP akan dikenakan biaya tambahan.jadi Anda harus membayar {amount}.Setelah pembayaran selesai, saluran penarikan VIP akan segera mengirimkan nomor rekening penarikan yang benar ke bank untuk memproses pengiriman uang.",
                        "order.info.40": "Bayar {amount}",
                        "order.info.41": "Ubah Nomor Akun",
                        "order.info.42": "Bank telah menerima permintaan untuk memperbaiki nomor rekening dan sedang memproses ulang pengiriman uang...."
                    },
                    ga = {
                        "banner.1": "invite_id.png",
                        "banner.2": "newPlayer_id.png",
                        "banner.3": "check-inid.png",
                        "banner.4": "dailyid.png",
                        "promote.img.1": "banner-inviteid.png",
                        "eventItem-Img.1": "banner-newplayid.png",
                        "eventItem-Img.2": "banner-checkid.png",
                        "eventItem-Img.3": "banner-dailyid.png",
                        "eventItem-Img2.1": "R$id.png",
                        "withdraw-Img.1": "goldid.png",
                        "service.img.1": "serviceid.png",
                        "popupDial.1": "turntableid.png",
                        "popupDial.2": "turntable_arrowid.png",
                        "popupDial.3": "turntable_moneyid.png",
                        "popupDial.4": "turntable_titleid.png",
                        "": ""
                    },
                    wa = { ...fa,
                        ...ga
                    },
                    ya = {
                        "common.1": "Deposit",
                        "common.2": "Withdrawals",
                        "common.3": "Confirm",
                        "common.4": "TIPS",
                        "common.5": "Details",
                        "common.6": "Copy successful",
                        "common.7": "Language",
                        "common.8": "Welcome to Slots",
                        "common.9": "Copy",
                        "common.10": "Cancel",
                        "common.11": "Nickname",
                        "common.12": "Go Deposit",
                        "common.13": "minutes",
                        "common.14": "seconds",
                        "common.15": "common.15    /*no value*/",
                        "home.1": "Casino",
                        "home.2": "Activity",
                        "home.3": "Bonus",
                        "home.4": "Invite",
                        "home.5": "Games",
                        "home.6": "Slot machine",
                        "home.7": "Fishery",
                        "home.8": "Support",
                        "home.9": "    Welcome to Slots,Group is one of the world's most renowned online gambling operators, offering a variety of exciting games such as slot machines, fishing, lotteries and more..The Group has passed all compliance checks and has the legal authorization to conduct all gaming operations involving wagering.We ensure that every player can play in a fair and trustworthy environment and are committed to providing players with the best gaming experience.\n     This platform is restricted to users aged 18 and above. This platform does not assume any legal liability arising from minors using games on this platform.",
                        "eighteen.1": "Set up your account",
                        "eighteen.2": "Username",
                        "eighteen.3": "Please enter your username",
                        "eighteen.4": "Date of Birth",
                        "eighteen.5": "I am over 18 and understand the terms and conditions",
                        "eighteen.6": "Only open to users over 18 years old",
                        "eighteen.7": "Please select your date of birth",
                        "eighteen.8": "Please enter 3-15 characters",
                        "bottomNav.1": "Promotion",
                        "bottomNav.2": "Information",
                        "info.1": "million monthly",
                        "info.2": "About",
                        "about.1": "We have a rich selection of Vegas-style slot games and offer the widest range of games and the most competitive products on the market. All platforms only access and select internationally renowned online gaming platforms to ensure that every player can play in a fair and credible environment. At the same time, the Costa Rica government will also monitor the game platform data to ensure the fairness and authenticity of the game.Have fun playing games at Slots!",
                        "about.2": "About Us",
                        "pops.1": "Congratulations",
                        "pops.2": "Deposit <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount1}</span> and get <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount2}</span>! This opportunity is only available once, don't miss it!",
                        "pops.3": "Play Games",
                        "times.1": "times.1    /*no value*/",
                        "times.2": "times.2    /*no value*/",
                        "times.3": "times.3    /*no value*/",
                        "times.4": "times.4    /*no value*/",
                        "times.5": "times.5    /*no value*/",
                        "times.6": "times.6    /*no value*/",
                        "promote.1": "My invitation",
                        "promote.2": "Today",
                        "promote.3": "All",
                        "promote.4": "Register",
                        "promote.5": "Rewards",
                        "promote.6": "My Rewards",
                        "promote.7": "Received",
                        "promote.8": "Available",
                        "promote.9": "Receive",
                        "promote.10": "Share to your social media",
                        "promote.11": "Share link with your friends",
                        "task.1": "Play",
                        "task.2": "times",
                        "task.3": "Already received",
                        "task.4": "Complete tasks to get rewards",
                        "task.5": "Novice task",
                        "task.6": "Complete the following games and you will receive a cash reward of <span style='color: #fff;font-size: 16rem;'>{amount}</span>",
                        "task.7": "To complete",
                        "task.8": "Completed",
                        "task.9": "Receive {amount}",
                        "task.10": "System tasks",
                        "task.11": "task.11    /*no value*/",
                        "sign.1": "CHECK IN",
                        "sign.2": "Daily bonus",
                        "sign.3": "Complete the game once to get the reward for the day",
                        "sign.4": "Check-in successful",
                        "service.1": "Customer Service",
                        "service.2": "Common problem",
                        "service.3": "How can I withdraw funds?",
                        "service.4": "Dear user, withdrawal is a privilege for premium members. You can upgrade to premium member by recharging any amount and unlock the withdrawal privilege.",
                        "service.5": "Is this platform worth trusting me?",
                        "service.6": "You can rest assured that we are a brand under the Las Vegas Group and provide 1:1 real gold services. We spare no effort to create the most authentic, safe and fair gaming experience for you.",
                        "service.7": "What should I do if there is a problem with my deposit?",
                        "service.8": "First check the payment record and bank account. If the deduction is successful but not received, please contact the platform customer service and provide the transaction voucher so that the customer service can assist in processing.",
                        "service.8.D": "service.8.D    /*no value*/",
                        "service.9": "Why is the game loading slowly or not opening?",
                        "service.10": "Game loading problems may be caused by network latency, device performance, or platform maintenance. It is recommended to check the network connection or report the problem to customer service for help.",
                        "service.11": "What if the withdrawal fails?",
                        "service.12": "If the withdrawal fails, please check whether your withdrawal account is correct or change the withdrawal account and withdraw again.",
                        "service.12.D": "service.12.D    /*no value*/",
                        "deposit.1": "Online Deposit",
                        "deposit.2": "Choose deposit amount",
                        "deposit.3": "After successful payment, the system will add the amount to your account within 1 to 5 minutes.",
                        "deposit.4": "Extra",
                        "withdrawal.1": "Withdrawable amount:",
                        "withdrawal.2": "Withdrawal amount",
                        "withdrawal.3": "Withdrawal in progress",
                        "withdrawal.4": "Account balance",
                        "withdrawal.5": "Reward Conversion Rules:",
                        "withdrawal.6": "1.The rewards that players get from each bet in the slot game will be converted into cash at a ratio of 1:1 and directly deposited into the player's game account.\r\n2.The account balance is the reward that the player gets from the slot game, but the balance cannot be withdrawn directly\r\n3.The withdrawable amount is the amount after the system converts the account balance 1:1, which can be withdrawn in full to your account",
                        "withdrawal.7": "Withdrawal Account",
                        "withdrawal.8": "withdrawal.8    /*no value*/",
                        "history.1": "Amount",
                        "history.2": "Time",
                        "history.3": "State",
                        "history.4": "Withdrawal Record",
                        "history.5": "The withdrawal account is wrong, please check the account information and reinitiate the withdrawal.",
                        "history.5.D": "history.5.D    /*no value*/",
                        "history.6": "No data",
                        "drawcash.1": "Add withdrawal account",
                        "drawcash.2": "Account Name",
                        "drawcash.3": "Please enter the account holder's name",
                        "drawcash.4": "Withdrawal account",
                        "drawcash.5": "Account Number",
                        "drawcash.6": "Please enter account number",
                        "drawcash.7": "Account Number",
                        "drawcash.8": "drawcash.8    /*no value*/",
                        "drawcash.9": "drawcash.9    /*no value*/",
                        "drawcash.10": "Phone number",
                        "drawcash.11": "Please enter your phone number",
                        "drawcash.12": "Format Error",
                        "drawcash.13": "drawcash.13    /*no value*/",
                        "drawcash.14": "drawcash.14    /*no value*/",
                        "prop.tip.1": "Dear user, you have accumulated bonus <span style='font-weight: 600; color: #ffc025'>{amount}</span>. In order to let you get familiar with the withdrawal process as soon as possible, please withdraw the money immediately!",
                        "prop.tip.2": "Dear user:<br/>&nbsp;&nbsp;&nbsp;&nbsp;Only premium members can use the withdrawal function. <br/>&nbsp;&nbsp;&nbsp;&nbsp;Deposit any amount to become a premium member and then use the withdrawal function to withdraw money.",
                        "prop.tip.3": "Order details",
                        "prop.tip.4": "Deposit {amount}, Receive {extra}",
                        "prop.tip.5": "Go to payment",
                        "prop.tip.6": "Dear user, this is the first time you have withdrawn money. For the security of your account balance and familiarity with the system withdrawal process, choose <span style='color:#06d0df;'>{amount}</span> to withdraw money. After the first withdrawal is successful, other withdrawal amounts will be unlocked automatically.",
                        "prop.tip.7": "Dear user, you currently have an unfinished withdrawal request, please go and resolve it.",
                        "prop.tip.7.i": "Dear user, you currently have an unfinished withdrawal request, please go and resolve it.",
                        "prop.tip.7.1": "prop.tip.7.1    /*no value*/",
                        "prop.tip.7.2": "prop.tip.7.2    /*no value*/",
                        "prop.tip.8": "Dear user, your account balance is insufficient. You can try to play to win more money and then withdraw money.",
                        "prop.tip.9": "Dear user: Congratulations on your first successful withdrawal. You have successfully unlocked other withdrawal amounts.",
                        "prop.tip.10": "Dear user, due to your frequent withdrawals last time, a cooldown task was triggered. Please complete the task first before making any withdrawals.",
                        "prop.tip.11": "prop.tip.11    /*no value*/",
                        "prop.tip.12": "prop.tip.12    /*no value*/",
                        "prop.tip.13.E": "Your withdrawal has been sent to the bank for processing and is expected to arrive within 2 minutes, please check.",
                        "prop.tip.14.E": "Go to upgrade",
                        "prop.tip.15.E": "Dear user: \n      According to anti-money laundering regulations, you need to complete the game and meet the turnover requirements before you can withdraw money.",
                        "prop.tip.16.E": "Insufficient withdrawal balance",
                        "prop.tip.17.E": "Dear user:\n     Your number of withdrawals today has reached the maximum limit. Please try to withdraw money after 00:00:00 the next day.\n     Withdrawal rules for your current membership level\n     Number of withdrawals per day: 1 times\n     Each withdrawal limit: ₱20.00\n     You can upgrade your membership level to enjoy more withdrawal rights",
                        "prop.tip.17.F": "Dear user:\n     Your number of withdrawals today has reached the maximum limit. Please try to withdraw after 00:00:00 the next day or update your VIP level. You can withdraw immediately after the update.",
                        "prop.tip.18.E": "Upgrade to",
                        "prop.tip.19.E": "Platinum",
                        "prop.tip.20.E": "Diamond",
                        "prop.tip.21.E": "Withdrawal rights:",
                        "prop.tip.22.E": "1.Maximum single withdrawal: <span style='color: #06D0DF; font-weight: 600'>{amountStr}</span>",
                        "prop.tip.23.E": "2.Number of withdrawals per day: <span style='color: #06D0DF; font-weight: 600'>{count} times</span>",
                        "prop.tip.24.E": "Deposit {amount}",
                        "prop.tip.25.E": "Upgrade requirements: </br>Single deposit <span style='color: #06D0DF; font-weight: 600'>≥{amount}</span>",
                        "prop.tip.26.E": "Dear user:\n     Congratulations, you have unlocked the withdrawal permission. You have currently unlocked the withdrawal amount option {amount}",
                        "prop.tip.27.E": "Dear User:\n     Your membership level only unlocks the withdrawal option of {amount}. Please choose {amount} for withdrawal, or upgrade your membership level to unlock more withdrawal options.",
                        "prop.tip.28.E": "Black Diamond",
                        "prop.tip.29.E": "All",
                        "prop.tip.30.E": "This withdrawal amount has not been unlocked yet",
                        "prop.tip.31.E": "Dear user:\n     The current withdrawal times have been used up. You can upgrade your membership level to unlock more withdrawal benefits.",
                        "prop.tip.32.F": "Dear user:\n     The withdrawal function is an exclusive privilege for VIP members. You can upgrade to VIP member and unlock withdrawal privileges by depositing any amount.",
                        "prop.tip.33.F": "Dear user:\n     Congratulations on upgrading to VIP1 user, you have successfully unlocked the withdrawal privilege!",
                        "prop.tip.33.F.1": "View Withdrawal Rights",
                        "prop.tip.34.F": "Your withdrawal will be processed via the fast remittance channel for small amounts and should arrive within 5 minutes. Please pay attention to changes in your account.",
                        "prop.tip.35.F": "Current level",
                        "prop.tip.36.F": "Single withdrawal limit:",
                        "prop.tip.37.F": "Number of withdrawals per day:",
                        "prop.tip.38.F": "VIP Privileges",
                        "prop.tip.39.F": "The withdrawal operation is too frequent, please try again later.",
                        "prop.tip.40.F": "Dear user:\n     Congratulations on upgrading to a VIP{level} user! You have unlocked exclusive VIP{level} withdrawal privileges",
                        "prop.tip.41.F": "Your withdrawal amount exceeds {amount}. You cannot use the small amount fast channel remittance. The system has assigned you to the normal withdrawal channel...",
                        "order.prop.2.C": "order.prop.2.C    /*no value*/",
                        "order.prop.5.C": "order.prop.5.C    /*no value*/",
                        "order.prop.6.C": "order.prop.6.C    /*no value*/",
                        "order.prop.8.C": "order.prop.8.C    /*no value*/",
                        "order.prop.9.C": "order.prop.9.C    /*no value*/",
                        "order.prop.1.A": "Dear user, this is your first time withdrawing money. The system will give you the opportunity to use the VIP withdrawal channel for free. Withdrawals using the VIP withdrawal channel will be credited within 5 minutes!",
                        "order.prop.2.A": "Select payment channel",
                        "order.prop.3.A": "Congested",
                        "order.prop.4.A": "Unobstructed",
                        "order.prop.5.A": "Normal Payment Channel",
                        "order.prop.6.A": "VIP Payment Channel",
                        "order.prop.7.A": "<span style='color: #FFF;font-size:14rem;'>Number of withdrawals remaining：</span><span style='color: #FFBF48; font-weight: bold; font-size: 15rem;'>{count}</span>",
                        "order.prop.8.A": "The current channel is congested and the estimated time to withdraw is: {time} hours",
                        "order.prop.9.A": "The VIP channel is currently unblocked and the estimated withdrawal time is:5 minutes",
                        "order.prop.10.A": "Dear user, you have the opportunity to use the VIP payment channel for free once. Please choose the VIP payment channel to withdraw money. Use the VIP withdrawal channel and the withdrawal will be credited to your account immediately.",
                        "order.prop.14": "Deposit {amount} now and you can enjoy fast VIP withdrawal channel forever. No need to queue in the future, withdrawal will be received immediately.",
                        "order.prop.15": "Dear users:\n      Now you only need to deposit {amount} to enjoy the VIP fast withdrawal channel forever.There is no need to queue in the future, and the withdrawal will be credited immediately.",
                        "order.prop.16": "order.prop.16    /*no value*/",
                        "order.prop.17": "order.prop.17    /*no value*/",
                        "order.prop.18": "order.prop.18    /*no value*/",
                        "order.prop.19": "order.prop.19    /*no value*/",
                        "order.info.1": "Order Tracking",
                        "order.info.2": "Withdrawal in progress",
                        "order.info.3": "The system has accepted the withdrawal request and is waiting to be processed...",
                        "order.info.3.C.1": "order.info.3.C.1    /*no value*/",
                        "order.info.3.C.2": "order.info.3.C.2    /*no value*/",
                        "order.info.3.A": "Please select payment channel",
                        "order.info.4": "The system has processed the withdrawal request and is waiting to allocate the withdrawal channel...",
                        "order.info.4.C.1": "order.info.4.C.1    /*no value*/",
                        "order.info.4.C.2": "order.info.4.C.2    /*no value*/",
                        "order.info.4.A": "VIP payment channel is processing...",
                        "order.info.5": "The first time a user withdraws money, they can use the VIP payment channel for free once. The VIP payment channel is being allocated...",
                        "order.info.5.A": "Withdrawal request has been sent to the Central Bank...",
                        "order.info.6": "The user's first withdrawal has been assigned to a VIP channel and will be sent to the bank for processing...",
                        "order.info.6.A": "The central bank has received a withdrawal request and is processing it...",
                        "order.info.7": "The user's first withdrawal has been assigned to a VIP channel and will be sent to the bank for processing...",
                        "order.info.7.A": "Estimated time：{timer}s",
                        "order.info.7.D": "VIP payment channels have been assigned and withdrawal requests have been sent to the exchange...",
                        "order.info.8": "The withdrawal request has been forwarded to the Central Bank and the bank is processing it...",
                        "order.info.8.C": "order.info.8.C    /*no value*/",
                        "order.info.8.A": "Choose",
                        "order.info.8.D": "The exchange has accepted the withdrawal request and is processing the withdrawal...",
                        "order.info.9": "Bank withdrawal processed successfully",
                        "order.info.9.A": "The ordinary withdrawal channel has been allocated and is being queued for withdrawal.",
                        "order.info.9.D": "Withdrawal processed successfully",
                        "order.info.9.B": "The general withdrawal channel is queuing to process withdrawal requests, which is expected to take {time} hours.",
                        "order.info.10": "Account error, bank processing failed, the withdrawal amount has been returned to your game account, please withdraw again.",
                        "order.info.10.A": "Check",
                        "order.info.10.D": "order.info.10.D    /*no value*/",
                        "order.info.11": "The free VIP withdrawal channel has been used, the common withdrawal channel has been allocated, and the withdrawal is being queued.",
                        "order.info.11.C": "order.info.11.C    /*no value*/",
                        "order.info.12": "The normal withdrawal channel is queued to process the withdrawal, which should take <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> hours.",
                        "order.info.12.C.1": "order.info.12.C.1    /*no value*/",
                        "order.info.12.C.2": "order.info.12.C.2    /*no value*/",
                        "order.info.13": "The normal withdrawal channel is queued to process the withdrawal, which should take {time} hours.",
                        "order.info.13.C.1": "order.info.13.C.1    /*no value*/",
                        "order.info.13.C.2": "order.info.13.C.2    /*no value*/",
                        "order.info.14": "Number of people in line:",
                        "order.info.15": "Estimated time:",
                        "order.info.16": "Use VIP withdrawal channel",
                        "order.info.16.C.1": "order.info.16.C.1    /*no value*/",
                        "order.info.16.C.2": "order.info.16.C.2    /*no value*/",
                        "order.info.17": "By using the VIP withdrawal channel, you can avoid queuing for this withdrawal, and the withdrawal will be processed immediately.",
                        "order.info.17.C.1": "order.info.17.C.1    /*no value*/",
                        "order.info.17.C.2": "order.info.17.C.2    /*no value*/",
                        "order.info.18": "Dear user, you can enjoy the VIP accelerated withdrawal channel once. Now that you deposit {amount}, the system will open this privilege for you immediately. Use the VIP accelerated withdrawal channel to withdraw money, which is expected to arrive within 5 minutes without waiting in line!",
                        "order.info.19": "The user top-up system provides fast withdrawal VIP channels, and VIP withdrawal channels are being allocated.",
                        "order.info.19.C.1": "order.info.19.C.1    /*no value*/",
                        "order.info.19.C.2": "order.info.19.C.2    /*no value*/",
                        "order.info.20": "The VIP withdrawal channel has been successfully allocated and the withdrawal request is being processed.",
                        "order.info.20.C": "order.info.20.C    /*no value*/",
                        "order.info.21": "The user's cash withdrawal amount exceeds {amount} and exceeds the VIP channel fee-free limit. You'll pay a {ratio}% fee on withdrawals. After receiving the fee, the VIP payment channel sends the remittance request to the central bank for processing.",
                        "order.info.21.C": "order.info.21.C    /*no value*/",
                        "order.info.21.D": "The user withdraws more than {amount}, which exceeds the VIP channel fee-free limit. Withdrawals are subject to a {ratio}% fee.",
                        "order.info.22": "VIP payment channel rules:</br>&nbsp;&nbsp;&nbsp;&nbsp;No commission is required for a single withdrawal amount less than 5,000.00</br>&nbsp;&nbsp;&nbsp;&nbsp;Single withdrawal amount greater than or equal to 5,000.00, a commission is required, 5% of the withdrawal amount</br>&nbsp;&nbsp;&nbsp;&nbsp;This commission is used to maintain the VIP payment channel to ensure that user withdrawals are credited immediately!",
                        "order.info.22.C.T1": "order.info.22.C.T1    /*no value*/",
                        "order.info.22.C.T2": "order.info.22.C.T2    /*no value*/",
                        "order.info.22.C.T3": "order.info.22.C.T3    /*no value*/",
                        "order.info.22.C.T4": "order.info.22.C.T4    /*no value*/",
                        "order.info.22.D": "Dear users:\n        We are committed to providing users with a better withdrawal experience. If the single withdrawal amount exceeds {amount} using the VIP payment channel, the VIP channel will charge {ratio}% of the withdrawal amount as a handling fee.\n       After paying the withdrawal fee, the withdrawal request will be processed immediately",
                        "order.info.23": "Withdrawal commission",
                        "order.info.24": "Pay withdrawal fees",
                        "order.info.25": "Paying Commissions",
                        "order.info.26": "Handling fee <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.27": "Rreceived abnormal feedback from the bank：This withdrawal is considered as extra personal income and we need to pay 10% personal income tax according to national tax laws.",
                        "order.info.27.D": "The withdrawal processing is abnormal. The withdrawal amount is additional personal income. According to the national tax law, a personal income tax of 10% of the withdrawal amount needs to be paid.",
                        "order.info.28": "Dear user:\n      This withdrawal belongs to your additional personal income. According to national tax laws, the bank needs to collect 10% personal income tax. Your current withdrawal progress is 99.9%. It is only the last step before the withdrawal arrives. After paying the tax, the bank will send money now.",
                        "order.info.28.C": "order.info.28.C    /*no value*/",
                        "order.info.28.D": "Dear users:\n      This withdrawal belongs to your personal additional income. According to the national tax law, a 10% personal income tax is required. Your current withdrawal progress is 99.9%.Only one step left to withdraw cash.After the tax payment, the amount will be immediately submitted to the exchange for remittance.",
                        "order.info.29": "Taxes to pay",
                        "order.info.30": "Pay personal tax",
                        "order.info.30.C.T1": "order.info.30.C.T1    /*no value*/",
                        "order.info.31": "Personal income tax <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.32": "The bank has received the tax and the remittance is being processed...",
                        "order.info.32.D": "Withdrawal request has been sent to the exchange for processing...",
                        "order.info.33": "Bank remittance failure:The account number is wrong and needs to be changed.",
                        "order.info.33.D": "Withdrawal failed: Wrong network type",
                        "order.info.34": "The system received a notification from the bank saying that due to an incorrect account number,system remittance failed. Please check your account number carefully.",
                        "order.info.34.D": "order.info.34.D    /*no value*/",
                        "order.info.35": "order.info.35    /*no value*/",
                        "order.info.36": "Confirm change",
                        "order.info.37": "To ensure your withdrawal is normal, please check your account number information carefully.",
                        "order.info.37.D": "order.info.37.D    /*no value*/",
                        "order.info.38": "To check",
                        "order.info.39.A": "Dear user：\n    Due to the error in the account number you submitted this time, your withdrawal application has been temporarily frozen to ensure account security. Please correct the withdrawal account number and make a deposit of {amount} for verification to remove the restriction. After submitting the correct withdrawal account number, the central bank will immediately make the remittance.",
                        "order.info.39.B": "Dear user：\n    Due to the error in the account number you submitted this time, your withdrawal application has been temporarily frozen to ensure account security. Please correct the withdrawal account number and make a deposit of {amount} for verification to remove the restriction. After submitting the correct withdrawal account number, the central bank will immediately make the remittance.",
                        "order.info.39.D": "order.info.39.D    /*no value*/",
                        "order.info.40": "Pay {amount}",
                        "order.info.41": "Change Account",
                        "order.info.41.D": "order.info.41.D    /*no value*/",
                        "order.info.42": "The bank has received a request to correct the account number and is reprocessing the remittance....",
                        "order.info.42.D": "order.info.42.D    /*no value*/",
                        "order.info.43": "order.info.43    /*no value*/",
                        "order.info.44": "order.info.44    /*no value*/",
                        "order.info.45": "order.info.45    /*no value*/",
                        "order.info.46": "order.info.46    /*no value*/",
                        "order.info.47": "Dear user:\n     The system has detected abnormal withdrawal operations in your account, which has triggered account protection and the withdrawal function has been suspended.",
                        "order.info.48": "Go to solve",
                        "order.info.49": "Verify account information",
                        "order.info.50": "In order to verify your account information, please enter your last withdrawal account information below.",
                        "order.info.51": "Submit Verification",
                        "order.info.52": "Lift withdrawal restrictions",
                        "order.info.53": "Dear user: \n     Congratulations, the information you submitted has been verified by the system. Now you only need the last step to restore your withdrawal function. Please upgrade to VIP2 or higher to immediately lift your withdrawal limit. After the withdrawal function is restored, your withdrawal limit will be increased and you can withdraw according to your latest VIP benefits.",
                        "order.info.54": "Account information is inconsistent, please re-enter",
                        "deposit.5": "Order amount",
                        "deposit.6": "Order time",
                        "deposit.7": "Order Number",
                        "deposit.8": "Payment Methods",
                        "deposit.9": "USDT",
                        "deposit.10": "PHP",
                        "deposit.11": "Pay details",
                        "deposit.12": "Actual amount paid",
                        "deposit.13": "Deposit currency",
                        "deposit.14": "Select Network",
                        "deposit.15": "Deposit Address",
                        "deposit.16": "Copy Address",
                        "deposit.17": "Please make sure to complete the payment according to the actual payment amount. If the amount does not match, it will not be credited to the account.",
                        "deposit.18": "Exchange rate",
                        "deposit.19": "Under maintenance",
                        "deposit.20": "The fiat currency deposit method is under maintenance. You can enjoy a XXX discount if you use USDT to pay now!",
                        "deposit.21": "Withdrawal Details",
                        "deposit.22": "Actual amount received",
                        "deposit.23": "Please enter or paste the address",
                        "deposit.24": "Please carefully check the network and address information. Any loss of funds due to an incorrect address will be borne by you.",
                        "deposit.25": "Please check the withdrawal account information carefully. Any financial loss caused by account errors will be borne by you.",
                        "deposit.26": "The fiat currency withdrawal function is under maintenance and is temporarily unavailable. Please use USDT to withdraw",
                        "deposit.27": "Withdrawal Methods",
                        "deposit.28": "Withdrawal Currency",
                        "deposit.29": "Withdrawal Address",
                        "deposit.30": "Network",
                        "deposit.31": "deposit.31    /*no value*/",
                        "deposit.32": "deposit.32    /*no value*/"
                    },
                    va = {
                        "banner.1": "invite_ph.png",
                        "banner.2": "newPlayer_ph.png",
                        "banner.3": "check-inph.png",
                        "banner.4": "dailyph.png",
                        "promote.img.1": "banner-inviteph.png",
                        "eventItem-Img.1": "banner-newplayph.png",
                        "eventItem-Img.2": "banner-checkph.png",
                        "eventItem-Img.3": "banner-dailyph.png",
                        "eventItem-Img2.1": "R$ph.png",
                        "withdraw-Img.1": "goldph.png",
                        "service.img.1": "serviceph.png",
                        "popupDial.1": "turntableph.png",
                        "popupDial.2": "turntable_arrowph.png",
                        "popupDial.3": "turntable_moneyph.png",
                        "popupDial.4": "turntable_titleph.png",
                        "popupBag.1": "step_title_1_ph.png",
                        "popupBag.2": "step_msg_1_ph.png",
                        "popupBag.3": "step_button_ph.png"
                    },
                    Aa = { ...ya,
                        ...va
                    },
                    ba = {
                        "common.1": "Depósito",
                        "common.2": "Retirar",
                        "common.3": "Confirmar",
                        "common.4": "Consejos",
                        "common.5": "Detalles",
                        "common.6": "Copiado con éxito",
                        "common.7": "Idioma",
                        "common.8": "Bienvenido a las tragamonedas",
                        "common.9": "Copiar",
                        "common.10": "Cancelar",
                        "common.11": "Apodo",
                        "common.12": "Ir a depositar",
                        "common.13": "minutos",
                        "common.14": "segundos",
                        "common.15": "Error de red, inténtelo de nuevo más tarde",
                        "home.1": "Casino",
                        "home.2": "Actividad",
                        "home.3": "Bônus",
                        "home.4": "Invitar",
                        "home.5": "Juego",
                        "home.6": "Maquina de casino ",
                        "home.7": "Pesquería",
                        "home.8": "Apoyo",
                        "home.9": "     Bienvenido a Slots, Group es uno de los operadores de juegos de azar en línea más reconocidos del mundo, que ofrece una variedad de juegos emocionantes como máquinas tragamonedas, pesca, loterías y más.Nos aseguramos de que todos los jugadores puedan jugar en un entorno justo y confiable y estamos comprometidos a brindarles a los jugadores la mejor experiencia de juego.  \n     Esta plataforma solo está disponible para usuarios mayores de 18 años. Esta plataforma no asume ninguna responsabilidad legal derivada del uso de juegos en esta plataforma por parte de menores.",
                        "about.1": "Contamos con una extensa colección de tragamonedas estilo Vegas y ofrecemos la gama más amplia de juegos y productos más competitivos del mercado. Todas las plataformas solo acceden y seleccionan plataformas de juegos en línea de renombre internacional para garantizar que cada jugador pueda jugar en un entorno justo y confiable. Al mismo tiempo, el gobierno de Costa Rica también monitoreará los datos de la plataforma de juegos para garantizar la equidad y autenticidad del juego. ¡Disfruta jugando en Slots!",
                        "about.2": "Sobre nosotros",
                        "bottomNav.1": "Promoción",
                        "bottomNav.2": "Perfil",
                        "info.1": "millón mensual",
                        "info.2": "Sobre",
                        "pops.1": "Felicidades",
                        "pops.2": "¡Deposita <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount1}</span> y obtén <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount2}</span>! ¡Esta oportunidad sólo se presenta una vez, no la pierdas!",
                        "pops.3": "Jugar juegos",
                        "times.1": "times.1    /*no value*/",
                        "times.2": "times.2    /*no value*/",
                        "times.3": "times.3    /*no value*/",
                        "times.4": "times.4    /*no value*/",
                        "times.5": "times.5    /*no value*/",
                        "times.6": "times.6    /*no value*/",
                        "promote.1": "Mi invitación",
                        "promote.2": "Hoy",
                        "promote.3": "Todo",
                        "promote.4": "Registro",
                        "promote.5": "Premio",
                        "promote.6": "Mi recompensa",
                        "promote.7": "Recibió",
                        "promote.8": "Disponible",
                        "promote.9": "Recibir",
                        "promote.10": "Comparte en tus redes sociales",
                        "promote.11": "Comparte enlace con tus amigos.",
                        "task.1": "Juega",
                        "task.2": "veces",
                        "task.3": "Ya recibido",
                        "task.4": "Completa tareas para obtener recompensas.",
                        "task.5": "Nuevas tareas de usuario",
                        "task.6": "Completa los siguientes juegos y recibirás una recompensa en efectivo de <span style='color: #fff;font-size: 16rem;'>{amount}</span>",
                        "task.7": "Completar",
                        "task.8": "Terminado",
                        "task.9": "Recibir {amount}",
                        "task.10": "Tareas del sistema",
                        "task.11": "Estimados usuarios:\n     De acuerdo con las reglas contra el lavado de dinero, después de completar la recarga, debes completar {taskNum} juegos antes de poder retirar.",
                        "sign.1": "CHECK IN",
                        "sign.2": "Bonus diario",
                        "sign.3": "Completa el juego una vez para obtener la recompensa del día.",
                        "sign.4": "Check-in exitoso",
                        "service.1": "Servicio al Cliente",
                        "service.2": "Problema comun",
                        "service.3": "¿Cómo puedo retirar dinero?",
                        "service.4": "Estimados usuarios, los retiros son privilegio de los miembros premium. Puede actualizar a miembro premium recargando cualquier cantidad y desbloquear derechos de retiro.",
                        "service.5": "¿Es esta plataforma digna de mi confianza?",
                        "service.6": "Puede estar seguro de que somos una marca del Grupo Las Vegas y brindamos servicios de oro real 1:1. No escatimamos esfuerzos para crear la experiencia de juego más realista, segura y justa para usted.",
                        "service.7": "¿Qué debo hacer si hay un problema con mi depósito?",
                        "service.8": "Primero verifique el registro de pago y la cuenta bancaria. Si la deducción se realizó correctamente pero no se recibió, comuníquese con el servicio al cliente de la plataforma y proporcione el comprobante de la transacción para que el servicio al cliente pueda ayudarlo en el procesamiento.",
                        "service.8.D": "service.8.D    /*no value*/",
                        "service.9": "¿Por qué el juego se carga lentamente o no se abre?",
                        "service.10": "Los problemas de carga del juego pueden deberse a la latencia de la red, el rendimiento del dispositivo o el mantenimiento de la plataforma. Se recomienda verificar la conexión de red o informar el problema al servicio de atención al cliente para obtener ayuda.",
                        "service.11": "¿Qué pasa si el retiro falla?",
                        "service.12": "Si el retiro falla, verifique si su cuenta de retiro es correcta o cambie la cuenta de retiro y retire dinero nuevamente.",
                        "service.12.D": "service.12.D    /*no value*/",
                        "deposit.1": "Depositar en línea",
                        "deposit.2": "Seleccionar monto del depósito",
                        "deposit.3": "Después de un pago exitoso, el sistema agregará el monto a su cuenta dentro de 1 a 5 minutos.",
                        "deposit.4": "Extra",
                        "withdrawal.1": "Monto que se puede retirar:",
                        "withdrawal.2": "Monto del retiro",
                        "withdrawal.3": "Retiro en curso",
                        "withdrawal.4": "Saldo de cuenta",
                        "withdrawal.5": "Reglas de conversión de recompensas：",
                        "withdrawal.6": "1. Las recompensas que los jugadores obtienen de cada apuesta en el juego de tragamonedas se convertirán en efectivo en una proporción de 1:1 y se depositarán directamente en la cuenta de juego del jugador.\n2. El saldo de la cuenta es la recompensa que el jugador obtiene del juego de tragamonedas, pero el saldo no se puede retirar directamente.\n3. El monto retirable es el monto después de que el sistema convierte el saldo de la cuenta en una proporción de 1:1, que se puede retirar en su totalidad a su cuenta.",
                        "withdrawal.7": "Cuenta de retirada",
                        "withdrawal.8": "Estimado usuario:\n     El monto de retiro que ha seleccionado no cuenta actualmente con un canal de remesas disponible. Por favor, elija otro monto o inténtelo más tarde.",
                        "history.1": "Cantidad",
                        "history.2": "Tiempo",
                        "history.3": "Estado",
                        "history.4": "Historial de retiros",
                        "history.5": "La cuenta de retiro es incorrecta, verifique la información de la cuenta y comience el retiro nuevamente.",
                        "history.5.D": "history.5.D    /*no value*/",
                        "history.6": "Sin datos",
                        "drawcash.1": "Vincular cuenta de retirada",
                        "drawcash.2": "Nombre",
                        "drawcash.3": "Por favor ingresa tu nombre",
                        "drawcash.4": "Nombre del banco",
                        "drawcash.5": "Numero de cuenta",
                        "drawcash.6": "Por favor ingrese el número de tarjeta bancaria",
                        "drawcash.7": "Numero de cuenta",
                        "drawcash.8": "drawcash.8    /*no value*/",
                        "drawcash.9": "Ingrese 16 digitos de tarjeta o 18 digitos de Clabe",
                        "drawcash.10": "número telefónico",
                        "drawcash.11": "Por favor ingrese su número de teléfono",
                        "drawcash.12": "Error de formato",
                        "drawcash.13": "drawcash.13    /*no value*/",
                        "drawcash.14": "drawcash.14    /*no value*/",
                        "drawcash.15": "drawcash.15    /*no value*/",
                        "drawcash.16": "drawcash.16    /*no value*/",
                        "prop.tip.1": "Estimado usuario, ha acumulado el bono <span style='font-weight: 600; color: #ffc025'>{amount}</span>. Para poder familiarizarse con el proceso de retiro lo antes posible, ¡retírelo inmediatamente!",
                        "prop.tip.2": "Estimado usuario:<br/>&nbsp;&nbsp;&nbsp;&nbsp;La función de retiro es un privilegio para los miembros premium.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Recargue cualquier cantidad para convertirse en miembro senior, desbloquear derechos de retiro y luego retirar dinero.",
                        "prop.tip.3": "Detalles del pedido",
                        "prop.tip.4": "Deposita {amount}, recibe {extra}",
                        "prop.tip.5": "Ir a pagar",
                        "prop.tip.6": "Estimado usuario, esta es la primera vez que retira dinero. Para la seguridad del saldo de su cuenta y para familiarizarse con el proceso de retiro del sistema, elija <span style='color:#06d0df;'>{amount}</span> para retirar. Después de que el primer retiro sea exitoso, otros montos de retiro se desbloquearán automáticamente.",
                        "prop.tip.7": "prop.tip.7    /*no value*/",
                        "prop.tip.7.1": "prop.tip.7.1    /*no value*/",
                        "prop.tip.7.2": "prop.tip.7.2    /*no value*/",
                        "prop.tip.7.i": "Estimado usuario, actualmente tiene una solicitud de retiro sin terminar, vaya y resuélvala.",
                        "prop.tip.8": "Estimado usuario, el saldo de su cuenta es insuficiente, puede intentar jugar juegos para ganar más dinero y luego retirar dinero.",
                        "prop.tip.9": "Estimado usuario: Felicitaciones por su primer retiro exitoso,Ha desbloqueado con éxito otros montos de retiro.",
                        "prop.tip.10": "Estimado usuario, debido a sus frecuentes retiros la última vez, se activó la tarea de enfriamiento. Primero complete la tarea antes de realizar un retiro.",
                        "prop.tip.11": "prop.tip.11    /*no value*/",
                        "prop.tip.12": "Pague de acuerdo con el monto del pedido. Si el monto del pedido no coincide con el monto del pago real, ¡el depósito no será reembolsado!",
                        "eighteen.1": "Configura tu cuenta",
                        "eighteen.2": "Nombre de usuario",
                        "eighteen.3": "Por favor, introduzca su nombre de usuario",
                        "eighteen.4": "Fecha de nacimiento",
                        "eighteen.5": "Soy mayor de 18 años y entiendo los términos y condiciones.",
                        "eighteen.6": "Abierto sólo a usuarios mayores de 18 años.",
                        "eighteen.7": "Por favor seleccione su fecha de nacimiento",
                        "eighteen.8": "Por favor, introduzca entre 3 y 15 caracteres.",
                        "order.info.1": "Rastreo de orden",
                        "order.info.2": "Retiro en curso",
                        "order.info.3": "El sistema aceptó la solicitud de retiro y está esperando ser procesado...",
                        "order.info.4": "El sistema ha procesado la solicitud de retiro y está esperando que se asigne el canal de retiro...",
                        "order.info.5": "La primera vez que un usuario retira dinero, puede utilizar el canal de pago VIP de forma gratuita una vez. El canal de pago VIP se está asignando...",
                        "order.info.6": "El primer retiro del usuario ha sido asignado a un canal VIP y se enviará al banco para su procesamiento...",
                        "order.info.7": "El primer retiro del usuario ha sido asignado a un canal VIP y se enviará al banco para su procesamiento...",
                        "order.info.8": "La solicitud de retiro ha sido enviada al Banco Central y el banco la está procesando.",
                        "order.info.9": "Retiro bancario procesado exitosamente",
                        "order.info.9.B": "El canal de retiro normal está en cola para procesar el retiro, lo que debería tomar {time} horas.",
                        "order.info.10": "Error de cuenta, falla en el procesamiento bancario, el monto del retiro fue devuelto a su cuenta del juego, retire nuevamente.",
                        "order.info.11": "Se utilizó el canal de retiro VIP gratuito, se asignó el canal de retiro general y los retiros están en cola.",
                        "order.info.12": "El canal de retiro normal está en cola para procesar el retiro, lo que debería tomar <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> horas.",
                        "order.info.13": "El canal de retiro normal está haciendo cola para procesar el retiro, lo que debería tomar {time} horas.",
                        "order.info.14": "Número de personas haciendo cola:",
                        "order.info.15": "Hora prevista:",
                        "order.info.16": "Usar canal de retiro VIP",
                        "order.info.17": "Al utilizar el canal de retiro VIP, puede evitar hacer cola para este retiro y el retiro se procesará de inmediato.",
                        "order.info.18": "Estimado usuario, tiene la oportunidad de disfrutar del canal de retiro rápido VIP de forma gratuita una vez,Deposite {amount} ahora,el sistema le proporcionará canales VIP de retiro rápido de forma gratuita,utilice el canal de retiro rápido VIP,los retiros llegan dentro de 5 minutos.",
                        "order.info.19": "El sistema de recarga de usuarios proporciona canales VIP de retiro rápido y se están asignando canales de retiro VIP.",
                        "order.info.20": "El canal de retiro VIP se ha asignado correctamente y la solicitud de retiro se está procesando.",
                        "order.info.21": "El monto de retiro del usuario supera los {amount}, lo que supera el límite gratuito del canal VIP. Los retiros están sujetos a una tarifa del {ratio}%. Después de recibir la tarifa, el canal de pago VIP envía la solicitud de remesa al banco central para su procesamiento.",
                        "order.info.22": "Estimados usuarios: Estamos comprometidos a brindarles a los usuarios una mejor experiencia de retiro. Si el monto del retiro único utilizando el canal de pago VIP excede {amount}, el canal VIP cobrará el {ratio}% del monto del retiro como tarifa de gestión. Esta tarifa de retiro se utiliza para mantener el sistema de pago.",
                        "order.info.23": "Comisiones de retiro",
                        "order.info.24": "Pagar tarifas de retiro",
                        "order.info.25": "Pagar comisión",
                        "order.info.26": "Tarifa de manejo <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.27": "Procesamiento bancario anormal: este monto de retiro es un ingreso personal adicional. Según las regulaciones federales, se requiere un impuesto sobre la renta personal del 10% del monto del retiro.",
                        "order.info.28": "Estimado usuario:\n     Este retiro pertenece a sus ingresos personales adicionales. Según las regulaciones federales, el banco debe recaudar el {radio}% del impuesto sobre la renta personal. El progreso de su retiro actual es del 99.9% y solo queda el último paso antes de que llegue el retiro. Una vez pagado el impuesto, el banco procesará la transferencia de inmediato",
                        "order.info.29": "Impuestos a pagar",
                        "order.info.30": "Pagar impuesto personal",
                        "order.info.31": "Impuesto sobre la renta personal <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.32": "El banco ha recibido el impuesto y está procesando la remesa...",
                        "order.info.33": "Fallo de remesas bancarias: el número de la tarjeta bancaria es incorrecto y es necesario modificar el número de la tarjeta bancaria.",
                        "order.info.34": "El sistema recibió una notificación del banco indicando que la remesa del sistema falló debido a un número de tarjeta bancaria incorrecto. Verifique nuevamente el número de su tarjeta bancaria",
                        "order.info.35": "order.info.35    /*no value*/",
                        "order.info.36": "Confirmar cambio",
                        "order.info.37": "Para asegurarse de que su retiro sea normal, verifique cuidadosamente el número de su tarjeta bancaria.",
                        "order.info.38": "Ir a revisar",
                        "order.info.39.B": "Estimado usuario:\n    Debido a un error en el número de tarjeta bancaria que envió esta vez, su solicitud de retiro se ha congelado temporalmente para garantizar la seguridad de su cuenta. Después de corregir el número de tarjeta bancaria, realice un depósito de {amount} para verificación y eliminar la restricción. Después de enviar el número de tarjeta bancaria correcto, el banco central realizará inmediatamente la remesa.",
                        "order.info.40": "Paga {amount}",
                        "order.info.41": "Cambiar número de cuenta",
                        "order.info.42": "El banco ha recibido una solicitud para corregir el número de la tarjeta bancaria y está reprocesando la remesa....",
                        "order.prop.1.A": "Estimado usuario, esta es la primera vez que retira dinero. El sistema le dará la oportunidad de utilizar el canal de retiro VIP de forma gratuita. ¡Los retiros utilizando el canal de retiro VIP se acreditarán en 5 minutos!",
                        "order.prop.2.A": "Seleccionar canal de pago",
                        "order.prop.3.A": "Congestionado",
                        "order.prop.4.A": "Sin esperas",
                        "order.prop.5.A": "Canal de pago normal",
                        "order.prop.6.A": "Canal de pago VIP",
                        "order.prop.7.A": "<span style='color: #FFF;font-size:14rem;'>Número de retiros restantes:</span><span style='color: #FFBF48; font-weight: bold; font-size: 15rem;'>{count}</span>",
                        "order.prop.8.A": "El canal actual está congestionado y el tiempo estimado de retiro es: {time} horas",
                        "order.prop.9.A": "El canal VIP actualmente no está obstruido y el tiempo estimado de retiro es: 5 minutos",
                        "order.prop.10.A": "Estimado usuario, tiene la oportunidad de utilizar el canal de pago VIP de forma gratuita una vez. Elija el canal de pago VIP para retirar dinero. Utilice el canal de retiro VIP y el retiro se acreditará de inmediato.",
                        "order.prop.14": "Consejo: El canal de retiro ordinario actual está bastante congestionado. Se recomienda utilizar el canal de retiro VIP. Se espera que los retiros mediante el canal de retiro VIP lleguen dentro de los 5 minutos.",
                        "order.prop.15": "No le quedan accesos VIP restantes y no puede utilizar el canal de retiro VIP.Deposite {amount} ahora, el sistema le otorgará derechos de acceso VIP permanentes y cada retiro utilizará automáticamente el canal de retiro VIP sin espera.",
                        "order.prop.15.N": "Deposite {amount} ahora y el sistema le permitirá usar el canal VIP de retiro permanentemente, evitando filas y con prioridad para retiros. El tiempo estimado de llegada es de 5 minutos.",
                        "order.info.3.A": "Por favor seleccione el canal de pago",
                        "order.info.4.A": "El canal de pago VIP está siendo procesado...",
                        "order.info.5.A": "Se ha enviado una solicitud de retiro al Banco Central...",
                        "order.info.6.A": "La solicitud de retiro fue recibida por el Banco Central y está siendo procesada...",
                        "order.info.7.A": "Tiempo estimado: {timer}s",
                        "order.info.8.A": "Elección",
                        "order.info.9.A": "El canal de retiro ordinario ha sido asignado y está en cola para retiro.",
                        "order.info.10.A": "Controlar",
                        "order.info.22.A": "Si el monto de un retiro único supera los {amount} utilizando el canal de pago VIP, se aplicará una comisión de gestión del {ratio}%. Tras el pago, el retiro se enviará inmediatamente al banco central para su remesa.",
                        "order.info.27.A": "Procesamiento bancario anormal: este monto de retiro es un ingreso personal adicional. Según las regulaciones federales, se requiere un impuesto sobre la renta personal del {radio}% del monto del retiro.",
                        "order.info.28.A": "Estimado usuario:\n     Este retiro pertenece a sus ingresos personales adicionales. Según las regulaciones federales, el banco debe recaudar el {radio}% del impuesto sobre la renta personal. El progreso de su retiro actual es del 99.9% y solo queda el último paso antes de que llegue el retiro. Una vez pagado el impuesto, el banco procesará la transferencia de inmediato",
                        "order.info.39.A": "Estimado usuario:\n    Debido a un error en el número de tarjeta bancaria que envió esta vez, su solicitud de retiro se ha congelado temporalmente para garantizar la seguridad de su cuenta. Después de corregir el número de tarjeta bancaria, realice un depósito de {amount} para verificación y eliminar la restricción. Después de enviar el número de tarjeta bancaria correcto, el banco central realizará inmediatamente la remesa.",
                        "prop.tip.2.C": "prop.tip.2.C    /*no value*/",
                        "order.prop.2.C": "order.prop.2.C    /*no value*/",
                        "order.prop.5.C": "order.prop.5.C    /*no value*/",
                        "order.prop.6.C": "order.prop.6.C    /*no value*/",
                        "order.prop.8.C": "order.prop.8.C    /*no value*/",
                        "order.prop.9.C": "order.prop.9.C    /*no value*/",
                        "order.prop.16": "order.prop.16    /*no value*/",
                        "order.prop.17": "order.prop.17    /*no value*/",
                        "order.prop.18": "order.prop.18    /*no value*/",
                        "order.prop.19": "order.prop.19    /*no value*/",
                        "order.info.3.C.1": "order.info.3.C.1    /*no value*/",
                        "order.info.3.C.2": "order.info.3.C.2    /*no value*/",
                        "order.info.4.C.1": "order.info.4.C.1    /*no value*/",
                        "order.info.4.C.2": "order.info.4.C.2    /*no value*/",
                        "order.info.8.C": "order.info.8.C    /*no value*/",
                        "order.info.11.C": "order.info.11.C    /*no value*/",
                        "order.info.12.C.1": "order.info.12.C.1    /*no value*/",
                        "order.info.12.C.2": "order.info.12.C.2    /*no value*/",
                        "order.info.13.C.1": "order.info.13.C.1    /*no value*/",
                        "order.info.13.C.2": "order.info.13.C.2    /*no value*/",
                        "order.info.16.C.1": "order.info.16.C.1    /*no value*/",
                        "order.info.16.C.2": "order.info.16.C.2    /*no value*/",
                        "order.info.17.C.1": "order.info.17.C.1    /*no value*/",
                        "order.info.17.C.2": "order.info.17.C.2    /*no value*/",
                        "order.info.19.C.1": "order.info.19.C.1    /*no value*/",
                        "order.info.19.C.2": "order.info.19.C.2    /*no value*/",
                        "order.info.20.C": "order.info.20.C    /*no value*/",
                        "order.info.21.C": "order.info.21.C    /*no value*/",
                        "order.info.22.C.T1": "order.info.22.C.T1    /*no value*/",
                        "order.info.22.C.T2": "order.info.22.C.T2    /*no value*/",
                        "order.info.22.C.T3": "order.info.22.C.T3    /*no value*/",
                        "order.info.22.C.T4": "order.info.22.C.T4    /*no value*/",
                        "order.info.28.C": "order.info.28.C    /*no value*/",
                        "order.info.30.C.T1": "order.info.30.C.T1    /*no value*/",
                        "order.info.43": "order.info.43    /*no value*/",
                        "order.info.44": "order.info.44    /*no value*/",
                        "order.info.45": "order.info.45    /*no value*/",
                        "order.info.46": "order.info.46    /*no value*/",
                        "prop.tip.32.F": "Estimado usuario:\n      La función de retiro es un privilegio exclusivo para miembros VIP. Puede actualizar a membresía VIP y desbloquear privilegios de retiro depositando cualquier cantidad.",
                        "prop.tip.33.F": "Estimados usuarios:\n     Felicitaciones por actualizar a usuario VIP1. ¡Desbloqueaste exitosamente el privilegio de retiro!",
                        "prop.tip.33.F.1": "Ver derechos de retiro",
                        "prop.tip.34.F": "Su retiro se procesará a través del canal de remesas rápidas para montos pequeños y debería llegar dentro de 5 minutos. Por favor, preste atención a los cambios en su cuenta.",
                        "prop.tip.35.F": "Nivel actual",
                        "prop.tip.36.F": "Límite de retiro único:",
                        "prop.tip.37.F": "Número de retiros por día:",
                        "prop.tip.38.F": "Privilegios VIP",
                        "prop.tip.39.F": "La operación de retiro es demasiado frecuente, inténtelo nuevamente más tarde.",
                        "prop.tip.40.F": "Estimado usuario:\n     ¡Felicitaciones por actualizar a usuario VIP{level}! Ha desbloqueado privilegios exclusivos de retiro de VIP{level}",
                        "prop.tip.41.F": "El monto de su retiro supera los {amount} y no puede utilizar el canal de remesa rápida de pequeñas cantidades. El sistema lo ha asignado al canal de retiro normal...",
                        "order.info.47": "order.info.47    /*no value*/",
                        "order.info.48": "order.info.48    /*no value*/",
                        "order.info.49": "order.info.49    /*no value*/",
                        "order.info.50": "order.info.50    /*no value*/",
                        "order.info.51": "order.info.51    /*no value*/",
                        "order.info.52": "order.info.52    /*no value*/",
                        "order.info.53": "order.info.53    /*no value*/",
                        "order.info.54": "order.info.54    /*no value*/",
                        "order.info.7.D": "Se han asignado canales de pago VIP y se han enviado solicitudes de retiro al intercambio...",
                        "order.info.8.D": "El intercambio ha aceptado la solicitud de retiro y está procesando el retiro...",
                        "order.info.9.D": "Retiro procesado exitosamente",
                        "order.info.10.D": "order.info.10.D    /*no value*/",
                        "order.info.21.D": "El monto de retiro del usuario supera los {amount}, lo que supera el límite gratuito del canal VIP. Los retiros están sujetos a una tarifa del {ratio}%.",
                        "order.info.22.D": "Estimado usuario:\n      Nos comprometemos a brindar a los usuarios una mejor experiencia de retiro de efectivo. Si el monto del retiro único excede {amount} usando el canal de pago VIP, el canal VIP cobrará el {ratio}% del monto del retiro como tarifa de manejo.\n      Después de pagar la tarifa de retiro, la solicitud de retiro se procesará de inmediato.",
                        "order.info.27.D": "El procesamiento del retiro es anormal. El monto del retiro es un ingreso personal adicional. Según las regulaciones federales, se requiere un impuesto sobre la renta personal del {radio}% del monto del retiro.",
                        "order.info.28.D": "Estimado usuario:\r\n     Este retiro pertenece a sus ingresos personales adicionales. Según las regulaciones federales, se requiere un impuesto sobre la renta personal del 10%.Your current withdrawal progress is 99.9%.Only one step left to withdraw cash.Luego del pago del impuesto, el monto será enviado inmediatamente a la bolsa para su remesa.",
                        "order.info.32.D": "La solicitud de retiro se ha enviado al intercambio para su procesamiento...",
                        "order.info.33.D": "Falló el retiro: tipo de red incorrecto",
                        "order.info.34.D": "order.info.34.D    /*no value*/",
                        "order.info.37.D": "order.info.37.D    /*no value*/",
                        "order.info.39.D": "order.info.39.D    /*no value*/",
                        "order.info.41.D": "order.info.41.D    /*no value*/",
                        "order.info.42.D": "order.info.42.D    /*no value*/",
                        "deposit.5": "Monto del pedido",
                        "deposit.6": "Tiempo de pedido",
                        "deposit.7": "Número de orden",
                        "deposit.8": "Método de pago",
                        "deposit.9": "USDT",
                        "deposit.10": "MXN",
                        "deposit.11": "Detalles de pago",
                        "deposit.12": "Monto real pagado",
                        "deposit.13": "Moneda de depósito",
                        "deposit.14": "Seleccionar red",
                        "deposit.15": "Dirección de depósito",
                        "deposit.16": "Copiar dirección",
                        "deposit.17": "Asegúrese de completar el pago de acuerdo con el monto real del pago. Si el monto no coincide, no se acreditará en la cuenta.",
                        "deposit.18": "Tipo de cambio",
                        "deposit.19": "En mantenimiento",
                        "deposit.20": "El método de depósito en moneda legal se encuentra en mantenimiento. ¡Ahora puedes disfrutar de un XXX de descuento al pagar con USDT!",
                        "deposit.21": "Detalles de retirada",
                        "deposit.22": "Cantidad real recibida",
                        "deposit.23": "Por favor ingrese o pegue la dirección",
                        "deposit.24": "Verifique cuidadosamente la información de la red y la dirección. Cualquier pérdida financiera causada por direcciones incorrectas es su exclusiva responsabilidad.",
                        "deposit.25": "deposit.25    /*no value*/",
                        "deposit.26": "La función de retiro de moneda fiduciaria está en mantenimiento y no está disponible temporalmente. Por favor use moneda USDT para retirar fondos",
                        "deposit.27": "Método de retiro",
                        "deposit.28": "Moneda de retiro",
                        "deposit.29": "Dirección de retirada",
                        "deposit.30": "Red",
                        "deposit.31": "deposit.31    /*no value*/",
                        "deposit.32": "deposit.32    /*no value*/",
                        "prop.tip.13.E": "Su retiro se envió al banco para su procesamiento y se espera que llegue dentro de 2 minutos, verifique.",
                        "prop.tip.14.E": "Ir a actualizar",
                        "prop.tip.15.E": "Estimado usuario:\n     Debido a las regulaciones contra el lavado de dinero, debes completar el juego y cumplir con los requisitos de reinversión antes de poder retirar dinero.",
                        "prop.tip.16.E": "Saldo insuficiente disponible para retiro",
                        "prop.tip.17.E": "Estimado usuario:\n      Su número de retiros hoy ha alcanzado el límite máximo. Intente retirar dinero después de las 00:00:00 del día siguiente.\n      Reglas de retiro para su nivel de membresía actual\n      Número de retiros por día: 1 veces\n      Límite de cada retiro: $2.00\n      Puede actualizar su nivel de membresía para disfrutar de más derechos de retiro",
                        "prop.tip.17.F": "Estimados usuarios:\n     Tus tiempos de retiro han alcanzado el límite máximo hoy. Intente retirar dinero después de las 00:00:00 del día siguiente o actualice su nivel VIP. Puede retirar dinero inmediatamente después de la actualización.",
                        "prop.tip.18.E": "Actualízate a",
                        "prop.tip.19.E": "Platino",
                        "prop.tip.20.E": "Diamante",
                        "prop.tip.21.E": "Derechos de retiro:",
                        "prop.tip.22.E": "<span style='color: #879E41;'>1.Retiro máximo único:</span> {amountStr}",
                        "prop.tip.23.E": "<span style='color: #879E41;'>2.Número de retiros por día:</span> {count} veces",
                        "prop.tip.24.E": "Deposito {amount}",
                        "prop.tip.25.E": "Requisitos de actualización: Depósito único≥{amount}",
                        "prop.tip.26.E": "Estimado usuario:\n     Felicitaciones, ha desbloqueado el permiso de retiro. Actualmente has desbloqueado la opción de monto de retiro de {amount} .",
                        "prop.tip.27.E": "Estimado usuario:\n     Su nivel de membresía solo desbloquea la opción de retiro de {amount}. Seleccione {amount} para retirar o actualice su nivel de membresía para desbloquear más opciones de retiro.",
                        "prop.tip.28.E": "Diamante negro",
                        "prop.tip.29.E": "Todo",
                        "prop.tip.30.E": "Este monto de retiro aún no se ha desbloqueado",
                        "prop.tip.31.E": "Estimado usuario:\n     El número actual de retiros se ha agotado. Puede actualizar su nivel de membresía para desbloquear más derechos de retiro."
                    },
                    Ca = {
                        "banner.1": "invite_mx.png",
                        "banner.2": "newPlayer_mx.png",
                        "banner.3": "check-inmx.png",
                        "banner.4": "dailymx.png",
                        "promote.img.1": "banner-invitemx.png",
                        "eventItem-Img.1": "banner-newplaymx.png",
                        "eventItem-Img.2": "banner-checkmx.png",
                        "eventItem-Img.3": "banner-dailymx.png",
                        "eventItem-Img2.1": "R$mx.png",
                        "withdraw-Img.1": "goldmx.png",
                        "service.img.1": "servicemx.png",
                        "popupDial.1": "turntablemx.png",
                        "popupDial.2": "turntable_arrowmx.png",
                        "popupDial.3": "turntable_moneymx.png",
                        "popupDial.4": "turntable_titlemx.png",
                        "popupBag.1": "step_title_1_es.png",
                        "popupBag.2": "step_msg_1_es.png",
                        "popupBag.3": "step_button_es.png"
                    },
                    ka = { ...ba,
                        ...Ca
                    },
                    Ia = {
                        "common.1": "Deposit",
                        "common.2": "Withdrawals",
                        "common.3": "Confirm",
                        "common.4": "TIPS",
                        "common.5": "Details",
                        "common.6": "Copy successful",
                        "common.7": "Language",
                        "common.8": "Welcome to Slots",
                        "common.9": "Copy",
                        "common.10": "Cancel",
                        "common.11": "Nickname",
                        "common.12": "Go Deposit",
                        "home.1": "Casino",
                        "home.2": "Activity",
                        "home.3": "Bonus",
                        "home.4": "Invite",
                        "home.5": "Games",
                        "home.6": "Slot machine",
                        "home.7": "Fishery",
                        "home.8": "Support",
                        "home.9": "    Welcome to Slots,Group is one of the world's most renowned online gambling operators, offering a variety of exciting games such as slot machines, fishing, lotteries and more..The Group has passed all compliance checks and has the legal authorization to conduct all gaming operations involving wagering.We ensure that every player can play in a fair and trustworthy environment and are committed to providing players with the best gaming experience.This platform is restricted to users aged 18 and above. This platform does not assume any legal liability arising from minors using games on this platform.",
                        "bottomNav.1": "Promotion",
                        "bottomNav.2": "Information",
                        "info.1": "million monthly",
                        "info.2": "About",
                        "about.1": "We have a rich selection of Vegas-style slot games and offer the widest range of games and the most competitive products on the market. All platforms only access and select internationally renowned online gaming platforms to ensure that every player can play in a fair and credible environment. At the same time, the Costa Rica government will also monitor the game platform data to ensure the fairness and authenticity of the game.Have fun playing games at Slots!",
                        "about.2": "About Us",
                        "pops.1": "Congratulations",
                        "pops.2": "Deposit <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount1}</span> and get <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount2}</span>! This opportunity is only available once, don't miss it!",
                        "pops.3": "Play Games",
                        "promote.1": "My invitation",
                        "promote.2": "Today",
                        "promote.3": "All",
                        "promote.4": "Register",
                        "promote.5": "Rewards",
                        "promote.6": "My Rewards",
                        "promote.7": "Received",
                        "promote.8": "Available",
                        "promote.9": "Receive",
                        "promote.10": "Share to your social media",
                        "promote.11": "Share link with your friends",
                        "task.1": "Play",
                        "task.2": "times",
                        "task.3": "Already received",
                        "task.4": "Complete tasks to get rewards",
                        "task.5": "Novice task",
                        "task.6": "Complete the following games and you will receive a cash reward of <span style='color: #fff;font-size: 16rem;'>{amount}</span>",
                        "task.7": "To complete",
                        "task.8": "Completed",
                        "task.9": "Receive {amount}",
                        "task.10": "System tasks",
                        "sign.1": "CHECK IN",
                        "sign.2": "Daily bonus",
                        "sign.3": "Complete the game once to get the reward for the day",
                        "sign.4": "Check-in successful",
                        "service.1": "Customer Service",
                        "service.2": "Common problem",
                        "service.3": "How can I withdraw funds?",
                        "service.4": "Dear user, withdrawal is a privilege for premium members. You can upgrade to premium member by recharging any amount and unlock the withdrawal privilege.",
                        "service.5": "Is this platform worth trusting me?",
                        "service.6": "You can rest assured that we are a brand under the Las Vegas Group and provide 1:1 real gold services. We spare no effort to create the most authentic, safe and fair gaming experience for you.",
                        "service.7": "What should I do if there is a problem with my deposit?",
                        "service.8": "First check the payment record and bank account. If the deduction is successful but not received, please contact the platform customer service and provide the transaction voucher so that the customer service can assist in processing.",
                        "service.9": "Why is the game loading slowly or not opening?",
                        "service.10": "Game loading problems may be caused by network latency, device performance, or platform maintenance. It is recommended to check the network connection or report the problem to customer service for help.",
                        "service.11": "What if the withdrawal fails?",
                        "service.12": "If the withdrawal fails, please check whether your withdrawal account is correct or change the withdrawal account and withdraw again.",
                        "deposit.1": "Online deposit",
                        "deposit.2": "Choose deposit amount",
                        "deposit.3": "After successful payment, the system will add the amount to your account within 1 to 5 minutes.",
                        "deposit.4": "Extra",
                        "withdrawal.1": "Withdrawable amount:",
                        "withdrawal.2": "Withdrawal amount",
                        "withdrawal.3": "Withdrawal in progress",
                        "withdrawal.4": "Account balance",
                        "withdrawal.5": "Reward Conversion Rules:",
                        "withdrawal.6": "1.The rewards that players get from each bet in the slot game will be converted into cash at a ratio of 1:1 and directly deposited into the player's game account.\r\n2.The account balance is the reward that the player gets from the slot game, but the balance cannot be withdrawn directly\r\n3.The withdrawable amount is the amount after the system converts the account balance 1:1, which can be withdrawn in full to your account",
                        "history.1": "Amount",
                        "history.2": "Time",
                        "history.3": "State",
                        "history.4": "Withdrawal Record",
                        "history.5": "The withdrawal account is wrong, please check the account information and reinitiate the withdrawal.",
                        "history.6": "No data",
                        "drawcash.1": "Add withdrawal account",
                        "drawcash.2": "Account Name",
                        "drawcash.3": "Please enter the account holder's name",
                        "drawcash.4": "Withdrawal account",
                        "drawcash.5": "Account Number",
                        "drawcash.6": "Please enter account number",
                        "drawcash.7": "Account Number",
                        "drawcash.8": "drawcash.8    /*no value*/",
                        "drawcash.9": "drawcash.9    /*no value*/",
                        "drawcash.10": "Phone number",
                        "drawcash.11": "Please enter your phone number",
                        "drawcash.12": "Format Error",
                        "prop.tip.1": "Dear user, you have accumulated bonus <span style='font-weight: 600; color: #ffc025'>{amount}</span>. In order to let you get familiar with the withdrawal process as soon as possible, please withdraw the money immediately!",
                        "prop.tip.2": "Dear user:<br/>&nbsp;&nbsp;&nbsp;&nbsp;Only premium members can use the withdrawal function. <br/>&nbsp;&nbsp;&nbsp;&nbsp;Deposit any amount to become a premium member and then use the withdrawal function to withdraw money.",
                        "prop.tip.3": "Order details",
                        "prop.tip.4": "Deposit {amount}, Receive {extra}",
                        "prop.tip.5": "Go to Deposit",
                        "prop.tip.6": "Dear user, this is the first time you have withdrawn money. For the security of your account balance and familiarity with the system withdrawal process, choose <span style='color:#06d0df;'>{amount}</span> to withdraw money. After the first withdrawal is successful, other withdrawal amounts will be unlocked automatically.",
                        "prop.tip.7": "Dear user, you currently have an unfinished withdrawal request, please go and resolve it.",
                        "prop.tip.8": "Dear user, your account balance is insufficient. You can try to play to win more money and then withdraw money.",
                        "prop.tip.9": "Dear user: Congratulations on your first successful withdrawal. You have successfully unlocked other withdrawal amounts.",
                        "prop.tip.10": "Dear user, due to your frequent withdrawals last time, a cooldown task was triggered. Please complete the task first before making any withdrawals.",
                        "prop.tip.11": "prop.tip.11    /*no value*/",
                        "prop.tip.12": "Please pay according to the order amount. If the order amount does not match the actual payment amount, the deposit will not be refunded!",
                        "order.info.1": "Order Tracking",
                        "order.info.2": "Withdrawal in progress",
                        "order.info.3": "The system has accepted the withdrawal request and is waiting to be processed...",
                        "order.info.4": "The system has processed the withdrawal request and is waiting to allocate the withdrawal channel...",
                        "order.info.5": "The first time a user withdraws money, they can use the VIP payment channel for free once. The VIP payment channel is being allocated...",
                        "order.info.6": "The user's first withdrawal has been assigned to a VIP channel and will be sent to the bank for processing...",
                        "order.info.7": "The user's first withdrawal has been assigned to a VIP channel and will be sent to the bank for processing...",
                        "order.info.8": "The withdrawal request has been forwarded to the Central Bank and the bank is processing it...",
                        "order.info.9": "Bank withdrawal processed successfully",
                        "order.info.10": "Account error, bank processing failed, the withdrawal amount has been returned to your game account, please withdraw again.",
                        "order.info.11": "The free VIP withdrawal channel has been used, the common withdrawal channel has been allocated, and the withdrawal is being queued.",
                        "order.info.12": "The normal withdrawal channel is queued to process the withdrawal, which should take <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> hours.",
                        "order.info.13": "The normal withdrawal channel is queued to process the withdrawal, which should take {time} hours.",
                        "order.info.14": "Number of people in line:",
                        "order.info.15": "Estimated time:",
                        "order.info.16": "Use VIP withdrawal channel",
                        "order.info.17": "Congratulations! You can enjoy VIP fast withdrawal channel once for free.Deposit {amount} now and the system will provide you with VIP fast withdrawal channel for free. Withdrawals arrive within 5 minutes!",
                        "order.info.18": "Dear user, you have the opportunity to enjoy the VIP fast withdrawal channel for free once. Now deposit {amount}, and the system will provide you with the VIP fast withdrawal channel for free. Use the VIP fast withdrawal channel, and the withdrawal will arrive within 5 minutes.",
                        "order.info.19": "The user top-up system provides fast withdrawal VIP channels, and VIP withdrawal channels are being allocated.",
                        "order.info.20": "The VIP withdrawal channel has been successfully allocated and the withdrawal request is being processed.",
                        "order.info.21": "The user's cash withdrawal amount exceeds {amount} and exceeds the VIP channel fee-free limit. You'll pay a {ratio}% fee on withdrawals. After receiving the fee, the VIP payment channel sends the remittance request to the central bank for processing.",
                        "order.info.22": "VIP payment channel rules:\n     No commission is required for a single withdrawal amount less than {amount}\n     Single withdrawal amount greater than or equal to {amount}, a commission is required, {ratio}% of the withdrawal amount\n     This commission is used to maintain the VIP payment channel to ensure that user withdrawals are credited immediately!",
                        "order.info.23": "Withdrawal commission",
                        "order.info.24": "Pay withdrawal fees",
                        "order.info.25": "Paying Commissions",
                        "order.info.26": "<span style='font-size:16rem;'>Handling fee <span style='color:#06D0DF'>{amount}</span></span>",
                        "order.info.27": "Abnormal bank processing: This withdrawal amount is additional personal income. According to the Personal Income Tax Law,a personal income tax of 10% of the withdrawal amount is required.",
                        "order.info.28": "Dear user:\n      This withdrawal belongs to your additional personal income. According to the personal income tax law, the bank needs to collect 10% personal income tax. Your current withdrawal progress is 99.9%. It is only the last step before the withdrawal arrives. After paying the tax, the bank will Send money now.",
                        "order.info.29": "Taxes to pay",
                        "order.info.30": "Pay personal tax",
                        "order.info.31": "<span style='font-size:16rem;'>Personal income tax <span style='color:#06D0DF'>{amount}</span></span>",
                        "order.info.32": "The bank has received the tax and the remittance is being processed...",
                        "order.info.33": "Bank remittance failure:The account number is wrong and needs to be changed.",
                        "order.info.34": "The system received a notification from the bank saying that due to an incorrect account number,system remittance failed. Please check your account number carefully.",
                        "order.info.35": "order.info.35    /*no value*/",
                        "order.info.36": "Confirm change",
                        "order.info.37": "To ensure your withdrawal is normal, please check your account number information carefully.",
                        "order.info.38": "To check",
                        "order.info.39.A": "Dear user：\n    Due to the error in the account number you submitted this time, your withdrawal application has been temporarily frozen to ensure account security. Please correct the withdrawal account number and make a deposit of {amount} for verification to remove the restriction. After submitting the correct withdrawal account number, the central bank will immediately make the remittance.",
                        "order.info.39.B": "Dear user：\n    Due to the error in the account number you submitted this time, your withdrawal application has been temporarily frozen to ensure account security. Please correct the withdrawal account number and make a deposit of {amount} for verification to remove the restriction. After submitting the correct withdrawal account number, the central bank will immediately make the remittance.",
                        "order.info.40": "Pay {amount}",
                        "order.info.41": "Change Account",
                        "order.info.42": "The bank has received a request to correct the account number and is reprocessing the remittance...."
                    },
                    Pa = {
                        "banner.1": "invite_ng.png",
                        "banner.2": "newPlayer_ng.png",
                        "banner.3": "check-inng.png",
                        "banner.4": "dailyng.png",
                        "promote.img.1": "banner-inviteng.png",
                        "eventItem-Img.1": "banner-newplayng.png",
                        "eventItem-Img.2": "banner-checkng.png",
                        "eventItem-Img.3": "banner-dailyng.png",
                        "eventItem-Img2.1": "R$ng.png",
                        "withdraw-Img.1": "goldng.png",
                        "service.img.1": "serviceng.png",
                        "popupDial.1": "turntableng.png",
                        "popupDial.2": "turntable_arrowng.png",
                        "popupDial.3": "turntable_moneyng.png",
                        "popupDial.4": "turntable_titleng.png",
                        "popupBag.1": "step_title_1_ng.png",
                        "popupBag.2": "step_msg_1_ng.png",
                        "popupBag.3": "step_button_ng.png"
                    },
                    Ea = { ...Ia,
                        ...Pa
                    },
                    Da = {
                        "common.1": "Depósito",
                        "common.2": "Retirar",
                        "common.3": "Confirmar",
                        "common.4": "Consejos",
                        "common.5": "Detalles",
                        "common.6": "Copiado con éxito",
                        "common.7": "Idioma",
                        "common.8": "Bienvenido a las tragamonedas",
                        "common.9": "Copiar",
                        "common.10": "Cancelar",
                        "common.11": "Apodo",
                        "common.12": "Ir a depositar",
                        "home.1": "Casino",
                        "home.2": "Actividad",
                        "home.3": "Bônus",
                        "home.4": "Invitar",
                        "home.5": "Juego",
                        "home.6": "Maquina de casino ",
                        "home.7": "Pesquería",
                        "home.8": "Apoyo",
                        "home.9": "    Bienvenido a Slots, Group es uno de los operadores de juegos de azar en línea más reconocidos del mundo, que ofrece una variedad de juegos emocionantes como máquinas tragamonedas, pesca, loterías y más.Nos aseguramos de que todos los jugadores puedan jugar en un entorno justo y confiable y estamos comprometidos a brindarles a los jugadores la mejor experiencia de juego.\n    Esta plataforma solo está disponible para usuarios mayores de 18 años. Esta plataforma no asume ninguna responsabilidad legal derivada del uso de juegos en esta plataforma por parte de menores.",
                        "bottomNav.1": "Promoción",
                        "bottomNav.2": "Perfil",
                        "info.1": "millón mensual",
                        "info.2": "Sobre",
                        "about.1": "Contamos con una extensa colección de tragamonedas estilo Vegas y ofrecemos la gama más amplia de juegos y productos más competitivos del mercado. Todas las plataformas solo acceden y seleccionan plataformas de juegos en línea de renombre internacional para garantizar que cada jugador pueda jugar en un entorno justo y confiable. Al mismo tiempo, el gobierno de Costa Rica también monitoreará los datos de la plataforma de juegos para garantizar la equidad y autenticidad del juego. ¡Disfruta jugando en Slots!",
                        "about.2": "Sobre nosotros",
                        "pops.1": "Felicidades",
                        "pops.2": "¡Deposita <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount1}</span> y obtén <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount2}</span>! ¡Esta oportunidad sólo se presenta una vez, no la pierdas!",
                        "pops.3": "Jugar juegos",
                        "promote.1": "Mi invitación",
                        "promote.2": "Hoy",
                        "promote.3": "Todo",
                        "promote.4": "Registro",
                        "promote.5": "Premio",
                        "promote.6": "Mi recompensa",
                        "promote.7": "Recibió",
                        "promote.8": "Disponible",
                        "promote.9": "Recibir",
                        "promote.10": "Comparte en tus redes sociales",
                        "promote.11": "Comparte enlace con tus amigos.",
                        "task.1": "Juega",
                        "task.2": "veces",
                        "task.3": "Ya recibido",
                        "task.4": "Completa tareas para obtener recompensas.",
                        "task.5": "Nuevas tareas de usuario",
                        "task.6": "Completa los siguientes juegos y recibirás una recompensa en efectivo de <span style='color: #fff;font-size: 16rem;'>{amount}</span>",
                        "task.7": "Completar",
                        "task.8": "Terminado",
                        "task.9": "Recibir {amount}",
                        "task.10": "Tareas del sistema",
                        "sign.1": "CHECK IN",
                        "sign.2": "Bonus diario",
                        "sign.3": "Completa el juego una vez para obtener la recompensa del día.",
                        "sign.4": "Check-in exitoso",
                        "service.1": "Servicio al Cliente",
                        "service.2": "Problema comun",
                        "service.3": "¿Cómo puedo retirar dinero?",
                        "service.4": "Estimados usuarios, los retiros son privilegio de los miembros premium. Puede actualizar a miembro premium recargando cualquier cantidad y desbloquear derechos de retiro.",
                        "service.5": "¿Es esta plataforma digna de mi confianza?",
                        "service.6": "Puede estar seguro de que somos una marca del Grupo Las Vegas y brindamos servicios de oro real 1:1. No escatimamos esfuerzos para crear la experiencia de juego más realista, segura y justa para usted.",
                        "service.7": "¿Qué debo hacer si hay un problema con mi depósito?",
                        "service.8": "Primero verifique el registro de pago y la cuenta bancaria. Si la deducción se realizó correctamente pero no se recibió, comuníquese con el servicio al cliente de la plataforma y proporcione el comprobante de la transacción para que el servicio al cliente pueda ayudarlo en el procesamiento.",
                        "service.9": "¿Por qué el juego se carga lentamente o no se abre?",
                        "service.10": "Los problemas de carga del juego pueden deberse a la latencia de la red, el rendimiento del dispositivo o el mantenimiento de la plataforma. Se recomienda verificar la conexión de red o informar el problema al servicio de atención al cliente para obtener ayuda.",
                        "service.11": "¿Qué pasa si el retiro falla?",
                        "service.12": "Si el retiro falla, verifique si su cuenta de retiro es correcta o cambie la cuenta de retiro y retire dinero nuevamente.",
                        "deposit.1": "Depósito en línea",
                        "deposit.2": "Seleccionar monto del depósito",
                        "deposit.3": "Después de un pago exitoso, el sistema agregará el monto a su cuenta dentro de 1 a 5 minutos.",
                        "deposit.4": "Extra",
                        "withdrawal.1": "Monto que se puede retirar:",
                        "withdrawal.2": "Monto del retiro",
                        "withdrawal.3": "Retiro en curso",
                        "withdrawal.4": "Saldo de cuenta",
                        "withdrawal.5": "Reglas de conversión de recompensas：",
                        "withdrawal.6": "1. Las recompensas que los jugadores obtienen de cada apuesta en el juego de tragamonedas se convertirán en efectivo en una proporción de 1:1 y se depositarán directamente en la cuenta de juego del jugador.\r\n2. El saldo de la cuenta es la recompensa que el jugador obtiene del juego de tragamonedas, pero el saldo no se puede retirar directamente.\r\n3. El monto retirable es el monto después de que el sistema convierte el saldo de la cuenta en una proporción de 1:1, que se puede retirar en su totalidad a su cuenta.",
                        "history.1": "Cantidad",
                        "history.2": "Tiempo",
                        "history.3": "Estado",
                        "history.4": "Historial de retiros",
                        "history.5": "La cuenta de retiro es incorrecta, verifique la información de la cuenta y comience el retiro nuevamente.",
                        "history.6": "Sin datos",
                        "drawcash.1": "Vincular cuenta bancaria",
                        "drawcash.2": "Nombre",
                        "drawcash.3": "Por favor ingresa tu nombre",
                        "drawcash.4": "Nombre del banco",
                        "drawcash.5": "Numero de cuenta",
                        "drawcash.6": "Por favor ingrese el número de tarjeta bancaria",
                        "drawcash.7": "Numero de cuenta",
                        "drawcash.8": "drawcash.8    /*no value*/",
                        "drawcash.9": "Ingrese 16 digitos de tarjeta o 18 digitos de Clabe",
                        "drawcash.10": "número telefónico",
                        "drawcash.11": "Por favor ingrese su número de teléfono",
                        "drawcash.12": "Error de formato",
                        "drawcash.13": "Cédula de Ciudadanía",
                        "drawcash.14": "Por favor ingrese de 6 a 11 dígitos",
                        "prop.tip.1": "Estimado usuario, ha acumulado el bono <span style='font-weight: 600; color: #ffc025'>{amount}</span>. Para poder familiarizarse con el proceso de retiro lo antes posible, ¡retírelo inmediatamente!",
                        "prop.tip.2": "Estimado usuario:<br/>&nbsp;&nbsp;&nbsp;&nbsp;La funcionalidad de retiro es un privilegio para los miembros premium. Realice un depósito para convertirse en miembro premium, desbloquear derechos de retiro y retirar dinero.",
                        "prop.tip.3": "Detalles del pedido",
                        "prop.tip.4": "Deposita {amount}, recibe {extra}",
                        "prop.tip.5": "Ir a pagar",
                        "prop.tip.6": "Estimado usuario, esta es la primera vez que retira dinero. Para la seguridad del saldo de su cuenta y para familiarizarse con el proceso de retiro del sistema, elija <span style='color:#06d0df;'>{amount}</span> para retirar. Después de que el primer retiro sea exitoso, otros montos de retiro se desbloquearán automáticamente.",
                        "prop.tip.7": "Estimado usuario, actualmente tiene una solicitud de retiro sin terminar, vaya y resuélvala.",
                        "prop.tip.8": "Estimado usuario, el saldo de su cuenta es insuficiente, puede intentar jugar juegos para ganar más dinero y luego retirar dinero.",
                        "prop.tip.9": "Estimado usuario: Felicitaciones por su primer retiro exitoso,Ha desbloqueado con éxito otros montos de retiro.",
                        "prop.tip.10": "Estimado usuario, debido a sus frecuentes retiros la última vez, se activó la tarea de enfriamiento. Primero complete la tarea antes de realizar un retiro.",
                        "prop.tip.11": "prop.tip.11    /*no value*/",
                        "prop.tip.12": "Pague de acuerdo con el monto del pedido. Si el monto del pedido no coincide con el monto del pago real, ¡el depósito no será reembolsado!",
                        "order.info.1": "Rastreo de orden",
                        "order.info.2": "Retiro en curso",
                        "order.info.3": "El sistema aceptó la solicitud de retiro y está esperando ser procesado...",
                        "order.info.4": "El sistema ha procesado la solicitud de retiro y está esperando que se asigne el canal de retiro...",
                        "order.info.5": "La primera vez que un usuario retira dinero, puede utilizar el canal de pago VIP de forma gratuita una vez. El canal de pago VIP se está asignando...",
                        "order.info.6": "El primer retiro del usuario ha sido asignado a un canal VIP y se enviará al banco para su procesamiento...",
                        "order.info.7": "El primer retiro del usuario ha sido asignado a un canal VIP y se enviará al banco para su procesamiento...",
                        "order.info.8": "La solicitud de retiro ha sido enviada al Banco Central y el banco la está procesando.",
                        "order.info.9": "Retiro bancario procesado exitosamente",
                        "order.info.10": "Error de cuenta, falla en el procesamiento bancario, el monto del retiro fue devuelto a su cuenta del juego, retire nuevamente.",
                        "order.info.11": "Se ha utilizado el canal de retiro VIP gratuito y se ha asignado el canal de retiro ordinario y está en cola para el retiro.",
                        "order.info.11.C": "Se están asignando canales de retiro, espere pacientemente...",
                        "order.info.12": "El canal de retiro normal está en cola para procesar el retiro, lo que debería tomar <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> horas.",
                        "order.info.12.C": "El retiro se ha asignado al canal de retiro normal y está en cola para su procesamiento. Debería demorar <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> horas.",
                        "order.info.13": "El canal de retiro normal está haciendo cola para procesar el retiro, lo que debería tomar {time} horas.",
                        "order.info.14": "Número de personas haciendo cola:",
                        "order.info.15": "Hora prevista:",
                        "order.info.16": "Usar canal de retiro VIP",
                        "order.info.17": "Consejo: puede utilizar el canal de retiro VIP para evitar hacer cola para retiros",
                        "order.info.18": "Estimado usuario:\n      Tienes la oportunidad de disfrutar del canal de retiro rápido de efectivo VIP una vez gratis. Si recargas {amount} ahora, el sistema te proporcionará el canal de retiro rápido de efectivo VIP de forma gratuita. Puedes usar el canal de retiro rápido de efectivo VIP sin hacer cola. y el efectivo ingresará a su cuenta inmediatamente.",
                        "order.info.19": "El sistema de recarga de usuarios proporciona canales VIP de retiro rápido y se están asignando canales de retiro VIP.",
                        "order.info.20": "El canal de retiro VIP se ha asignado correctamente y la solicitud de retiro se está procesando.",
                        "order.info.21": "El monto de retiro del usuario supera los {amount}, lo que supera el límite gratuito del canal VIP. Los retiros están sujetos a una tarifa del {ratio}%. Después de recibir la tarifa, el canal de pago VIP envía la solicitud de remesa al banco central para su procesamiento.",
                        "order.info.22": "Reglas del canal de pago VIP:\n     No se requiere tarifa de gestión para un monto de retiro único inferior a {amount}.\n     Un monto único de retiro mayor o igual a {amount} estará sujeto a una tarifa de manejo, que es el {ratio}% del monto del retiro.\n     ¡Esta tarifa de gestión se utiliza para mantener el canal de pago VIP y garantizar que los retiros de los usuarios se reciban inmediatamente!",
                        "order.info.23": "Comisión de retiro",
                        "order.info.24": "Pagar tarifas de retiro",
                        "order.info.25": "Pagar comisión",
                        "order.info.26": "Tarifa de manejo <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.27": "Procesamiento bancario anormal: este monto de retiro es un ingreso personal adicional. Según las leyes fiscales, se requiere un impuesto sobre la renta personal del 10% del monto del retiro.",
                        "order.info.28": "Estimado usuario:\n     Este retiro pertenece a sus ingresos personales adicionales. Según las leyes fiscales, el banco debe cobrar el 10% del impuesto sobre la renta personal.El progreso de su retiro actual es del 99.9% y solo queda el último paso antes de que llegue el retiro. Una vez pagado el impuesto, el banco procesará la transferencia de inmediato.",
                        "order.info.29": "Impuestos a pagar",
                        "order.info.30": "Pagar impuesto personal",
                        "order.info.31": "Impuesto sobre la renta personal <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.32": "El banco ha recibido el impuesto y está procesando la remesa...",
                        "order.info.33": "Fallo de remesas bancarias: el número de la tarjeta bancaria es incorrecto y es necesario modificar el número de la tarjeta bancaria.",
                        "order.info.34": "El sistema recibió una notificación del banco indicando que la remesa del sistema falló debido a un número de tarjeta bancaria incorrecto. Verifique nuevamente el número de su tarjeta bancaria",
                        "order.info.35": "order.info.35    /*no value*/",
                        "order.info.36": "Confirmar cambio",
                        "order.info.37": "Para asegurarse de que su retiro sea normal, verifique cuidadosamente el número de su tarjeta bancaria.",
                        "order.info.38": "Ir a revisar",
                        "order.info.39.A": "Estimado usuario:\n    Debido a un error en el número de tarjeta bancaria que envió esta vez, su solicitud de retiro se ha congelado temporalmente para garantizar la seguridad de su cuenta. Después de corregir el número de tarjeta bancaria, realice un depósito de {amount} para verificación y eliminar la restricción. Después de enviar el número de tarjeta bancaria correcto, el banco central realizará inmediatamente la remesa.",
                        "order.info.39.B": "Estimado usuario:\n    Debido a un error en el número de tarjeta bancaria que envió esta vez, su solicitud de retiro se ha congelado temporalmente para garantizar la seguridad de su cuenta. Después de corregir el número de tarjeta bancaria, realice un depósito de {amount} para verificación y eliminar la restricción. Después de enviar el número de tarjeta bancaria correcto, el banco central realizará inmediatamente la remesa.",
                        "order.info.40": "Paga {amount}",
                        "order.info.41": "Cambiar número de cuenta",
                        "order.info.42": "El banco ha recibido una solicitud para corregir el número de la tarjeta bancaria y está reprocesando la remesa...."
                    },
                    Na = {
                        "banner.1": "invite_co.png",
                        "banner.2": "newPlayer_co.png",
                        "banner.3": "check-inmx.png",
                        "banner.4": "dailymx.png",
                        "promote.img.1": "banner-inviteco.png",
                        "eventItem-Img.1": "banner-newplayco.png",
                        "eventItem-Img.2": "banner-checkmx.png",
                        "eventItem-Img.3": "banner-dailymx.png",
                        "eventItem-Img2.1": "R$mx.png",
                        "withdraw-Img.1": "goldmx.png",
                        "service.img.1": "servicemx.png",
                        "popupDial.1": "turntablemx.png",
                        "popupDial.2": "turntable_arrowmx.png",
                        "popupDial.3": "turntable_moneymx.png",
                        "popupDial.4": "turntable_titlemx.png",
                        "popupBag.1": "step_title_1_es.png",
                        "popupBag.2": "step_msg_1_es.png",
                        "popupBag.3": "step_button_es.png"
                    },
                    Sa = { ...Da,
                        ...Na
                    },
                    Ta = {
                        "common.1": "Deposit",
                        "common.2": "Withdrawals",
                        "common.3": "Confirm",
                        "common.4": "TIPS",
                        "common.5": "Details",
                        "common.6": "Copy successful",
                        "common.7": "Language",
                        "common.8": "Welcome to Slots",
                        "common.9": "Copy",
                        "common.10": "Cancel",
                        "common.11": "Nickname",
                        "common.12": "Go Deposit",
                        "common.13": "minutes",
                        "common.14": "seconds",
                        "common.15": "Network error, please try again later",
                        "common.16": "GO",
                        "home.1": "Casino",
                        "home.2": "Activity",
                        "home.3": "Bonus",
                        "home.4": "Invite",
                        "home.5": "Games",
                        "home.6": "Slot machine",
                        "home.7": "Fishery",
                        "home.8": "Support",
                        "home.9": "    Welcome to Slots,Group is one of the world's most renowned online gambling operators, offering a variety of exciting games such as slot machines, fishing, lotteries and more..The Group has passed all compliance checks and has the legal authorization to conduct all gaming operations involving wagering.We ensure that every player can play in a fair and trustworthy environment and are committed to providing players with the best gaming experience.\n     This platform is restricted to users aged 18 and above. This platform does not assume any legal liability arising from minors using games on this platform.",
                        "eighteen.1": "Set up your account",
                        "eighteen.2": "Username",
                        "eighteen.3": "Please enter your username",
                        "eighteen.4": "Date of Birth",
                        "eighteen.5": "I am over 18 and understand the terms and conditions",
                        "eighteen.6": "Only open to users over 18 years old",
                        "eighteen.7": "Please select your date of birth",
                        "eighteen.8": "Please enter 3-15 characters",
                        "bottomNav.1": "Promotion",
                        "bottomNav.2": "Information",
                        "info.1": "million monthly",
                        "info.2": "About",
                        "about.1": "We have a rich selection of Vegas-style slot games and offer the widest range of games and the most competitive products on the market. All platforms only access and select internationally renowned online gaming platforms to ensure that every player can play in a fair and credible environment. At the same time, the Costa Rica government will also monitor the game platform data to ensure the fairness and authenticity of the game.Have fun playing games at Slots!",
                        "about.2": "About Us",
                        "pops.1": "Congratulations",
                        "pops.2": "Deposit <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount1}</span> and get <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount2}</span>! This opportunity is only available once, don't miss it!",
                        "pops.3": "Play Games",
                        "times.1": "ANTES",
                        "times.2": "Chaal Limit",
                        "times.3": "Limits",
                        "times.4": "Max Players",
                        "times.5": "Play now",
                        "times.6": "You have exited the game, do you want to return to the game?",
                        "promote.1": "My invitation",
                        "promote.2": "Today",
                        "promote.3": "All",
                        "promote.4": "Register",
                        "promote.5": "Rewards",
                        "promote.6": "My Rewards",
                        "promote.7": "Received",
                        "promote.8": "Available",
                        "promote.9": "Receive",
                        "promote.10": "Share to your social media",
                        "promote.11": "Share link with your friends",
                        "promote.12": "Successfully received",
                        "task.1": "Play",
                        "task.2": "times",
                        "task.3": "Already received",
                        "task.4": "Complete tasks to get rewards",
                        "task.5": "Novice task",
                        "task.6": "Complete the following games and you will receive a cash reward of <span style='color: #fff;font-size: 16rem;'>{amount}</span>",
                        "task.7": "To complete",
                        "task.8": "Completed",
                        "task.9": "Receive {amount}",
                        "task.10": "System tasks",
                        "task.11": "Dear user：\n    According to the anti-money laundering regulations, you need to complete {taskNum} games after completing the recharge before you can withdraw money.",
                        "sign.1": "CHECK IN",
                        "sign.2": "Daily bonus",
                        "sign.3": "Complete the game once to get the reward for the day",
                        "sign.4": "Check-in successful",
                        "service.1": "Customer Service",
                        "service.2": "Common problem",
                        "service.3": "How can I withdraw funds?",
                        "service.4": "Dear user, withdrawal is a privilege for premium members. You can upgrade to premium member by recharging any amount and unlock the withdrawal privilege.",
                        "service.5": "Is this platform worth trusting me?",
                        "service.6": "You can rest assured that we are a brand under the Las Vegas Group and provide 1:1 real gold services. We spare no effort to create the most authentic, safe and fair gaming experience for you.",
                        "service.7": "What should I do if there is a problem with my deposit?",
                        "service.8": "First check the payment record and bank account. If the deduction is successful but not received, please contact the platform customer service and provide the transaction voucher so that the customer service can assist in processing.",
                        "service.8.D": "service.8.D    /*no value*/",
                        "service.9": "Why is the game loading slowly or not opening?",
                        "service.10": "Game loading problems may be caused by network latency, device performance, or platform maintenance. It is recommended to check the network connection or report the problem to customer service for help.",
                        "service.11": "What if the withdrawal fails?",
                        "service.12": "If the withdrawal fails, please check whether your withdrawal account is correct or change the withdrawal account and withdraw again.",
                        "service.12.D": "service.12.D    /*no value*/",
                        "deposit.1": "Online Deposit",
                        "deposit.2": "Choose deposit amount",
                        "deposit.3": "After successful payment, the system will add the amount to your account within 1 to 5 minutes.",
                        "deposit.4": "Extra",
                        "withdrawal.1": "Withdrawable amount:",
                        "withdrawal.2": "Withdrawal amount",
                        "withdrawal.3": "Withdrawal in progress",
                        "withdrawal.4": "Account balance",
                        "withdrawal.5": "Reward Conversion Rules:",
                        "withdrawal.6": "1.The rewards that players get from each bet in the slot game will be converted into cash at a ratio of 1:1 and directly deposited into the player's game account.\r\n2.The account balance is the reward that the player gets from the slot game, but the balance cannot be withdrawn directly\r\n3.The withdrawable amount is the amount after the system converts the account balance 1:1, which can be withdrawn in full to your account",
                        "withdrawal.7": "Withdrawal Account",
                        "withdrawal.8": "withdrawal.8    /*no value*/",
                        "history.1": "Amount",
                        "history.2": "Time",
                        "history.3": "State",
                        "history.4": "Withdrawal Record",
                        "history.5": "The withdrawal account is wrong, please check the account information and reinitiate the withdrawal.",
                        "history.5.D": "history.5.D    /*no value*/",
                        "history.6": "No data",
                        "drawcash.1": "Add withdrawal account",
                        "drawcash.2": "Account Name",
                        "drawcash.3": "Please enter the account holder's name",
                        "drawcash.4": "Bank Name",
                        "drawcash.5": "Account Number",
                        "drawcash.6": "Please enter the bank card number",
                        "drawcash.7": "Account Number",
                        "drawcash.8": "drawcash.8    /*no value*/",
                        "drawcash.9": "drawcash.9    /*no value*/",
                        "drawcash.10": "Phone number",
                        "drawcash.11": "Please enter your phone number",
                        "drawcash.12": "Format Error",
                        "drawcash.13": "IFSC",
                        "drawcash.14": "Please enter 11 digit IFSC",
                        "drawcash.17": 'Please make sure the first four digits are English letters and the fifth digit is the number "0"',
                        "prop.tip.1": "Dear user, you have accumulated bonus <span style='font-weight: 600; color: #ffc025'>{amount}</span>. In order to let you get familiar with the withdrawal process as soon as possible, please withdraw the money immediately!",
                        "prop.tip.2": "Dear user:<br/>&nbsp;&nbsp;&nbsp;&nbsp;The withdrawal function is an exclusive privilege for VIP members. You can upgrade to VIP member and unlock withdrawal privileges by depositing any amount.",
                        "prop.tip.2.C": "Dear user:<br/>&nbsp;&nbsp;&nbsp;&nbsp;Only premium members can use the withdrawal function. <br/>&nbsp;&nbsp;&nbsp;&nbsp;Deposit any amount to become a premium member and then use the withdrawal function to withdraw money.",
                        "prop.tip.3": "Order details",
                        "prop.tip.4": "Deposit {amount}, Receive {extra}",
                        "prop.tip.5": "Go to payment",
                        "prop.tip.6": "Dear user, this is the first time you have withdrawn money. For the security of your account balance and familiarity with the system withdrawal process, choose <span style='color:#06d0df;'>{amount}</span> to withdraw money. After the first withdrawal is successful, other withdrawal amounts will be unlocked automatically.",
                        "prop.tip.7": "You have a withdrawal request in progress, please check it.",
                        "prop.tip.7.i": "Dear user:\n    You currently have an unfinished withdrawal request, please go and resolve it.",
                        "prop.tip.7.1": "Continue playing",
                        "prop.tip.7.2": "Check it",
                        "prop.tip.8": "Dear user, your account balance is insufficient. You can try to play to win more money and then withdraw money.",
                        "prop.tip.9": "Dear user: Congratulations on your first successful withdrawal. You have successfully unlocked other withdrawal amounts.",
                        "prop.tip.10": "Dear user, due to your frequent withdrawals last time, a cooldown task was triggered. Please complete the task first before making any withdrawals.",
                        "prop.tip.11": "prop.tip.11    /*no value*/",
                        "prop.tip.12": "prop.tip.12    /*no value*/",
                        "prop.tip.13.E": "Your withdrawal has been sent to the bank for processing and is expected to arrive within 2 minutes, please check.",
                        "prop.tip.14.E": "Go to upgrade",
                        "prop.tip.15.E": "Dear user: \n      According to anti-money laundering regulations, you need to complete the game and meet the turnover requirements before you can withdraw money.",
                        "prop.tip.16.E": "Insufficient withdrawal balance",
                        "prop.tip.17.E": "Dear user:\n     Your number of withdrawals today has reached the maximum limit. Please try to withdraw money after 00:00:00 the next day.\n     Withdrawal rules for your current membership level\n     Number of withdrawals per day: 1 times\n     Each withdrawal limit: ₱20.00\n     You can upgrade your membership level to enjoy more withdrawal rights",
                        "prop.tip.18.E": "Upgrade to",
                        "prop.tip.19.E": "Platinum",
                        "prop.tip.20.E": "Diamond",
                        "prop.tip.21.E": "Withdrawal rights:",
                        "prop.tip.22.E": "1.Unlock withdrawal options:",
                        "prop.tip.23.E": "2.Number of withdrawals per day:X times",
                        "prop.tip.24.E": "Deposit xxx",
                        "prop.tip.25.E": "Upgrade requirements: Single deposit≥XXX",
                        "prop.tip.26.E": "Dear user:\n     Congratulations, you have unlocked the withdrawal permission. You have currently unlocked the withdrawal amount option {amount}",
                        "prop.tip.27.E": "Dear User:\n     Your membership level only unlocks the withdrawal option of {amount}. Please choose {amount} for withdrawal, or upgrade your membership level to unlock more withdrawal options.",
                        "prop.tip.28.E": "Black Diamond",
                        "prop.tip.29.E": "All",
                        "prop.tip.30.E": "This withdrawal amount has not been unlocked yet",
                        "prop.tip.31.E": "Dear user:\n     The current withdrawal times have been used up. You can upgrade your membership level to unlock more withdrawal benefits.",
                        "order.prop.2.C": "Select payment channel",
                        "order.prop.5.C": "Normal payment channel",
                        "order.prop.6.C": "Fast payment channel",
                        "order.prop.8.C": "The channel is currently congested, and the estimated withdrawal time is <span style='color: #FFB2C8'>{time} hours</span>.",
                        "order.prop.9.C": "The current channel is clear, and the estimated withdrawal time is <span style='color: #D4FFB2'>5 minutes</span>.",
                        "order.prop.1.A": "order.prop.1.A    /*no value*/",
                        "order.prop.2.A": "order.prop.2.A    /*no value*/",
                        "order.prop.3.A": "order.prop.3.A    /*no value*/",
                        "order.prop.4.A": "order.prop.4.A    /*no value*/",
                        "order.prop.5.A": "order.prop.5.A    /*no value*/",
                        "order.prop.6.A": "order.prop.6.A    /*no value*/",
                        "order.prop.7.A": "order.prop.7.A    /*no value*/",
                        "order.prop.8.A": "order.prop.8.A    /*no value*/",
                        "order.prop.9.A": "order.prop.9.A    /*no value*/",
                        "order.prop.10.A": "order.prop.10.A    /*no value*/",
                        "order.prop.14": "order.prop.14    /*no value*/",
                        "order.prop.15": "order.prop.15    /*no value*/",
                        "order.prop.16": "Please select the payment channel. Once confirmed, this withdrawal cannot be modified.",
                        "order.prop.17": "After the payment channel is confirmed, this withdrawal cannot be changed.",
                        "order.prop.18": "Channel is clear",
                        "order.prop.19": "Channel congested",
                        "order.info.1": "Order Tracking",
                        "order.info.2": "Withdrawal in progress",
                        "order.info.3": "The system has accepted the withdrawal request and is waiting to be processed...",
                        "order.info.3.C.1": "You have selected the fast payment channel, the system is processing...",
                        "order.info.3.C.2": "You have selected the normal payment channel, the system is processing...",
                        "order.info.3.A": "order.info.3.A    /*no value*/",
                        "order.info.4": "The system has processed the withdrawal request and is waiting to allocate the withdrawal channel...",
                        "order.info.4.C.1": "The system is assigning you a fast payment channel, please wait...",
                        "order.info.4.C.2": "The system is assigning you a normal payment channel, please wait...",
                        "order.info.4.A": "order.info.4.A    /*no value*/",
                        "order.info.5": "The first time a user withdraws money, they can use the VIP payment channel for free once. The VIP payment channel is being allocated...",
                        "order.info.5.A": "order.info.5.A    /*no value*/",
                        "order.info.6": "The user's first withdrawal has been assigned to the VIP channel and will be immediately notified to the bank for remittance...",
                        "order.info.6.A": "order.info.6.A    /*no value*/",
                        "order.info.7": "The user's first withdrawal has been assigned to the VIP channel and will be immediately notified to the bank for remittance...",
                        "order.info.7.A": "Estimated time：{timer}s",
                        "order.info.7.D": "VIP payment channels have been assigned and withdrawal requests have been sent to the exchange...",
                        "order.info.8": "The bank has received the remittance request and is in process of remittance. Please check the withdrawal in time.",
                        "order.info.8.C": "The withdrawal request has been forwarded to the Central Bank and the bank is processing it...",
                        "order.info.8.A": "order.info.8.A    /*no value*/",
                        "order.info.8.D": "The exchange has accepted the withdrawal request and is processing the withdrawal...",
                        "order.info.9": "Bank withdrawal processed successfully",
                        "order.info.9.A": "order.info.9.A    /*no value*/",
                        "order.info.9.D": "Withdrawal processed successfully",
                        "order.info.9.B": "order.info.9.B    /*no value*/",
                        "order.info.10": "Bank transfer failed. Please check whether the bank account or IFSC is correct or change the bank and re-initiate the withdrawal.",
                        "order.info.10.A": "order.info.10.A    /*no value*/",
                        "order.info.10.D": "order.info.10.D    /*no value*/",
                        "order.info.11": "The free VIP withdrawal channel has been used, and the ordinary withdrawal channel has been assigned to you. The ordinary withdrawal channel is being processed.",
                        "order.info.11.C": "The withdrawal channel is being allocated, please wait patiently...",
                        "order.info.12": "The regular withdrawal channel is currently used by a large number of people, and it is estimated that it will take <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> hours to process. Please wait patiently or use the VIP withdrawal channel.",
                        "order.info.12.C.1": "The system failed to allocate a quick remittance channel, please process it.",
                        "order.info.12.C.2": "The withdrawal has been assigned to the normal payment channel and is waiting in line for processing. It should take <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> hours. Please wait patiently or use the fast payment channel.",
                        "order.info.13": "The regular withdrawal channel is currently used by a large number of people, and it is estimated that it will take {time} hours to process. Please wait patiently or use the VIP withdrawal channel.",
                        "order.info.13.C.1": "The system failed to allocate a quick remittance channel, please process it.",
                        "order.info.13.C.2": "The withdrawal has been assigned to the normal payment channel and is waiting in line for processing. It should take {time} hours. Please wait patiently or use the fast payment channel.",
                        "order.info.14": "Number of people in line:",
                        "order.info.15": "Estimated time:",
                        "order.info.16": "Use VIP withdrawal channel",
                        "order.info.16.C.1": "Check the details",
                        "order.info.16.C.2": "Use the fast payment channel",
                        "order.info.17": "By using the VIP withdrawal channel, you can avoid queuing for this withdrawal, and the withdrawal will be processed immediately.",
                        "order.info.17.C.1": "The system has detected that you currently do not meet the requirements for using the fast withdrawal channel. The fast withdrawal channel is only open to users with deposits of more than {totalAmount}. Your current deposit is insufficient. In order for the fast channel to process your withdrawal request in time, please deposit another <span style='color: yellow;font-size: 14rem;'>{amount}</span>. The system will process your withdrawal request immediately after meeting the conditions.",
                        "order.info.17.C.2": "By using the fast payment channel, you can avoid the withdrawal queue and your withdrawal will be processed immediately.",
                        "order.info.18": "Dear users:\n     Now you only need to top up {amount} to enjoy the VIP fast withdrawal channel permanently. No need to queue in the future, withdrawals will be credited to your account immediately.",
                        "order.info.19": "The user top-up system provides fast withdrawal VIP channels, and VIP withdrawal channels are being allocated.",
                        "order.info.19.C.1": "The user recharge system is assigning you to the fast payment channel...",
                        "order.info.19.C.2": "The user recharge system provides a fast payment channel, and the fast payment channel is being allocated.",
                        "order.info.20": "The VIP withdrawal channel has been successfully allocated and the withdrawal request is being processed.",
                        "order.info.20.C": "The fast payment channel has been allocated successfully and the withdrawal request is being processed.",
                        "order.info.21": "The user's cash withdrawal amount exceeds {amount} and exceeds the VIP channel fee-free limit. You'll pay a {ratio}% fee on withdrawals. After receiving the fee, the VIP payment channel sends the remittance request to the central bank for processing.",
                        "order.info.21.C": "The user's cash withdrawal amount exceeds {amount} and exceeds the fee-free limit of the fast withdrawal channel. Withdrawals are subject to a {ratio}% fee. After the fast payment channel receives the fee, it sends the remittance request to the central bank for processing.",
                        "order.info.21.D": "The user withdraws more than {amount}, which exceeds the VIP channel fee-free limit. Withdrawals are subject to a {ratio}% fee.",
                        "order.info.22": "VIP payment channel rules:\n     No commission is required for a single withdrawal amount less than {amount}\n     Single withdrawal amount greater than or equal to {amount}, a commission is required, {ratio}% of the withdrawal amount\n     This commission is used to maintain the VIP payment channel to ensure that user withdrawals are credited immediately!",
                        "order.info.22.C.T1": "Rules for the fast payment channel:\n      No commission is required for a single withdrawal amount less than {amount}\n     Single withdrawal amount greater than or equal to {amount}, a commission is required, {ratio}% of the withdrawal amount\n     This commission is used to maintain the fast payment channel to ensure that user withdrawals are credited immediately!",
                        "order.info.22.C.T2": "Dear user:\n     A single withdrawal amount greater than or equal to {amount} will be charged a commission of 5% of the withdrawal amount. This commission is used to maintain the fast payment channel.\n     The minimum single deposit amount is ₹100.00. Since your payment amount this time is less than ₹100.00, the system will automatically adjust it to ₹100.00. You can also choose to cancel the current withdrawal request and re-initiate it.",
                        "order.info.22.C.T3": "Cancel order",
                        "order.info.22.C.T4": "Pay fees",
                        "order.info.22.D": "Dear users:\n        We are committed to providing users with a better withdrawal experience. If the single withdrawal amount exceeds {amount} using the VIP payment channel, the VIP channel will charge {ratio}% of the withdrawal amount as a handling fee.\n       After paying the withdrawal fee, the withdrawal request will be processed immediately",
                        "order.info.23": "Withdrawal commission",
                        "order.info.24": "Pay withdrawal fees",
                        "order.info.25": "Paying Commissions",
                        "order.info.26": "Handling fee <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.27": "Abnormal bank processing:This withdrawal amount is additional personal income.Under federal regulations, you are subject to personal income tax of 10% of the withdrawal amount.",
                        "order.info.27.D": "The withdrawal processing is abnormal. The withdrawal amount is additional personal income. According to the national tax law, a personal income tax of 10% of the withdrawal amount needs to be paid.",
                        "order.info.28": "Dear users:\n     This withdrawal belongs to your additional personal income. According to federal regulations, a 10% personal income tax is required. Your current withdrawal progress is 99.9%. It is only the last step before the withdrawal arrives. After paying the tax, the bank will send money now.",
                        "order.info.28.C": "Dear users:\n     This withdrawal belongs to your additional personal income. According to federal regulations, a 10% personal income tax is required. Your current withdrawal progress is 99.9%. It is only the last step before the withdrawal arrives. After paying the tax, the bank will send money now.\n     The minimum single deposit amount is ₹100.00. Since your payment amount this time is less than ₹100.00, the system will automatically adjust it to ₹100.00. You can also choose to cancel the current withdrawal request and re-initiate it.",
                        "order.info.28.D": "Dear users:\n      This withdrawal belongs to your personal additional income. According to the national tax law, a 10% personal income tax is required. Your current withdrawal progress is 99.9%.Only one step left to withdraw cash.After the tax payment, the amount will be immediately submitted to the exchange for remittance.",
                        "order.info.29": "Taxes to pay",
                        "order.info.30": "Pay personal tax",
                        "order.info.30.C.T1": "Pay taxes",
                        "order.info.31": "Personal income tax <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.32": "The bank has received the tax and the remittance is being processed...",
                        "order.info.32.D": "Withdrawal request has been sent to the exchange for processing...",
                        "order.info.33": "Bank transfer failed: The withdrawal account information is wrong and needs to be modified.",
                        "order.info.33.D": "Withdrawal failed: Wrong network type",
                        "order.info.34": "The system received a notification from the bank that the system remittance failed due to incorrect withdrawal account information. Please check your account information carefully.",
                        "order.info.34.D": "order.info.34.D    /*no value*/",
                        "order.info.35": "order.info.35    /*no value*/",
                        "order.info.36": "Confirm change",
                        "order.info.37": "To ensure your withdrawal goes through, please double-check your account information.",
                        "order.info.37.D": "order.info.37.D    /*no value*/",
                        "order.info.38": "To check",
                        "order.info.39.A": "Dear user:\r\n     Due to the incorrect account information you submitted this time, your withdrawal application has been temporarily frozen to ensure account security. Please correct your account information and deposit {amount} for verification to lift the restriction. After submitting the correct account information, the central bank will immediately make the remittance.",
                        "order.info.39.B": "Dear user:\n     Due to the incorrect account information you submitted this time, your withdrawal application has been temporarily frozen to ensure account security. Please correct your account information and deposit {amount} for verification to lift the restriction. After submitting the correct account information, the central bank will immediately make the remittance.",
                        "order.info.39.D": "order.info.39.D    /*no value*/",
                        "order.info.40": "Pay {amount}",
                        "order.info.41": "Change Account Information",
                        "order.info.41.D": "order.info.41.D    /*no value*/",
                        "order.info.42": "The bank has received a request to correct the account number and is reprocessing the remittance....",
                        "order.info.42.D": "order.info.42.D    /*no value*/",
                        "order.info.43": "The bank will remit your withdrawal amount.",
                        "order.info.44": "You receive the withdrawal amount.",
                        "order.info.45": "Withdrawal request paused",
                        "order.info.46": "Withdrawal request processing failed.",
                        "deposit.5": "Order amount",
                        "deposit.6": "Order time",
                        "deposit.7": "Order Number",
                        "deposit.8": "Payment Methods",
                        "deposit.9": "USDT",
                        "deposit.10": "PHP",
                        "deposit.11": "Pay details",
                        "deposit.12": "Actual amount paid",
                        "deposit.13": "Deposit currency",
                        "deposit.14": "Select Network",
                        "deposit.15": "Deposit Address",
                        "deposit.16": "Copy Address",
                        "deposit.17": "Please make sure to complete the payment according to the actual payment amount. If the amount does not match, it will not be credited to the account.",
                        "deposit.18": "Exchange rate",
                        "deposit.19": "Under maintenance",
                        "deposit.20": "The fiat currency deposit method is under maintenance. You can enjoy a XXX discount if you use USDT to pay now!",
                        "deposit.21": "Withdrawal Details",
                        "deposit.22": "Actual amount received",
                        "deposit.23": "Please enter or paste the address",
                        "deposit.24": "Please carefully check the network and address information. Any loss of funds due to an incorrect address will be borne by you.",
                        "deposit.25": "Please check the withdrawal account information carefully. Any financial loss caused by account errors will be borne by you.",
                        "deposit.26": "The fiat currency withdrawal function is under maintenance and is temporarily unavailable. Please use USDT to withdraw",
                        "deposit.27": "Withdrawal Methods",
                        "deposit.28": "Withdrawal Currency",
                        "deposit.29": "Withdrawal Address",
                        "deposit.30": "Network",
                        "deposit.31": "deposit.31    /*no value*/",
                        "deposit.32": "deposit.32    /*no value*/"
                    },
                    Ra = {
                        "banner.1": "invite_in.png",
                        "banner.2": "newPlayer_in.png",
                        "banner.3": "check-inin.png",
                        "banner.4": "dailyin.png",
                        "promote.img.1": "banner-invitein.png",
                        "eventItem-Img.1": "banner-newplayin.png",
                        "eventItem-Img.2": "banner-checkin.png",
                        "eventItem-Img.3": "banner-dailyin.png",
                        "eventItem-Img2.1": "R$in.png",
                        "withdraw-Img.1": "goldin.png",
                        "service.img.1": "servicein.png",
                        "popupDial.1": "turntablein.png",
                        "popupDial.2": "turntable_arrowin.png",
                        "popupDial.3": "turntable_moneyin.png",
                        "popupDial.4": "turntable_titlein.png",
                        "popupBag.1": "step_title_1_in.png",
                        "popupBag.2": "step_msg_1_in.png",
                        "popupBag.3": "step_button_in.png"
                    },
                    xa = { ...Ta,
                        ...Ra
                    },
                    Fa = {
                        "common.1": "Deposit",
                        "common.2": "Withdrawals",
                        "common.3": "Confirm",
                        "common.4": "TIPS",
                        "common.5": "Details",
                        "common.6": "Copy successful",
                        "common.7": "Language",
                        "common.8": "Welcome to Slots",
                        "common.9": "Copy",
                        "common.10": "Cancel",
                        "common.11": "Nickname",
                        "common.12": "Go Deposit",
                        "common.13": "minutes",
                        "common.14": "seconds",
                        "common.15": "Network error, please try again later",
                        "home.1": "Casino",
                        "home.2": "Activity",
                        "home.3": "Bonus",
                        "home.4": "Invite",
                        "home.5": "Games",
                        "home.6": "Slot machine",
                        "home.7": "Fishery",
                        "home.8": "Support",
                        "home.9": "    Welcome to Slots,Group is one of the world's most renowned online gambling operators, offering a variety of exciting games such as slot machines, fishing, lotteries and more..The Group has passed all compliance checks and has the legal authorization to conduct all gaming operations involving wagering.We ensure that every player can play in a fair and trustworthy environment and are committed to providing players with the best gaming experience.\n     This platform is restricted to users aged 18 and above. This platform does not assume any legal liability arising from minors using games on this platform.",
                        "about.1": "We have a rich selection of Vegas-style slot games and offer the widest range of games and the most competitive products on the market. All platforms only access and select internationally renowned online gaming platforms to ensure that every player can play in a fair and credible environment. At the same time, the Costa Rica government will also monitor the game platform data to ensure the fairness and authenticity of the game.Have fun playing games at Slots!",
                        "about.2": "About Us",
                        "bottomNav.1": "Promotion",
                        "bottomNav.2": "Information",
                        "info.1": "million monthly",
                        "info.2": "About",
                        "pops.1": "Congratulations",
                        "pops.2": "Deposit <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount1}</span> and get <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount2}</span>! This opportunity is only available once, don't miss it!",
                        "pops.3": "Play Games",
                        "times.1": "ANTES",
                        "times.2": "Chaal Limit",
                        "times.3": "Limits",
                        "times.4": "Max Players",
                        "times.5": "Play now",
                        "times.6": "You have exited the game, do you want to return to the game?",
                        "promote.1": "My invitation",
                        "promote.2": "Today",
                        "promote.3": "All",
                        "promote.4": "Register",
                        "promote.5": "Rewards",
                        "promote.6": "My Rewards",
                        "promote.7": "Received",
                        "promote.8": "Available",
                        "promote.9": "Receive",
                        "promote.10": "Share to your social media",
                        "promote.11": "Share link with your friends",
                        "task.1": "Play",
                        "task.2": "times",
                        "task.3": "Already received",
                        "task.4": "Complete tasks to get rewards",
                        "task.5": "Novice task",
                        "task.6": "Complete the following games and you will receive a cash reward of <span style='color: #fff;font-size: 16rem;'>{amount}</span>",
                        "task.7": "To complete",
                        "task.8": "Completed",
                        "task.9": "Receive {amount}",
                        "task.10": "System tasks",
                        "task.11": "Dear user：\n    According to the anti-money laundering regulations, you need to complete {taskNum} games after completing the recharge before you can withdraw money.",
                        "sign.1": "CHECK IN",
                        "sign.2": "Daily bonus",
                        "sign.3": "Complete the game once to get the reward for the day",
                        "sign.4": "Check-in successful",
                        "service.1": "Customer Service",
                        "service.2": "Common problem",
                        "service.3": "How can I withdraw funds?",
                        "service.4": "Dear user, withdrawal is a privilege for premium members. You can upgrade to premium member by recharging any amount and unlock the withdrawal privilege.",
                        "service.5": "Is this platform worth trusting me?",
                        "service.6": "You can rest assured that we are a brand under the Las Vegas Group and provide 1:1 real gold services. We spare no effort to create the most authentic, safe and fair gaming experience for you.",
                        "service.7": "What should I do if there is a problem with my deposit?",
                        "service.8": "First check the payment record and bank account. If the deduction is successful but not received, please contact the platform customer service and provide the transaction voucher so that the customer service can assist in processing.",
                        "service.8.D": "service.8.D    /*no value*/",
                        "service.9": "Why is the game loading slowly or not opening?",
                        "service.10": "Game loading problems may be caused by network latency, device performance, or platform maintenance. It is recommended to check the network connection or report the problem to customer service for help.",
                        "service.11": "What if the withdrawal fails?",
                        "service.12": "If the withdrawal fails, please check whether your withdrawal account is correct or change the withdrawal account and withdraw again.",
                        "service.12.D": "service.12.D    /*no value*/",
                        "deposit.1": "Online Deposit",
                        "deposit.2": "Choose deposit amount",
                        "deposit.3": "After successful payment, the system will add the amount to your account within 1 to 5 minutes.",
                        "deposit.4": "Extra",
                        "withdrawal.1": "Withdrawable amount:",
                        "withdrawal.2": "Withdrawal amount",
                        "withdrawal.3": "Withdrawal in progress",
                        "withdrawal.4": "Account balance",
                        "withdrawal.5": "Reward Conversion Rules:",
                        "withdrawal.6": "1.The rewards that players get from each bet in the slot game will be converted into cash at a ratio of 1:1 and directly deposited into the player's game account.\r\n2.The account balance is the reward that the player gets from the slot game, but the balance cannot be withdrawn directly\r\n3.The withdrawable amount is the amount after the system converts the account balance 1:1, which can be withdrawn in full to your account",
                        "withdrawal.7": "Withdrawal Account",
                        "withdrawal.8": "withdrawal.8    /*no value*/",
                        "history.1": "Amount",
                        "history.2": "Time",
                        "history.3": "State",
                        "history.4": "Withdrawal Record",
                        "history.5": "The withdrawal account is wrong, please check the account information and reinitiate the withdrawal.",
                        "history.5.D": "history.5.D    /*no value*/",
                        "history.6": "No data",
                        "drawcash.1": "Add withdrawal account",
                        "drawcash.2": "Account Name",
                        "drawcash.3": "Please enter the account holder's name",
                        "drawcash.4": "Withdrawal account",
                        "drawcash.5": "Account Number",
                        "drawcash.6": "Please enter bank account number",
                        "drawcash.7": "Account Number",
                        "drawcash.8": "drawcash.8    /*no value*/",
                        "drawcash.9": "drawcash.9    /*no value*/",
                        "drawcash.10": "Phone number",
                        "drawcash.11": "Please enter your phone number",
                        "drawcash.12": "Format Error",
                        "drawcash.13": "ID number",
                        "drawcash.14": "Please enter the 13-digit ID number",
                        "drawcash.15": "Please enter JAZZCASH account number",
                        "drawcash.16": "Please enter Easypaisa account number",
                        "prop.tip.1": "Dear user, you have accumulated bonus <span style='font-weight: 600; color: #ffc025'>{amount}</span>. In order to let you get familiar with the withdrawal process as soon as possible, please withdraw the money immediately!",
                        "prop.tip.2": "Dear user:<br/>&nbsp;&nbsp;&nbsp;&nbsp;Only premium members can use the withdrawal function. <br/>&nbsp;&nbsp;&nbsp;&nbsp;Deposit any amount to become a premium member and then use the withdrawal function to withdraw money.",
                        "prop.tip.3": "Order details",
                        "prop.tip.4": "Deposit {amount}, Receive {extra}",
                        "prop.tip.5": "Go to payment",
                        "prop.tip.6": "Dear user, this is the first time you have withdrawn money. For the security of your account balance and familiarity with the system withdrawal process, choose <span style='color:#06d0df;'>{amount}</span> to withdraw money. After the first withdrawal is successful, other withdrawal amounts will be unlocked automatically.",
                        "prop.tip.7": "You have a withdrawal request in progress, please check it.",
                        "prop.tip.7.1": "Continue playing",
                        "prop.tip.7.2": "Check it",
                        "prop.tip.7.i": "Dear user:\n    You currently have an unfinished withdrawal request, please go and resolve it.",
                        "prop.tip.8": "Dear user, your account balance is insufficient. You can try to play to win more money and then withdraw money.",
                        "prop.tip.9": "Dear user: Congratulations on your first successful withdrawal. You have successfully unlocked other withdrawal amounts.",
                        "prop.tip.10": "Dear user, due to your frequent withdrawals last time, a cooldown task was triggered. Please complete the task first before making any withdrawals.",
                        "prop.tip.11": "prop.tip.11    /*no value*/",
                        "prop.tip.12": "prop.tip.12    /*no value*/",
                        "eighteen.1": "Set up your account",
                        "eighteen.2": "Username",
                        "eighteen.3": "Please enter your username",
                        "eighteen.4": "Date of Birth",
                        "eighteen.5": "I am over 18 and understand the terms and conditions",
                        "eighteen.6": "Only open to users over 18 years old",
                        "eighteen.7": "Please select your date of birth",
                        "eighteen.8": "Please enter 3-15 characters",
                        "order.info.1": "Order Tracking",
                        "order.info.2": "Withdrawal in progress",
                        "order.info.3": "The system has accepted the withdrawal request and is waiting to be processed...",
                        "order.info.4": "The system has processed the withdrawal request and is waiting to allocate the withdrawal channel...",
                        "order.info.5": "The first time a user withdraws money, they can use the VIP payment channel for free once. The VIP payment channel is being allocated...",
                        "order.info.6": "The user's first withdrawal has been assigned to the VIP channel and will be immediately notified to the bank for remittance...",
                        "order.info.7": "The user's first withdrawal has been assigned to the VIP channel and will be immediately notified to the bank for remittance...",
                        "order.info.8": "The bank has received the remittance request and is in process of remittance. Please check the withdrawal in time.",
                        "order.info.9": "Bank withdrawal processed successfully",
                        "order.info.9.B": "order.info.9.B    /*no value*/",
                        "order.info.10": "Account error, bank processing failed, the withdrawal amount has been returned to your game account, please withdraw again.",
                        "order.info.11": "The free VIP withdrawal channel has been used, and the ordinary withdrawal channel has been assigned to you. The ordinary withdrawal channel is being processed.",
                        "order.info.12": "The regular withdrawal channel is currently used by a large number of people, and it is estimated that it will take <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> hours to process. Please wait patiently or use the VIP withdrawal channel.",
                        "order.info.13": "The regular withdrawal channel is currently used by a large number of people, and it is estimated that it will take {time} hours to process. Please wait patiently or use the VIP withdrawal channel.",
                        "order.info.14": "Number of people in line:",
                        "order.info.15": "Estimated time:",
                        "order.info.16": "Use VIP withdrawal channel",
                        "order.info.17": "By using the VIP withdrawal channel, you can avoid queuing for this withdrawal, and the withdrawal will be processed immediately.",
                        "order.info.18": "Dear users:\n     Now you only need to top up {amount} to enjoy the VIP fast withdrawal channel permanently. No need to queue in the future, withdrawals will be credited to your account immediately.",
                        "order.info.19": "The user top-up system provides fast withdrawal VIP channels, and VIP withdrawal channels are being allocated.",
                        "order.info.20": "The VIP withdrawal channel has been successfully allocated and the withdrawal request is being processed.",
                        "order.info.21": "The user's cash withdrawal amount exceeds {amount} and exceeds the VIP channel fee-free limit. You'll pay a {ratio}% fee on withdrawals. After receiving the fee, the VIP payment channel sends the remittance request to the central bank for processing.",
                        "order.info.22": "VIP payment channel rules:\n     No commission is required for a single withdrawal amount less than {amount}\n     Single withdrawal amount greater than or equal to {amount}, a commission is required, {ratio}% of the withdrawal amount\n     This commission is used to maintain the VIP payment channel to ensure that user withdrawals are credited immediately!",
                        "order.info.23": "Withdrawal commission",
                        "order.info.24": "Pay withdrawal fees",
                        "order.info.25": "Paying Commissions",
                        "order.info.26": "Handling fee <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.27": "Abnormal bank processing: The withdrawal amount is additional personal income. According to the Federal Tax Committee regulations, a personal income tax of 10% of the withdrawal amount is required.",
                        "order.info.28": "Dear users:\n     This withdrawal belongs to your additional personal income. According to the regulations of the Federal Taxation Commission, a 10% personal income tax is required. Your current withdrawal progress is 99.9%. It is only the last step before the withdrawal arrives. After paying the tax, the bank will send money now.",
                        "order.info.29": "Taxes to pay",
                        "order.info.30": "Pay personal tax",
                        "order.info.31": "Personal income tax <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.32": "The bank has received the tax and the remittance is being processed...",
                        "order.info.33": "Bank transfer failed: The withdrawal account information is wrong and needs to be modified.",
                        "order.info.34": "The system received a notification from the bank that the system remittance failed due to incorrect withdrawal account information. Please check your account information carefully.",
                        "order.info.35": "order.info.35    /*no value*/",
                        "order.info.36": "Confirm change",
                        "order.info.37": "To ensure your withdrawal goes through, please double-check your account information.",
                        "order.info.38": "To check",
                        "order.info.39.B": "Dear user:\n     Due to the incorrect account information you submitted this time, your withdrawal application has been temporarily frozen to ensure account security. Please correct your account information and deposit {amount} for verification to lift the restriction. After submitting the correct account information, the central bank will immediately make the remittance.",
                        "order.info.40": "Pay {amount}",
                        "order.info.41": "Change Account Information",
                        "order.info.42": "The bank has received a request to correct the account number and is reprocessing the remittance....",
                        "order.prop.1.A": "order.prop.1.A    /*no value*/",
                        "order.prop.2.A": "order.prop.2.A    /*no value*/",
                        "order.prop.3.A": "order.prop.3.A    /*no value*/",
                        "order.prop.4.A": "order.prop.4.A    /*no value*/",
                        "order.prop.5.A": "order.prop.5.A    /*no value*/",
                        "order.prop.6.A": "order.prop.6.A    /*no value*/",
                        "order.prop.7.A": "order.prop.7.A    /*no value*/",
                        "order.prop.8.A": "order.prop.8.A    /*no value*/",
                        "order.prop.9.A": "order.prop.9.A    /*no value*/",
                        "order.prop.10.A": "order.prop.10.A    /*no value*/",
                        "order.prop.14": "order.prop.14    /*no value*/",
                        "order.prop.15": "order.prop.15    /*no value*/",
                        "order.info.3.A": "order.info.3.A    /*no value*/",
                        "order.info.4.A": "order.info.4.A    /*no value*/",
                        "order.info.5.A": "order.info.5.A    /*no value*/",
                        "order.info.6.A": "order.info.6.A    /*no value*/",
                        "order.info.7.A": "Estimated time：{timer}s",
                        "order.info.8.A": "order.info.8.A    /*no value*/",
                        "order.info.9.A": "order.info.9.A    /*no value*/",
                        "order.info.10.A": "order.info.10.A    /*no value*/",
                        "order.info.27.A": "Abnormal bank processing:This withdrawal amount is additional personal income.Under federal regulations, you are subject to personal income tax of 10% of the withdrawal amount.",
                        "order.info.28.A": "Dear users:\n     This withdrawal belongs to your additional personal income. According to federal regulations, a 10% personal income tax is required. Your current withdrawal progress is 99.9%. It is only the last step before the withdrawal arrives. After paying the tax, the bank will send money now.",
                        "order.info.39.A": "Dear user:\n     Due to the incorrect account information you submitted this time, your withdrawal application has been temporarily frozen to ensure account security. Please correct your account information and deposit {amount} for verification to lift the restriction. After submitting the correct account information, the central bank will immediately make the remittance.",
                        "prop.tip.2.C": "Dear user:<br/>&nbsp;&nbsp;&nbsp;&nbsp;Only premium members can use the withdrawal function. <br/>&nbsp;&nbsp;&nbsp;&nbsp;Deposit any amount to become a premium member and then use the withdrawal function to withdraw money.",
                        "order.prop.2.C": "Select payment channel",
                        "order.prop.5.C": "Normal payment channel",
                        "order.prop.6.C": "Fast payment channel",
                        "order.prop.8.C": "The channel is currently congested, and the estimated withdrawal time is <span style='color: #FFB2C8'>{time} hours</span>.",
                        "order.prop.9.C": "The current channel is clear, and the estimated withdrawal time is <span style='color: #D4FFB2'>5 minutes</span>.",
                        "order.prop.16": "Please select the payment channel. Once confirmed, this withdrawal cannot be modified.",
                        "order.prop.17": "After the payment channel is confirmed, this withdrawal cannot be changed.",
                        "order.prop.18": "Channel is clear",
                        "order.prop.19": "Channel congested",
                        "order.info.3.C.1": "You have selected the fast payment channel, the system is processing...",
                        "order.info.3.C.2": "You have selected the normal payment channel, the system is processing...",
                        "order.info.4.C.1": "The system is assigning you a fast payment channel, please wait...",
                        "order.info.4.C.2": "The system is assigning you a normal payment channel, please wait...",
                        "order.info.8.C": "The withdrawal request has been forwarded to the Central Bank and the bank is processing it...",
                        "order.info.11.C": "The withdrawal channel is being allocated, please wait patiently...",
                        "order.info.12.C.1": "The system failed to allocate a quick remittance channel, please process it.",
                        "order.info.12.C.2": "The withdrawal has been assigned to the normal payment channel and is waiting in line for processing. It should take <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> hours. Please wait patiently or use the fast payment channel.",
                        "order.info.13.C.1": "The system failed to allocate a quick remittance channel, please process it.",
                        "order.info.13.C.2": "The withdrawal has been assigned to the normal payment channel and is waiting in line for processing. It should take {time} hours. Please wait patiently or use the fast payment channel.",
                        "order.info.16.C.1": "Check the details",
                        "order.info.16.C.2": "Use the fast payment channel",
                        "order.info.17.C.1": "The system has detected that you currently do not meet the requirements for using the fast withdrawal channel. The fast withdrawal channel is only open to users with deposits of more than {totalAmount}. Your current deposit is insufficient. In order for the fast channel to process your withdrawal request in time, please deposit another <span style='color: yellow;font-size: 14rem;'>{amount}</span>. The system will process your withdrawal request immediately after meeting the conditions.",
                        "order.info.17.C.2": "By using the fast payment channel, you can avoid the withdrawal queue and your withdrawal will be processed immediately.",
                        "order.info.19.C.1": "The user recharge system is assigning you to the fast payment channel...",
                        "order.info.19.C.2": "The user recharge system provides a fast payment channel, and the fast payment channel is being allocated.",
                        "order.info.20.C": "The fast payment channel has been allocated successfully and the withdrawal request is being processed.",
                        "order.info.21.C": "The user's cash withdrawal amount exceeds {amount} and exceeds the fee-free limit of the fast withdrawal channel. Withdrawals are subject to a {ratio}% fee. After the fast payment channel receives the fee, it sends the remittance request to the central bank for processing.",
                        "order.info.22.C.T1": "Rules for the fast payment channel:\n      No commission is required for a single withdrawal amount less than {amount}\n     Single withdrawal amount greater than or equal to {amount}, a commission is required, {ratio}% of the withdrawal amount\n     This commission is used to maintain the fast payment channel to ensure that user withdrawals are credited immediately!",
                        "order.info.22.C.T2": "Dear user:\n     A single withdrawal amount greater than or equal to {amount} will be charged a commission of 5% of the withdrawal amount. This commission is used to maintain the fast payment channel.\n     The minimum single deposit amount is Rs300.00. Since your payment amount this time is less than Rs300.00, the system will automatically adjust it to Rs300.00. You can also choose to cancel the current withdrawal request and re-initiate it.",
                        "order.info.22.C.T3": "Cancel order",
                        "order.info.22.C.T4": "Pay fees",
                        "order.info.28.C": "Dear users:\n     This withdrawal belongs to your additional personal income. According to the regulations of the Federal Taxation Commission, a 10% personal income tax is required. Your current withdrawal progress is 99.9%. It is only the last step before the withdrawal arrives. After paying the tax, the bank will send money now.\n     The minimum single deposit amount is Rs300.00. Since your payment amount this time is less than Rs300.00, the system will automatically adjust it to Rs300.00. You can also choose to cancel the current withdrawal request and re-initiate it.",
                        "order.info.30.C.T1": "Pay taxes",
                        "order.info.43": "The bank will remit your withdrawal amount.",
                        "order.info.44": "You receive the withdrawal amount.",
                        "order.info.45": "Withdrawal request paused",
                        "order.info.46": "Withdrawal request processing failed.",
                        "prop.tip.32.F": "prop.tip.32.F    /*no value*/",
                        "prop.tip.33.F": "prop.tip.33.F    /*no value*/",
                        "prop.tip.33.F.1": "prop.tip.33.F.1    /*no value*/",
                        "prop.tip.34.F": "prop.tip.34.F    /*no value*/",
                        "prop.tip.35.F": "prop.tip.35.F    /*no value*/",
                        "prop.tip.36.F": "prop.tip.36.F    /*no value*/",
                        "prop.tip.37.F": "prop.tip.37.F    /*no value*/",
                        "prop.tip.38.F": "prop.tip.38.F    /*no value*/",
                        "prop.tip.39.F": "prop.tip.39.F    /*no value*/",
                        "prop.tip.40.F": "prop.tip.40.F    /*no value*/",
                        "prop.tip.41.F": "prop.tip.41.F    /*no value*/",
                        "order.info.47": "order.info.47    /*no value*/",
                        "order.info.48": "order.info.48    /*no value*/",
                        "order.info.49": "order.info.49    /*no value*/",
                        "order.info.50": "order.info.50    /*no value*/",
                        "order.info.51": "order.info.51    /*no value*/",
                        "order.info.52": "order.info.52    /*no value*/",
                        "order.info.53": "order.info.53    /*no value*/",
                        "order.info.54": "order.info.54    /*no value*/",
                        "order.info.7.D": "VIP payment channels have been assigned and withdrawal requests have been sent to the exchange...",
                        "order.info.8.D": "The exchange has accepted the withdrawal request and is processing the withdrawal...",
                        "order.info.9.D": "Withdrawal processed successfully",
                        "order.info.10.D": "order.info.10.D    /*no value*/",
                        "order.info.21.D": "The user withdraws more than {amount}, which exceeds the VIP channel fee-free limit. Withdrawals are subject to a {ratio}% fee.",
                        "order.info.22.D": "Dear users:\n        We are committed to providing users with a better withdrawal experience. If the single withdrawal amount exceeds {amount} using the VIP payment channel, the VIP channel will charge {ratio}% of the withdrawal amount as a handling fee.\n       After paying the withdrawal fee, the withdrawal request will be processed immediately",
                        "order.info.27.D": "The withdrawal processing is abnormal. The withdrawal amount is additional personal income. According to the national tax law, a personal income tax of 10% of the withdrawal amount needs to be paid.",
                        "order.info.28.D": "Dear users:\n      This withdrawal belongs to your personal additional income. According to the national tax law, a 10% personal income tax is required. Your current withdrawal progress is 99.9%.Only one step left to withdraw cash.After the tax payment, the amount will be immediately submitted to the exchange for remittance.",
                        "order.info.32.D": "Withdrawal request has been sent to the exchange for processing...",
                        "order.info.33.D": "Withdrawal failed: Wrong network type",
                        "order.info.34.D": "order.info.34.D    /*no value*/",
                        "order.info.37.D": "order.info.37.D    /*no value*/",
                        "order.info.39.D": "order.info.39.D    /*no value*/",
                        "order.info.41.D": "order.info.41.D    /*no value*/",
                        "order.info.42.D": "order.info.42.D    /*no value*/",
                        "deposit.5": "Order amount",
                        "deposit.6": "Order time",
                        "deposit.7": "Order Number",
                        "deposit.8": "Payment Methods",
                        "deposit.9": "USDT",
                        "deposit.10": "PHP",
                        "deposit.11": "Pay details",
                        "deposit.12": "Actual amount paid",
                        "deposit.13": "Deposit currency",
                        "deposit.14": "Select Network",
                        "deposit.15": "Deposit Address",
                        "deposit.16": "Copy Address",
                        "deposit.17": "Please make sure to complete the payment according to the actual payment amount. If the amount does not match, it will not be credited to the account.",
                        "deposit.18": "Exchange rate",
                        "deposit.19": "Under maintenance",
                        "deposit.20": "The fiat currency deposit method is under maintenance. You can enjoy a XXX discount if you use USDT to pay now!",
                        "deposit.21": "Withdrawal Details",
                        "deposit.22": "Actual amount received",
                        "deposit.23": "Please enter or paste the address",
                        "deposit.24": "Please carefully check the network and address information. Any loss of funds due to an incorrect address will be borne by you.",
                        "deposit.25": "Please check the withdrawal account information carefully. Any financial loss caused by account errors will be borne by you.",
                        "deposit.26": "The fiat currency withdrawal function is under maintenance and is temporarily unavailable. Please use USDT to withdraw",
                        "deposit.27": "Withdrawal Methods",
                        "deposit.28": "Withdrawal Currency",
                        "deposit.29": "Withdrawal Address",
                        "deposit.30": "Network",
                        "deposit.31": "deposit.31    /*no value*/",
                        "deposit.32": "deposit.32    /*no value*/",
                        "prop.tip.13.E": "Your withdrawal has been sent to the bank for processing and is expected to arrive within 2 minutes, please check.",
                        "prop.tip.14.E": "Go to upgrade",
                        "prop.tip.15.E": "Dear user: \n      According to anti-money laundering regulations, you need to complete the game and meet the turnover requirements before you can withdraw money.",
                        "prop.tip.16.E": "Insufficient withdrawal balance",
                        "prop.tip.17.E": "Dear user:\n     Your number of withdrawals today has reached the maximum limit. Please try to withdraw money after 00:00:00 the next day.\n     Withdrawal rules for your current membership level\n     Number of withdrawals per day: 1 times\n     Each withdrawal limit: ₱20.00\n     You can upgrade your membership level to enjoy more withdrawal rights",
                        "prop.tip.17.F": "prop.tip.17.F    /*no value*/",
                        "prop.tip.18.E": "Upgrade to",
                        "prop.tip.19.E": "Platinum",
                        "prop.tip.20.E": "Diamond",
                        "prop.tip.21.E": "Withdrawal rights:",
                        "prop.tip.22.E": "1.Unlock withdrawal options:",
                        "prop.tip.23.E": "2.Number of withdrawals per day:X times",
                        "prop.tip.24.E": "Deposit xxx",
                        "prop.tip.25.E": "Upgrade requirements: Single deposit≥XXX",
                        "prop.tip.26.E": "Dear user:\n     Congratulations, you have unlocked the withdrawal permission. You have currently unlocked the withdrawal amount option {amount}",
                        "prop.tip.27.E": "Dear User:\n     Your membership level only unlocks the withdrawal option of {amount}. Please choose {amount} for withdrawal, or upgrade your membership level to unlock more withdrawal options.",
                        "prop.tip.28.E": "Black Diamond",
                        "prop.tip.29.E": "All",
                        "prop.tip.30.E": "This withdrawal amount has not been unlocked yet",
                        "prop.tip.31.E": "Dear user:\n     The current withdrawal times have been used up. You can upgrade your membership level to unlock more withdrawal benefits."
                    },
                    qa = {
                        "banner.1": "invite_pk.png",
                        "banner.2": "newPlayer_pk.png",
                        "banner.3": "check-inpk.png",
                        "banner.4": "dailypk.png",
                        "promote.img.1": "banner-invitepk.png",
                        "eventItem-Img.1": "banner-newplaypk.png",
                        "eventItem-Img.2": "banner-checkpk.png",
                        "eventItem-Img.3": "banner-dailypk.png",
                        "eventItem-Img2.1": "R$pk.png",
                        "withdraw-Img.1": "goldpk.png",
                        "service.img.1": "servicepk.png",
                        "popupDial.1": "turntablepk.png",
                        "popupDial.2": "turntable_arrowpk.png",
                        "popupDial.3": "turntable_moneypk.png",
                        "popupDial.4": "turntable_titlepk.png",
                        "popupBag.1": "step_title_1_pk.png",
                        "popupBag.2": "step_msg_1_pk.png",
                        "popupBag.3": "step_button_pk.png"
                    },
                    Oa = { ...Fa,
                        ...qa
                    },
                    Ba = {
                        "common.1": "আমানত",
                        "common.2": "প্রত্যাহার",
                        "common.3": "নিশ্চিত করুন",
                        "common.4": "টিপস",
                        "common.5": "বিস্তারিত",
                        "common.6": "কপি সাফল্য",
                        "common.7": "ভাষা",
                        "common.8": "স্লটে স্বাগতম",
                        "common.9": "অনুলিপি",
                        "common.10": "বাতিল করুন",
                        "common.11": "ডাক নাম",
                        "common.12": "ডিপোজিটে যান",
                        "common.13": "মিনিট",
                        "common.14": "সেকেন্ড",
                        "common.15": "নেটওয়ার্ক ত্রুটি, পরে আবার চেষ্টা করুন",
                        "common.16": "যান",
                        "home.1": "ক্যাসিনো",
                        "home.2": "কার্যকলাপ",
                        "home.3": "বোনাস",
                        "home.4": "আমন্ত্রণ",
                        "home.5": "খেলা",
                        "home.6": "স্লট মেশিন",
                        "home.7": "মৎস্য",
                        "home.8": "সমর্থন",
                        "home.9": "     স্লট-এ স্বাগতম, গ্রুপ বিশ্বের অন্যতম বিখ্যাত অনলাইন জুয়া অপারেটর, যা স্লট, মাছ ধরা, লটারি এবং আরও অনেক কিছুর মতো উত্তেজনাপূর্ণ গেমের একটি বিস্তৃত অফার করে। গ্রুপটি সমস্ত সম্মতি পরীক্ষায় উত্তীর্ণ হয়েছে এবং বেটিং জড়িত সমস্ত গেমিং অপারেশন পরিচালনা করার আইনি অনুমোদন রয়েছে৷ আমরা নিশ্চিত করি যে প্রতিটি খেলোয়াড় একটি ন্যায্য এবং বিশ্বস্ত পরিবেশে গেম খেলতে পারে এবং খেলোয়াড়দের সেরা গেমিং অভিজ্ঞতা প্রদান করতে প্রতিশ্রুতিবদ্ধ।\n\n\n     এই প্ল্যাটফর্মটি শুধুমাত্র 18 বছর বা তার বেশি বয়সী ব্যবহারকারীদের জন্য উপলব্ধ। এই প্ল্যাটফর্মটি এই প্ল্যাটফর্মে অপ্রাপ্তবয়স্কদের গেমের ব্যবহার থেকে উদ্ভূত কোনো আইনি দায় স্বীকার করে না।",
                        "about.1": "আমাদের কাছে ভেগাস শৈলীর স্লটগুলির একটি বিস্তৃত সংগ্রহ রয়েছে এবং আমরা বাজারে বিস্তৃত গেম এবং সর্বাধিক প্রতিযোগিতামূলক পণ্য সরবরাহ করি। আমরা একটি আন্তর্জাতিকভাবে খ্যাতিমান অনলাইন জুয়া অপারেটর হিসাবে ন্যায্যতা এবং সততার প্রতি প্রতিশ্রুতিবদ্ধ যেটি কঠোর স্ক্রিনিংয়ের মধ্য দিয়ে যায়। প্রতিটি প্লেয়ার যাতে একটি ন্যায্য এবং বিশ্বস্ত পরিবেশে খেলতে পারে তা নিশ্চিত করার জন্য সমস্ত প্ল্যাটফর্ম শুধুমাত্র আন্তর্জাতিকভাবে বিখ্যাত অনলাইন গেমিং প্ল্যাটফর্মগুলি অ্যাক্সেস করে এবং নির্বাচন করে। একই সময়ে, কোস্টারিকান সরকার গেমের ন্যায্যতা এবং সত্যতা নিশ্চিত করতে গেম প্ল্যাটফর্মের ডেটাও পর্যবেক্ষণ করবে। ফরচুন স্লটে গেমিং উপভোগ করুন!",
                        "about.2": "আমাদের সম্পর্কে",
                        "bottomNav.1": "প্রমোশন",
                        "bottomNav.2": "তথ্য",
                        "info.1": "মিলিয়ন মাসিক",
                        "info.2": "সম্পর্কে",
                        "pops.1": "অভিনন্দন",
                        "pops.2": "<span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount1}</span> জমা করুন এবং <span style='color:#F6AF23;font-weight: bolder;font-size: 20rem;font-family: Khand;'>{amount2}</span> পান! এই সুযোগটি একবারই আসে, মিস করবেন না",
                        "pops.3": "গেম খেলুন",
                        "times.1": "times.1    /*no value*/",
                        "times.2": "times.2    /*no value*/",
                        "times.3": "times.3    /*no value*/",
                        "times.4": "times.4    /*no value*/",
                        "times.5": "times.5    /*no value*/",
                        "times.6": "times.6    /*no value*/",
                        "promote.1": "আমার আমন্ত্রণ",
                        "promote.2": "আজ",
                        "promote.3": "সব",
                        "promote.4": "রেকর্ড",
                        "promote.5": "পুরস্কার",
                        "promote.6": "আমার পুরস্কার",
                        "promote.7": "প্রাপ্ত",
                        "promote.8": "পাওয়া যায়",
                        "promote.9": "সংগ্রহ করুন",
                        "promote.10": "আপনার সামাজিক মিডিয়া শেয়ার করুন",
                        "promote.11": "আপনার বন্ধুদের সাথে লিঙ্ক শেয়ার করুন",
                        "promote.12": "সফলভাবে প্রাপ্ত",
                        "promote.13": "অভ্যর্থনা ব্যর্থ হয়েছে",
                        "task.1": "খেলুন",
                        "task.2": "বার",
                        "task.3": "ইতিমধ্যেই পেয়েছি",
                        "task.4": "পুরষ্কার পেতে কাজগুলি সম্পূর্ণ করুন",
                        "task.5": "নবাগত মিশন",
                        "task.6": "নিম্নলিখিত গেমগুলি সম্পূর্ণ করুন এবং আপনি <span style='color: #fff;font-size: 16rem;'>{amount}</span> নগদ পুরস্কার পাবেন",
                        "task.7": "সম্পন্ন করতে যাও",
                        "task.8": "সম্পন্ন হয়েছে",
                        "task.9": "সংগ্রহ করুন {amount}",
                        "task.10": "সিস্টেম টাস্ক",
                        "task.11": "task.11    /*no value*/",
                        "sign.1": "চেক ইন করুন",
                        "sign.2": "দৈনিক বোনাস",
                        "sign.3": "দিনের পুরষ্কার পেতে একবার গেমটি সম্পূর্ণ করুন",
                        "sign.4": "চেক-ইন সফল হয়েছে",
                        "service.1": "গ্রাহক সেবা",
                        "service.2": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
                        "service.3": "আমি কিভাবে তহবিল উত্তোলন করতে পারি?",
                        "service.4": "প্রিয় ব্যবহারকারী, উত্তোলন প্রিমিয়াম সদস্যদের বিশেষাধিকার। আপনি যেকোনো পরিমাণ রিচার্জ করে প্রিমিয়াম সদস্যে আপগ্রেড করতে পারেন এবং প্রত্যাহারের অধিকার আনলক করতে পারেন।",
                        "service.5": "এই প্ল্যাটফর্মটি কি আমার বিশ্বাসের যোগ্য?",
                        "service.6": "আপনি নিশ্চিন্ত থাকতে পারেন যে আমরা লাস ভেগাস গ্রুপের একটি ব্র্যান্ড এবং 1:1 রিয়েল গোল্ড পরিষেবা প্রদান করি। আমরা আপনার জন্য সবচেয়ে বাস্তবসম্মত, নিরাপদ এবং ন্যায্য গেমিং অভিজ্ঞতা তৈরি করতে কোনো প্রচেষ্টাই ছাড়ি না।",
                        "service.7": "আমার আমানত নিয়ে কোনো সমস্যা হলে আমার কী করা উচিত?",
                        "service.8": "প্রথমে পেমেন্ট রেকর্ড এবং ব্যাঙ্ক অ্যাকাউন্ট চেক করুন। যদি কর্তন সফল হয় কিন্তু প্রাপ্ত না হয়, অনুগ্রহ করে প্ল্যাটফর্মের গ্রাহক পরিষেবার সাথে যোগাযোগ করুন এবং লেনদেন ভাউচার প্রদান করুন যাতে গ্রাহক পরিষেবা প্রক্রিয়াকরণে সহায়তা করতে পারে।",
                        "service.8.D": "service.8.D    /*no value*/",
                        "service.9": "কেন গেমটি ধীরে ধীরে লোড হচ্ছে বা খুলছে না?",
                        "service.10": "নেটওয়ার্ক লেটেন্সি, ডিভাইস পারফরম্যান্স বা প্ল্যাটফর্ম রক্ষণাবেক্ষণের কারণে গেম লোডিং সমস্যা হতে পারে। নেটওয়ার্ক সংযোগ চেক করার বা সাহায্যের জন্য গ্রাহক পরিষেবাতে সমস্যাটি রিপোর্ট করার পরামর্শ দেওয়া হয়",
                        "service.11": "যদি প্রত্যাহার ব্যর্থ হয়?",
                        "service.12": "যদি প্রত্যাহার ব্যর্থ হয়, অনুগ্রহ করে আপনার প্রত্যাহার অ্যাকাউন্টটি সঠিক কিনা তা পরীক্ষা করুন বা প্রত্যাহার অ্যাকাউন্ট পরিবর্তন করুন এবং আবার উত্তোলন করুন।",
                        "service.12.D": "service.12.D    /*no value*/",
                        "deposit.1": "অনলাইন ডিপোজিট",
                        "deposit.2": "ডিপোজিট পরিমাণ নির্বাচন করুন",
                        "deposit.3": "অর্থপ্রদান সফল হওয়ার পরে, সিস্টেমটি 1 থেকে 5 মিনিটের মধ্যে আপনার অ্যাকাউন্টে পরিমাণ যোগ করবে।",
                        "deposit.4": "অতিরিক্ত",
                        "withdrawal.1": "যে পরিমাণ প্রত্যাহার করা যায়:",
                        "withdrawal.2": "প্রত্যাহারের পরিমাণ",
                        "withdrawal.3": "প্রত্যাহার প্রক্রিয়াধীন",
                        "withdrawal.4": "অ্যাকাউন্ট ব্যালেন্স",
                        "withdrawal.5": "withdrawal.5    /*no value*/",
                        "withdrawal.6": "withdrawal.6    /*no value*/",
                        "withdrawal.7": "প্রত্যাহার অ্যাকাউন্ট",
                        "withdrawal.8": "withdrawal.8    /*no value*/",
                        "history.1": "পরিমাণ",
                        "history.2": "সময়",
                        "history.3": "রাষ্ট্র",
                        "history.4": "প্রত্যাহারের রেকর্ড",
                        "history.5": "প্রত্যাহার অ্যাকাউন্টে একটি ত্রুটি আছে, অনুগ্রহ করে অ্যাকাউন্টের তথ্য পরীক্ষা করুন এবং আবার তোলা শুরু করুন।",
                        "history.5.D": "history.5.D    /*no value*/",
                        "history.6": "কোনো ডেটা নেই",
                        "drawcash.1": "প্রত্যাহার অ্যাকাউন্ট যোগ করুন",
                        "drawcash.2": "অ্যাকাউন্টের মালিকের নাম",
                        "drawcash.3": "অ্যাকাউন্ট মালিকের নাম লিখুন",
                        "drawcash.4": "অ্যাকাউন্টের ধরন",
                        "drawcash.5": "অ্যাকাউন্ট নম্বর",
                        "drawcash.6": "ব্যাঙ্ক অ্যাকাউন্ট নম্বর লিখুন",
                        "drawcash.7": "অ্যাকাউন্ট নম্বর",
                        "drawcash.8": "drawcash.8    /*no value*/",
                        "drawcash.9": "drawcash.9    /*no value*/",
                        "drawcash.10": "ফোন নম্বর",
                        "drawcash.11": "আপনার ফোন নম্বর লিখুন",
                        "drawcash.12": "বিন্যাস ত্রুটি",
                        "drawcash.13": "drawcash.13    /*no value*/",
                        "drawcash.14": "drawcash.14    /*no value*/",
                        "drawcash.15": "অনুগ্রহ করে NAGAD অ্যাকাউন্ট নম্বর লিখুন",
                        "drawcash.16": "অনুগ্রহ করে BKASH অ্যাকাউন্ট নম্বর লিখুন",
                        "prop.tip.1": "প্রিয় ব্যবহারকারী, আপনি বোনাস <span style='font-weight: 600; color: #ffc025'>{amount}</span> অর্জন করেছেন। যত তাড়াতাড়ি সম্ভব প্রত্যাহার প্রক্রিয়ার সাথে নিজেকে পরিচিত করার জন্য, অনুগ্রহ করে অবিলম্বে টাকা তুলে নিন!",
                        "prop.tip.2": "প্রিয় ব্যবহারকারী:\n     প্রত্যাহার ফাংশন ভিআইপি সদস্যদের জন্য একচেটিয়া বিশেষাধিকার\n     আপনি VIP সদস্যপদে আপগ্রেড করতে পারেন এবং যেকোনো পরিমাণ রিচার্জ করে প্রত্যাহারের অধিকার আনলক করতে পারেন।",
                        "prop.tip.3": "অর্ডার বিশদ",
                        "prop.tip.4": "{amount} জমা করুন, {extra} পান",
                        "prop.tip.5": "ডিপোজিটে যান",
                        "prop.tip.6": "প্রিয় ব্যবহারকারী：\n     এই প্রথম আপনার টাকা তোলা। আপনার অ্যাকাউন্ট ব্যালেন্সের নিরাপত্তা এবং সিস্টেম প্রত্যাহার প্রক্রিয়ার সাথে পরিচিতির জন্য, প্রত্যাহার করার জন্য অনুগ্রহ করে <span style='color:#06d0df;'>{amount}</span> নির্বাচন করুন। প্রথম প্রত্যাহার সফল হওয়ার পরে, অন্যান্য প্রত্যাহারের পরিমাণ স্বয়ংক্রিয়ভাবে আনলক হয়ে যাবে।",
                        "prop.tip.7": "prop.tip.7    /*no value*/",
                        "prop.tip.7.1": "prop.tip.7.1    /*no value*/",
                        "prop.tip.7.2": "prop.tip.7.2    /*no value*/",
                        "prop.tip.7.i": "প্রিয় ব্যবহারকারী:\n     আপনার কাছে বর্তমানে একটি অসামান্য প্রত্যাহারের অনুরোধ রয়েছে, দয়া করে যান এবং এটি সমাধান করুন৷",
                        "prop.tip.8": "প্রিয় ব্যবহারকারী：\n     আপনার অ্যাকাউন্টের ব্যালেন্স অপর্যাপ্ত, আপনি আরও টাকা জিততে গেম খেলার চেষ্টা করতে পারেন এবং তারপরে টাকা তুলতে পারেন।",
                        "prop.tip.9": "প্রিয় ব্যবহারকারী:\r\n     আপনার প্রথম সফল প্রত্যাহার জন্য অভিনন্দন. আপনি সফলভাবে অতিরিক্ত উত্তোলনের পরিমাণ আনলক করেছেন।",
                        "prop.tip.10": "প্রিয় ব্যবহারকারী:\n     আপনার গতবার ঘন ঘন প্রত্যাহার করার কারণে, কুলডাউন টাস্কটি ট্রিগার করা হয়েছিল। একটি প্রত্যাহার করার আগে প্রথমে টাস্ক সম্পূর্ণ করুন.",
                        "prop.tip.11": "prop.tip.11    /*no value*/",
                        "prop.tip.12": "অর্ডার পরিমাণ অনুযায়ী অর্থ প্রদান করুন. যদি অর্ডারের পরিমাণ প্রকৃত অর্থপ্রদানের পরিমাণের সাথে মেলে না, তবে আমানত ফেরত দেওয়া হবে না!",
                        "eighteen.1": "আপনার অ্যাকাউন্ট সেট আপ",
                        "eighteen.2": "ব্যবহারকারীর নাম",
                        "eighteen.3": "অনুগ্রহ করে আপনার ব্যবহারকারীর নাম লিখুন৷",
                        "eighteen.4": "জন্ম তারিখ",
                        "eighteen.5": "আমার বয়স 18 বছরের বেশি এবং আমি শর্তাবলী বুঝতে পারি।",
                        "eighteen.6": "শুধুমাত্র ১৮ বছরের বেশি বয়সী ব্যবহারকারীদের জন্য উন্মুক্ত",
                        "eighteen.7": "আপনার জন্ম তারিখ নির্বাচন করুন।",
                        "eighteen.8": "অনুগ্রহ করে 3-15৫টি অক্ষর লিখুন",
                        "order.info.1": "অর্ডার ট্র্যাকিং",
                        "order.info.2": "প্রত্যাহার অগ্রগতি",
                        "order.info.3": "সিস্টেম প্রত্যাহারের অনুরোধ গ্রহণ করেছে এবং প্রক্রিয়া করার জন্য অপেক্ষা করছে...",
                        "order.info.4": "সিস্টেমটি প্রত্যাহারের অনুরোধ প্রক্রিয়া করেছে এবং প্রত্যাহারের চ্যানেল বরাদ্দ করার জন্য অপেক্ষা করছে...",
                        "order.info.5": "প্রথমবার একজন ব্যবহারকারী টাকা উত্তোলন করলে, তারা একবার বিনামূল্যে ভিআইপি পেমেন্ট চ্যানেল ব্যবহার করতে পারবেন। ভিআইপি পেমেন্ট চ্যানেল বরাদ্দ করা হচ্ছে...",
                        "order.info.6": "ব্যবহারকারীর প্রথম প্রত্যাহার VIP চ্যানেলে বরাদ্দ করা হয়েছে এবং প্রক্রিয়াকরণের জন্য ব্যাঙ্কে পাঠানো হবে...",
                        "order.info.7": "ব্যবহারকারীর প্রথম প্রত্যাহার VIP চ্যানেলে বরাদ্দ করা হয়েছে এবং প্রক্রিয়াকরণের জন্য ব্যাঙ্কে পাঠানো হবে...",
                        "order.info.8": "প্রত্যাহারের অনুরোধ কেন্দ্রীয় ব্যাংকের কাছে পাঠানো হয়েছে এবং ব্যাংক এটি প্রক্রিয়া করছে...",
                        "order.info.9": "ব্যাঙ্ক উত্তোলন সফলভাবে প্রক্রিয়া করা হয়েছে",
                        "order.info.9.B": "order.info.9.B    /*no value*/",
                        "order.info.10": "অ্যাকাউন্টের ত্রুটি, ব্যাঙ্ক প্রক্রিয়াকরণ ব্যর্থ হয়েছে, আপনার গেম অ্যাকাউন্টে তোলার পরিমাণ ফেরত দেওয়া হয়েছে, অনুগ্রহ করে আবার প্রত্যাহার করুন।",
                        "order.info.11": "বিনামূল্যে ভিআইপি প্রত্যাহার চ্যানেল ব্যবহার করা হয়েছে, সাধারণ প্রত্যাহার চ্যানেল বরাদ্দ করা হয়েছে, এবং প্রত্যাহার সারিবদ্ধ করা হচ্ছে।",
                        "order.info.12": "সাধারন প্রত্যাহার চ্যানেল সারি প্রক্রিয়াকরণে <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{time}</span> ঘন্টা সময় লাগবে৷ অনুগ্রহ করে ধৈর্য ধরে অপেক্ষা করুন বা ভিআইপি তোলার চ্যানেল ব্যবহার করুন",
                        "order.info.13": "সাধারন প্রত্যাহার চ্যানেল সারি প্রক্রিয়াকরণে {time} ঘন্টা সময় লাগবে৷ অনুগ্রহ করে ধৈর্য ধরে অপেক্ষা করুন বা ভিআইপি তোলার চ্যানেল ব্যবহার করুন",
                        "order.info.14": "লাইনে থাকা লোকের সংখ্যা",
                        "order.info.15": "আনুমানিক সময়",
                        "order.info.16": "ভিআইপি প্রত্যাহার চ্যানেল ব্যবহার করুন",
                        "order.info.17": "VIP উত্তোলন চ্যানেল ব্যবহার করে, আপনি এই উত্তোলনের জন্য লাইনে দাঁড়ানো এড়াতে পারবেন এবং উত্তোলনটি তাৎক্ষণিকভাবে প্রক্রিয়া করা হবে।",
                        "order.info.18": "প্রিয় ব্যবহারকারী:\n     স্থায়ীভাবে ভিআইপি দ্রুত তোলার চ্যানেল উপভোগ করতে এখন আপনাকে শুধুমাত্র <span style='color: yellow;font-weight: bolder;font-size: 14rem;'>{amount}</span> টপ আপ করতে হবে। ভবিষ্যতে সারিবদ্ধ হওয়ার দরকার নেই, এবং প্রত্যাহার অবিলম্বে আপনার অ্যাকাউন্টে জমা হবে।",
                        "order.info.19": "ব্যবহারকারীর রিচার্জ সিস্টেম একটি ভিআইপি দ্রুত তোলার চ্যানেল প্রদান করে এবং ভিআইপি তোলার চ্যানেল বরাদ্দ করা হচ্ছে।",
                        "order.info.20": "ভিআইপি তোলার চ্যানেলটি সফলভাবে বরাদ্দ করা হয়েছে এবং প্রত্যাহারের অনুরোধ প্রক্রিয়া করা হচ্ছে।",
                        "order.info.21": "ব্যবহারকারীর তোলার পরিমাণ {amount} ছাড়িয়ে গেছে, যা ভিআইপি চ্যানেলের ফি-মুক্ত সীমা ছাড়িয়ে গেছে। প্রত্যাহার একটি {ratio}% ফি সাপেক্ষে. ফি পাওয়ার পর, ভিআইপি পেমেন্ট চ্যানেল প্রক্রিয়াকরণের জন্য কেন্দ্রীয় ব্যাংকের কাছে রেমিট্যান্সের অনুরোধ পাঠায়।",
                        "order.info.22": "ভিআইপি পেমেন্ট চ্যানেলের নিয়ম:\n     একক প্রত্যাহারের পরিমাণ <{amount}, কোনো কমিশন নেই\n     যদি একক টাকা তোলার পরিমাণ ≥{amount} হয়, তাহলে প্রত্যাহারের পরিমাণের {ratio}% কমিশন চার্জ করা হবে।\n     এই হ্যান্ডলিং ফি ভিআইপি পেমেন্ট চ্যানেল বজায় রাখার জন্য ব্যবহার করা হয় যাতে ব্যবহারকারীর তোলা অবিলম্বে জমা হয়!",
                        "order.info.23": "প্রত্যাহার কমিশন",
                        "order.info.24": "প্রত্যাহার ফি প্রদান করুন",
                        "order.info.25": "কমিশন প্রদান করুন",
                        "order.info.26": "হ্যান্ডলিং ফি <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.27": "ব্যাঙ্ক প্রক্রিয়াকরণ ব্যতিক্রম: উত্তোলনের পরিমাণ অতিরিক্ত ব্যক্তিগত আয়। বাংলাদেশ অভ্যন্তরীণ রাজস্ব পরিষেবার প্রবিধান অনুযায়ী, উত্তোলন উত্তোলনের পরিমাণের 10% ব্যক্তিগত আয়করের অধীন।",
                        "order.info.28": "প্রিয় ব্যবহারকারী:\n     এই প্রত্যাহার আপনার ব্যক্তিগত অতিরিক্ত আয়. বাংলাদেশ ট্যাক্স ব্যুরোর প্রবিধান অনুযায়ী, ব্যাংককে {radio}% ব্যক্তিগত আয়কর সংগ্রহ করতে হবে। আপনার বর্তমান প্রত্যাহার অগ্রগতি 99.9%, এবং প্রত্যাহার প্রাপ্তির আগে শুধুমাত্র একটি ধাপ বাকি আছে। ট্যাক্স পরিশোধের পর, ব্যাংক অবিলম্বে টাকা স্থানান্তর করবে।",
                        "order.info.29": "প্রদেয় কর",
                        "order.info.30": "ব্যক্তিগত কর প্রদান করুন",
                        "order.info.31": "ব্যক্তিগত আয়কর <span style='color: #06d0df;'>{amount}</span>",
                        "order.info.32": "ব্যাংক ট্যাক্স পেয়েছে এবং রেমিট্যান্স প্রক্রিয়া করছে...",
                        "order.info.33": "ব্যাঙ্ক স্থানান্তর ব্যর্থ হয়েছে: প্রত্যাহার অ্যাকাউন্টের তথ্য ভুল এবং সংশোধন করা প্রয়োজন৷",
                        "order.info.34": "সিস্টেম ব্যাংকের একটি নোটিশ পেয়েছে যে, উত্তোলনের অ্যাকাউন্ট তথ্য ভুল থাকার কারণে স্থানান্তর ব্যর্থ হয়েছে। অনুগ্রহ করে আপনার অ্যাকাউন্টের তথ্য ভালোভাবে পরীক্ষা করুন।",
                        "order.info.35": "order.info.35    /*no value*/",
                        "order.info.36": "নিশ্চিত করুন",
                        "order.info.37": "আপনার উত্তোলন যেন স্বাভাবিকভাবে সম্পন্ন হয় তা নিশ্চিত করতে, অনুগ্রহ করে আপনার অ্যাকাউন্টের তথ্য ভালোভাবে পরীক্ষা করুন।",
                        "order.info.38": "চেক করতে",
                        "order.info.39.B": "প্রিয় ব্যবহারকারী:\n     যেহেতু আপনি এই সময়ে জমা দেওয়া অ্যাকাউন্টের তথ্য ভুল, তাই অ্যাকাউন্টের নিরাপত্তা নিশ্চিত করতে আপনার তোলার আবেদন সাময়িকভাবে স্থগিত করা হয়েছে। অনুগ্রহ করে আপনার অ্যাকাউন্টের তথ্য সংশোধন করুন এবং সীমাবদ্ধতা সরানোর জন্য যাচাইকরণের জন্য {amount} রিচার্জ করুন৷ সঠিক হিসাব তথ্য জমা দেওয়ার পর কেন্দ্রীয় ব্যাংক অবিলম্বে রেমিট্যান্স পাঠাবে।",
                        "order.info.40": "পে করুন {amount}",
                        "order.info.41": "অ্যাকাউন্টের তথ্য পরিবর্তন করুন",
                        "order.info.42": "ব্যাংক অ্যাকাউন্ট নম্বর সংশোধন করার অনুরোধ পেয়েছে এবং রেমিট্যান্স পুনরায় প্রক্রিয়া করছে...",
                        "order.prop.1.A": "order.prop.1.A    /*no value*/",
                        "order.prop.2.A": "order.prop.2.A    /*no value*/",
                        "order.prop.3.A": "order.prop.3.A    /*no value*/",
                        "order.prop.4.A": "order.prop.4.A    /*no value*/",
                        "order.prop.5.A": "order.prop.5.A    /*no value*/",
                        "order.prop.6.A": "order.prop.6.A    /*no value*/",
                        "order.prop.7.A": "order.prop.7.A    /*no value*/",
                        "order.prop.8.A": "order.prop.8.A    /*no value*/",
                        "order.prop.9.A": "order.prop.9.A    /*no value*/",
                        "order.prop.10.A": "order.prop.10.A    /*no value*/",
                        "order.prop.14": "order.prop.14    /*no value*/",
                        "order.prop.15": "order.prop.15    /*no value*/",
                        "order.prop.15.N": "order.prop.15.N    /*no value*/",
                        "order.info.3.A": "order.info.3.A    /*no value*/",
                        "order.info.4.A": "order.info.4.A    /*no value*/",
                        "order.info.5.A": "order.info.5.A    /*no value*/",
                        "order.info.6.A": "order.info.6.A    /*no value*/",
                        "order.info.7.A": "order.info.7.A    /*no value*/",
                        "order.info.8.A": "order.info.8.A    /*no value*/",
                        "order.info.9.A": "order.info.9.A    /*no value*/",
                        "order.info.10.A": "order.info.10.A    /*no value*/",
                        "order.info.22.A": "order.info.22.A    /*no value*/",
                        "order.info.27.A": "order.info.27.A    /*no value*/",
                        "order.info.28.A": "order.info.28.A    /*no value*/",
                        "order.info.39.A": "order.info.39.A    /*no value*/",
                        "prop.tip.2.C": "prop.tip.2.C    /*no value*/",
                        "order.prop.2.C": "order.prop.2.C    /*no value*/",
                        "order.prop.5.C": "order.prop.5.C    /*no value*/",
                        "order.prop.6.C": "order.prop.6.C    /*no value*/",
                        "order.prop.8.C": "order.prop.8.C    /*no value*/",
                        "order.prop.9.C": "order.prop.9.C    /*no value*/",
                        "order.prop.16": "order.prop.16    /*no value*/",
                        "order.prop.17": "order.prop.17    /*no value*/",
                        "order.prop.18": "order.prop.18    /*no value*/",
                        "order.prop.19": "order.prop.19    /*no value*/",
                        "order.info.3.C.1": "order.info.3.C.1    /*no value*/",
                        "order.info.3.C.2": "order.info.3.C.2    /*no value*/",
                        "order.info.4.C.1": "order.info.4.C.1    /*no value*/",
                        "order.info.4.C.2": "order.info.4.C.2    /*no value*/",
                        "order.info.8.C": "order.info.8.C    /*no value*/",
                        "order.info.11.C": "order.info.11.C    /*no value*/",
                        "order.info.12.C.1": "order.info.12.C.1    /*no value*/",
                        "order.info.12.C.2": "order.info.12.C.2    /*no value*/",
                        "order.info.13.C.1": "order.info.13.C.1    /*no value*/",
                        "order.info.13.C.2": "order.info.13.C.2    /*no value*/",
                        "order.info.16.C.1": "order.info.16.C.1    /*no value*/",
                        "order.info.16.C.2": "order.info.16.C.2    /*no value*/",
                        "order.info.17.C.1": "order.info.17.C.1    /*no value*/",
                        "order.info.17.C.2": "order.info.17.C.2    /*no value*/",
                        "order.info.19.C.1": "order.info.19.C.1    /*no value*/",
                        "order.info.19.C.2": "order.info.19.C.2    /*no value*/",
                        "order.info.20.C": "order.info.20.C    /*no value*/",
                        "order.info.21.C": "order.info.21.C    /*no value*/",
                        "order.info.22.C.T1": "order.info.22.C.T1    /*no value*/",
                        "order.info.22.C.T2": "order.info.22.C.T2    /*no value*/",
                        "order.info.22.C.T3": "order.info.22.C.T3    /*no value*/",
                        "order.info.22.C.T4": "order.info.22.C.T4    /*no value*/",
                        "order.info.28.C": "order.info.28.C    /*no value*/",
                        "order.info.30.C.T1": "order.info.30.C.T1    /*no value*/",
                        "order.info.43": "order.info.43    /*no value*/",
                        "order.info.44": "order.info.44    /*no value*/",
                        "order.info.45": "order.info.45    /*no value*/",
                        "order.info.46": "order.info.46    /*no value*/",
                        "prop.tip.32.F": "prop.tip.32.F    /*no value*/",
                        "prop.tip.33.F": "prop.tip.33.F    /*no value*/",
                        "prop.tip.33.F.1": "prop.tip.33.F.1    /*no value*/",
                        "prop.tip.34.F": "prop.tip.34.F    /*no value*/",
                        "prop.tip.35.F": "prop.tip.35.F    /*no value*/",
                        "prop.tip.36.F": "prop.tip.36.F    /*no value*/",
                        "prop.tip.37.F": "prop.tip.37.F    /*no value*/",
                        "prop.tip.38.F": "prop.tip.38.F    /*no value*/",
                        "prop.tip.39.F": "prop.tip.39.F    /*no value*/",
                        "prop.tip.40.F": "prop.tip.40.F    /*no value*/",
                        "prop.tip.41.F": "prop.tip.41.F    /*no value*/",
                        "order.info.47": "order.info.47    /*no value*/",
                        "order.info.48": "order.info.48    /*no value*/",
                        "order.info.49": "order.info.49    /*no value*/",
                        "order.info.50": "order.info.50    /*no value*/",
                        "order.info.51": "order.info.51    /*no value*/",
                        "order.info.52": "order.info.52    /*no value*/",
                        "order.info.53": "order.info.53    /*no value*/",
                        "order.info.54": "order.info.54    /*no value*/",
                        "order.info.7.D": "order.info.7.D    /*no value*/",
                        "order.info.8.D": "order.info.8.D    /*no value*/",
                        "order.info.9.D": "order.info.9.D    /*no value*/",
                        "order.info.10.D": "order.info.10.D    /*no value*/",
                        "order.info.21.D": "order.info.21.D    /*no value*/",
                        "order.info.22.D": "order.info.22.D    /*no value*/",
                        "order.info.27.D": "order.info.27.D    /*no value*/",
                        "order.info.28.D": "order.info.28.D    /*no value*/",
                        "order.info.32.D": "order.info.32.D    /*no value*/",
                        "order.info.33.D": "order.info.33.D    /*no value*/",
                        "order.info.34.D": "order.info.34.D    /*no value*/",
                        "order.info.37.D": "order.info.37.D    /*no value*/",
                        "order.info.39.D": "order.info.39.D    /*no value*/",
                        "order.info.41.D": "order.info.41.D    /*no value*/",
                        "order.info.42.D": "order.info.42.D    /*no value*/",
                        "deposit.5": "deposit.5    /*no value*/",
                        "deposit.6": "deposit.6    /*no value*/",
                        "deposit.7": "deposit.7    /*no value*/",
                        "deposit.8": "deposit.8    /*no value*/",
                        "deposit.9": "deposit.9    /*no value*/",
                        "deposit.10": "deposit.10    /*no value*/",
                        "deposit.11": "deposit.11    /*no value*/",
                        "deposit.12": "deposit.12    /*no value*/",
                        "deposit.13": "deposit.13    /*no value*/",
                        "deposit.14": "deposit.14    /*no value*/",
                        "deposit.15": "deposit.15    /*no value*/",
                        "deposit.16": "deposit.16    /*no value*/",
                        "deposit.17": "deposit.17    /*no value*/",
                        "deposit.18": "deposit.18    /*no value*/",
                        "deposit.19": "deposit.19    /*no value*/",
                        "deposit.20": "deposit.20    /*no value*/",
                        "deposit.21": "deposit.21    /*no value*/",
                        "deposit.22": "deposit.22    /*no value*/",
                        "deposit.23": "deposit.23    /*no value*/",
                        "deposit.24": "deposit.24    /*no value*/",
                        "deposit.25": "deposit.25    /*no value*/",
                        "deposit.26": "deposit.26    /*no value*/",
                        "deposit.27": "deposit.27    /*no value*/",
                        "deposit.28": "deposit.28    /*no value*/",
                        "deposit.29": "deposit.29    /*no value*/",
                        "deposit.30": "deposit.30    /*no value*/",
                        "deposit.31": "deposit.31    /*no value*/",
                        "deposit.32": "deposit.32    /*no value*/",
                        "prop.tip.13.E": "prop.tip.13.E    /*no value*/",
                        "prop.tip.14.E": "prop.tip.14.E    /*no value*/",
                        "prop.tip.15.E": "prop.tip.15.E    /*no value*/",
                        "prop.tip.16.E": "prop.tip.16.E    /*no value*/",
                        "prop.tip.17.E": "prop.tip.17.E    /*no value*/",
                        "prop.tip.17.F": "prop.tip.17.F    /*no value*/",
                        "prop.tip.18.E": "prop.tip.18.E    /*no value*/",
                        "prop.tip.19.E": "prop.tip.19.E    /*no value*/",
                        "prop.tip.20.E": "prop.tip.20.E    /*no value*/",
                        "prop.tip.21.E": "prop.tip.21.E    /*no value*/",
                        "prop.tip.22.E": "prop.tip.22.E    /*no value*/",
                        "prop.tip.23.E": "prop.tip.23.E    /*no value*/",
                        "prop.tip.24.E": "prop.tip.24.E    /*no value*/",
                        "prop.tip.25.E": "prop.tip.25.E    /*no value*/",
                        "prop.tip.26.E": "prop.tip.26.E    /*no value*/",
                        "prop.tip.27.E": "prop.tip.27.E    /*no value*/",
                        "prop.tip.28.E": "prop.tip.28.E    /*no value*/",
                        "prop.tip.29.E": "prop.tip.29.E    /*no value*/",
                        "prop.tip.30.E": "prop.tip.30.E    /*no value*/",
                        "prop.tip.31.E": "prop.tip.31.E    /*no value*/"
                    },
                    Va = {
                        "banner.1": "invite_bd.png",
                        "banner.2": "newPlayer_bd.png",
                        "banner.3": "check-inbd.png",
                        "banner.4": "dailybd.png",
                        "promote.img.1": "banner-invitebd.png",
                        "eventItem-Img.1": "banner-newplaybd.png",
                        "eventItem-Img.2": "banner-checkbd.png",
                        "eventItem-Img.3": "banner-dailybd.png",
                        "eventItem-Img2.1": "R$bd.png",
                        "withdraw-Img.1": "goldbd.png",
                        "service.img.1": "servicebd.png",
                        "popupDial.1": "turntablebd.png",
                        "popupDial.2": "turntable_arrowbd.png",
                        "popupDial.3": "turntable_moneybd.png",
                        "popupDial.4": "turntable_titlebd.png",
                        "popupBag.1": "step_title_1_bd.png",
                        "popupBag.2": "step_msg_1_bd.png",
                        "popupBag.3": "step_button_bd.png"
                    },
                    Ua = { ...Ba,
                        ...Va
                    };
                r.A.use(pa.A);
                const ja = {
                    BR: ha,
                    ID: wa,
                    PH: Aa,
                    ES: ka,
                    US: Ea,
                    CO: Sa,
                    IN: xa,
                    PAK: Oa,
                    BD: Ua
                };
                let Ya = "",
                    La = localStorage.getItem(H.A.LOCAL_CONST.GAME_CONFIG),
                    Ga = "IN";
                La ? (La = JSON.parse(La), Ya = La.localeLanguage) : Ya = Ga, l.A.state.localeLanguage = Ya;
                let Wa = l.A.state.localeLanguage;
                var za = new pa.A({
                        locale: Wa,
                        messages: ja,
                        fallbackLocale: "BR"
                    }),
                    Ma = o(67591),
                    Qa = o(88934),
                    Ka = o.n(Qa),
                    Ha = o(62278),
                    Ja = o.n(Ha),
                    Xa = o(65558),
                    Za = o(44625),
                    _a = (o(50969), {
                        BR: {
                            currencyGold: "R$",
                            currency: "BRL",
                            areaCode: "+55",
                            language: "Portuguese",
                            channel: "BR",
                            firstWithdrawArr: [100, 1e4, 5e4, 1e5, 5e5, 1e6],
                            withdrawArr: [5e4, 1e5, 15e4, 3e5, 5e5, 1e6],
                            firstWithdrawArr_e: [100, 5e3, 5e4, 1e5, 5e5, 1e6],
                            withdrawArr_e: [5e3, 5e4, 1e5, 5e5, 1e6, 2e6],
                            newTaskReward: 3e3,
                            activityPayAmount: 3e3,
                            amountLimitTip: 5e4,
                            countryTime: 396e5,
                            netList: [{
                                netName: "Tron (TRC20)",
                                state: 2,
                                id: 2
                            }, {
                                netName: "Polygon POS",
                                state: 1,
                                id: 1
                            }, {
                                netName: "Solana",
                                state: 2,
                                id: 3
                            }]
                        },
                        ID: {
                            currencyGold: "RP",
                            currency: "IDR",
                            areaCode: "+62",
                            language: "Indonesian",
                            channel: "ID"
                        },
                        PH: {
                            currencyGold: "₱",
                            currency: "PHP",
                            areaCode: "+63",
                            language: "English",
                            channel: "PH",
                            firstWithdrawArr: [2e3, 1e5, 5e5, 1e6, 5e6, 1e7],
                            withdrawArr: [5e5, 1e6, 15e5, 3e6, 5e6, 1e7],
                            firstWithdrawArr_e: [2e3, 5e4, 5e5, 1e6, 5e6, 1e7],
                            withdrawArr_e: [5e4, 5e5, 1e6, 5e6, 1e7, 2e7],
                            withdrawArr_c: [5e4, 5e5, 2e6, 3e6, 5e6, 1e7],
                            firstWithdrawArr_f: [2e3, 5e4, 1e5, 5e5, 1e6, 2e6, 3e6, 5e6, 1e7],
                            withdrawArr_f: [5e5, 1e6, 2e6, 3e6, 5e6, 1e7, 15e6, 3e7, 5e7],
                            lvAmountConfig_f: [2e3, 5e5, 2e6, 1e7],
                            lvCountConfig_f: [2, 2, 3, 3],
                            newTaskReward: 3e4,
                            activityPayAmount: 1e4,
                            amountLimitTip: 5e5,
                            countryTime: 0,
                            typeCMinDeposit: 1e4
                        },
                        ES: {
                            currencyGold: "$",
                            currency: "MXN",
                            areaCode: "+52",
                            language: "Spanish",
                            channel: "ES",
                            firstWithdrawArr: [200, 2e4, 3e5, 5e5, 2e6, 5e6],
                            withdrawArr: [3e5, 5e5, 1e6, 2e6, 5e6, 1e7],
                            firstWithdrawArr_e: [200, 2e4, 2e5, 5e5, 2e6, 5e6],
                            withdrawArr_e: [2e4, 2e5, 5e5, 2e6, 5e6, 1e7],
                            lvOneConfig: [2e5, 3],
                            lvTwoConfig: [2e6, 5],
                            lvThreeConfig: [5e6, 10],
                            newTaskReward: 9e3,
                            activityPayAmount: 3e3,
                            amountLimitTip: 1e5,
                            countryTime: 504e5
                        },
                        VN: {
                            currencyGold: "₫",
                            currency: "VND",
                            areaCode: "+84",
                            language: "Vietnamese",
                            channel: "VN"
                        },
                        US: {
                            currencyGold: "₦",
                            currency: "NGN",
                            areaCode: "+234",
                            language: "English",
                            channel: "US"
                        },
                        CO: {
                            currencyGold: "$",
                            currency: "COP",
                            areaCode: "+57",
                            language: "Spanish",
                            channel: "CO"
                        },
                        IN: {
                            currencyGold: "₹",
                            currency: "INR",
                            areaCode: "+91",
                            language: "English",
                            channel: "IN",
                            firstWithdrawArr: [1e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7],
                            withdrawArr: [1e6, 2e6, 3e6, 4e6, 5e6, 8e6, 1e7, 15e6, 2e7],
                            firstWithdrawArr_e: [200, 2e4, 2e5, 5e5, 2e6, 5e6],
                            withdrawArr_e: [2e4, 2e5, 5e5, 2e6, 5e6, 1e7],
                            firstWithdrawArr_c: [5e4, 5e5, 1e6, 2e6, 3e6, 4e6, 5e6, 1e7, 2e7],
                            withdrawArr_c: [5e4, 5e5, 1e6, 2e6, 3e6, 4e6, 5e6, 1e7, 2e7],
                            firstWithdrawArr_f: [2e3, 5e4, 1e5, 5e5, 1e6, 2e6, 3e6, 5e6, 1e7],
                            withdrawArr_f: [5e5, 1e6, 2e6, 3e6, 5e6, 1e7, 15e6, 3e7, 5e7],
                            lvOneConfig: [2e5, 3],
                            lvTwoConfig: [2e6, 5],
                            lvThreeConfig: [5e6, 10],
                            newTaskReward: 5e4,
                            activityPayAmount: 15e3,
                            amountLimitTip: 5e5,
                            countryTime: 9e6,
                            typeCMinDeposit: 1e4
                        },
                        PAK: {
                            currencyGold: "Rs",
                            currency: "PKR",
                            areaCode: "+92",
                            language: "English",
                            channel: "PAK",
                            firstWithdrawArr: [1e4, 3e5, 6e5, 15e5, 3e6, 6e6, 15e6, 3e7, 6e7],
                            withdrawArr: [3e6, 5e6, 9e6, 12e6, 15e6, 2e7, 3e7, 5e7, 6e7],
                            firstWithdrawArr_e: [200, 2e4, 2e5, 5e5, 2e6, 5e6],
                            withdrawArr_e: [2e4, 2e5, 5e5, 2e6, 5e6, 1e7],
                            firstWithdrawArr_c: [15e4, 15e5, 3e6, 6e6, 9e6, 12e6, 15e6, 3e7, 6e7],
                            withdrawArr_c: [15e4, 15e5, 3e6, 6e6, 9e6, 12e6, 15e6, 3e7, 6e7],
                            lvOneConfig: [2e5, 3],
                            lvTwoConfig: [2e6, 5],
                            lvThreeConfig: [5e6, 10],
                            newTaskReward: 15e4,
                            activityPayAmount: 3e4,
                            amountLimitTip: 5e5,
                            countryTime: 108e5,
                            typeCMinDeposit: 3e4
                        },
                        BD: {
                            currencyGold: "৳",
                            currency: "BDT",
                            areaCode: "+880",
                            language: "বাংলা ভাষা",
                            channel: "BD",
                            firstWithdrawArr: [1e4, 15e4, 3e5, 6e5, 15e5, 3e6, 6e6, 15e6, 3e7],
                            withdrawArr: [15e5, 3e6, 4e6, 5e6, 6e6, 1e7, 15e6, 2e7, 3e7],
                            firstWithdrawArr_e: [200, 2e4, 2e5, 5e5, 2e6, 5e6],
                            withdrawArr_e: [2e4, 2e5, 5e5, 2e6, 5e6, 1e7],
                            firstWithdrawArr_c: [5e4, 5e5, 1e6, 2e6, 3e6, 4e6, 5e6, 1e7, 2e7],
                            withdrawArr_c: [5e4, 5e5, 1e6, 2e6, 3e6, 4e6, 5e6, 1e7, 2e7],
                            firstWithdrawArr_f: [2e3, 5e4, 1e5, 5e5, 1e6, 2e6, 3e6, 5e6, 1e7],
                            withdrawArr_f: [5e5, 1e6, 2e6, 3e6, 5e6, 1e7, 15e6, 3e7, 5e7],
                            lvOneConfig: [2e5, 3],
                            lvTwoConfig: [2e6, 5],
                            lvThreeConfig: [5e6, 10],
                            newTaskReward: 6e4,
                            activityPayAmount: 2e4,
                            amountLimitTip: 5e5,
                            countryTime: 72e5,
                            typeCMinDeposit: 1e4
                        }
                    }),
                    $a = o(25800);

                function eo(e) {
                    var a, o, t = [];
                    a = location.href, o = a.split("?")[1];
                    for (var r = o.split("&"), n = 0; n < r.length; n++) t[r[n].split("=")[0]] = r[n].split("=")[1];
                    return t
                }

                function ao(e) {
                    let a = e,
                        o = document.createElement("input");
                    o.value = a, document.body.appendChild(o), o.select(), document.execCommand("Copy"), o.remove()
                }

                function oo() {
                    let e = localStorage.getItem("isApp");
                    return "true" === e ? (l.A.state.isApp = !0, !0) : (l.A.state.isApp = !1, !1)
                }
                var to = {
                    copy: ao,
                    getIsApp: oo
                };
                r.A.config.productionTip = !1, r.A.prototype.$moment = M(), r.A.prototype.$utils = { ...$a,
                    ...b,
                    ...t
                }, r.A.prototype.$config = { ...H.A
                }, r.A.prototype.ChannelConfig = _a["IN"] || {}, r.A.use(Ma.Ay), r.A.use(Za.Ay), r.A.use(Ja()), r.A.use(Xa.Ay), r.A.use(Ka(), {
                    loading: o(18462),
                    error: o(18462),
                    throttleWait: 10
                });
                let ro = new r.A({
                    i18n: za,
                    router: ca.A,
                    store: l.A,
                    render: e => e(la)
                });
                console.log = function() {};
                let no = "false",
                    io = window;

                function so() {
                    let e = localStorage.getItem(H.A.LOCAL_CONST.USER_INFO),
                        a = localStorage.getItem(H.A.LOCAL_CONST.GAME_CONFIG);
                    if (e && "" != e) try {
                        let a = JSON.parse(e);
                        l.A.state.isLogin = a.isLogin, l.A.state.nickName = a.nickName, l.A.state.headUrl = a.headUrl, l.A.state.userId = a.userId, l.A.state.token = a.token, l.A.state.userType = a.userType
                    } catch (o) {
                        console.log(o)
                    }
                    if (a && "" != a) try {
                        let e = JSON.parse(a);
                        l.A.state.localeLanguage = e.localeLanguage, l.A.state.currency = e.currency
                    } catch (o) {
                        console.log(o)
                    }
                    ro.$mount("#app")
                }

                function lo() {
                    let e = window,
                        a = e.chcp,
                        o = "",
                        t = "",
                        r = function() {
                            if ((!t || t && -1 == t.indexOf(H.A.LOCAL_CONST.DEVICE_ID)) && o) return l.A.state.channelIdAPK = o, void so();
                            if (!t || t && -1 == t.indexOf(H.A.LOCAL_CONST.DEVICE_ID)) return void so();
                            let e = JSON.parse(t);
                            for (let o in e) localStorage.setItem(o, e[o]);
                            let a = localStorage.getItem(H.A.LOCAL_CONST.USER_INFO);
                            a && (a = JSON.parse(a)), so()
                        };
                    l.A.state.isApp = !0;
                    let n = 0,
                        i = function() {
                            n++, n >= 2 && r()
                        };
                    a.nativeCall(a.customEvent.reqPackerNgChannel, "", (function(e) {
                        o = e, localStorage.setItem(H.A.LOCAL_CONST.CHANNEL_ID_APK, o), localStorage.setItem(H.A.LOCAL_CONST.DEVICE_ID, o), console.log("===================reqPackerNgChannel:" + e), i()
                    }), (function(e) {
                        console.log("===================reqPackerNgChannel fail:" + e), i()
                    })), a.nativeCall(a.customEvent.reqClipBoardData, "", (function(e) {
                        t = e, console.log("===================reqClipBoardData:" + e), i()
                    }), (function(e) {
                        console.log("===================reqClipBoardData fail:" + e), i()
                    }))
                }
                io.createAppMain = "true" == no ? function() {
                    lo()
                } : function() {
                    so()
                }
            },
            39325: function(e, a, o) {
                "use strict";
                var t = o(66848),
                    r = o(56178),
                    n = o(55129);
                t.A.use(r.Ay);
                const i = r.Ay.prototype.push;
                r.Ay.prototype.push = function(e) {
                    return i.call(this, e).catch((e => e))
                };
                const s = new r.Ay({
                    routes: [{
                        path: "/",
                        meta: {
                            nav: !0
                        },
                        component: () => Promise.all([o.e(440), o.e(624)]).then(o.bind(o, 87624))
                    }, {
                        path: "/mine",
                        component: () => Promise.all([o.e(440), o.e(136)]).then(o.bind(o, 63136)),
                        meta: {
                            nav: !0
                        }
                    }, {
                        path: "/security",
                        component: () => Promise.all([o.e(668), o.e(871), o.e(388)]).then(o.bind(o, 47388))
                    }, {
                        path: "/withdrawalTracker",
                        component: () => Promise.all([o.e(668), o.e(871), o.e(132)]).then(o.bind(o, 30132))
                    }, {
                        path: "/withdrawalTrackerA",
                        component: () => Promise.all([o.e(668), o.e(871), o.e(881)]).then(o.bind(o, 80881))
                    }, {
                        path: "/withdrawalTrackerC",
                        component: () => Promise.all([o.e(668), o.e(871), o.e(172)]).then(o.bind(o, 64172))
                    }, {
                        path: "/history",
                        component: () => Promise.all([o.e(668), o.e(137)]).then(o.bind(o, 33137))
                    }, {
                        path: "/event",
                        component: () => Promise.all([o.e(440), o.e(499)]).then(o.bind(o, 75499)),
                        meta: {
                            nav: !0
                        }
                    }, {
                        path: "/event/item",
                        component: () => Promise.all([o.e(440), o.e(506)]).then(o.bind(o, 8506))
                    }, {
                        path: "/about",
                        component: () => o.e(593).then(o.bind(o, 1593))
                    }, {
                        path: "/promote",
                        component: () => Promise.all([o.e(440), o.e(424)]).then(o.bind(o, 424))
                    }, {
                        path: "/service",
                        component: () => o.e(791).then(o.bind(o, 34791))
                    }, {
                        path: "/deposit",
                        component: () => Promise.all([o.e(107), o.e(18)]).then(o.bind(o, 71058))
                    }, {
                        path: "/withdraw",
                        component: () => Promise.all([o.e(107), o.e(43)]).then(o.bind(o, 16152))
                    }, {
                        path: "/gameTimes",
                        component: () => Promise.all([o.e(440), o.e(23)]).then(o.bind(o, 98023))
                    }],
                    linkActiveClass: "active"
                });
                s.beforeEach(((e, a, o) => {
                    "Paymodel" == a.query.model && n.A.commit("setPayModalVisible", !1), "Iframe" == a.query.game && "Iframe" != e.query.game && (n.A.state.gameUrl = ""), o()
                })), a.A = s
            },
            47796: function(e, a, o) {
                "use strict";
                o.d(a, {
                    AN: function() {
                        return D
                    },
                    Ce: function() {
                        return A
                    },
                    Hh: function() {
                        return v
                    },
                    In: function() {
                        return P
                    },
                    LQ: function() {
                        return N
                    },
                    Pw: function() {
                        return I
                    },
                    R1: function() {
                        return w
                    },
                    Rv: function() {
                        return l
                    },
                    SY: function() {
                        return k
                    },
                    d: function() {
                        return b
                    },
                    fS: function() {
                        return s
                    },
                    fo: function() {
                        return c
                    },
                    g6: function() {
                        return m
                    },
                    hy: function() {
                        return i
                    },
                    ir: function() {
                        return u
                    },
                    lf: function() {
                        return g
                    },
                    lu: function() {
                        return r
                    },
                    n2: function() {
                        return f
                    },
                    oO: function() {
                        return E
                    },
                    oi: function() {
                        return h
                    },
                    vB: function() {
                        return d
                    },
                    wd: function() {
                        return y
                    },
                    wx: function() {
                        return n
                    },
                    wz: function() {
                        return p
                    },
                    xI: function() {
                        return C
                    }
                });
                var t = o(61581);
                const r = e => (0, t.Em)("/user/login", "POST", e),
                    n = e => (0, t.Em)("/v1/bus/accountInfo", "POST", e),
                    i = e => (0, t.Em)("/charge/amount/list", "POST", e),
                    s = e => (0, t.Em)("/charge/create/order", "POST", e),
                    d = e => (0, t.Em)("/withdraw/create/order", "POST", e),
                    l = e => (0, t.Em)("/v1/bus/withdrawInfo", "POST", e),
                    c = e => (0, t.Em)("/v1/bus/withdrawInfo2", "POST", e),
                    p = e => (0, t.Em)("/v1/bus/getWithdrawProcess", "POST", e),
                    u = e => (0, t.Em)("/v1/bus/statInviteInfo", "POST", e),
                    m = e => (0, t.Em)("/v1/bus/getUserShareUrlAndExtensionCode", "POST", e),
                    h = e => (0, t.Em)("/v1/bus/receiveInviteRewards", "POST", e),
                    f = e => (0, t.Em)("/v1/bus/updateCpf", "POST", e),
                    g = e => (0, t.Em)("/v1/bus/getTaskProcess", "POST", e),
                    w = e => (0, t.Em)("/v1/bus/taskOne", "POST", e),
                    y = e => (0, t.Em)("/v1/bus/taskOneGot", "POST", e),
                    v = e => (0, t.Em)("/v1/bus/getAllWithdrawOrders", "POST", e),
                    A = e => (0, t.Em)("/v1/bus/getFbRechargeRecords", "POST", e),
                    b = e => (0, t.Em)("/v1/bus/updateFbRechargeRecords", "POST", e),
                    C = e => (0, t.Em)("/charge/bank/list", "POST", e),
                    k = e => (0, t.Em)("/withdraw/bank/list", "POST", e),
                    I = e => (0, t.Em)("/user/web/customer/forward", "POST", e),
                    P = e => (0, t.Em)("/v1/bus/selectPaymentChannel", "POST", e),
                    E = e => (0, t.Em)("/v1/bus/cancelProcessPayOutOrder", "POST", e),
                    D = e => (0, t.Em)("/v1/bus/getPayOutPreTaskProcess", "POST", e),
                    N = e => (0, t.Em)("/v1/bus/initPayOutPreTask", "POST", e)
            },
            65261: function(e, a, o) {
                "use strict";
                o.d(a, {
                    $L: function() {
                        return s
                    },
                    H$: function() {
                        return i
                    },
                    df: function() {
                        return r
                    },
                    f6: function() {
                        return l
                    },
                    ix: function() {
                        return d
                    },
                    zF: function() {
                        return n
                    }
                });
                var t = o(61581);
                const r = e => (0, t.Em)("/game/joinGame", "POST", e),
                    n = e => (0, t.Em)("/activity/getSignInfo", "POST", e),
                    i = e => (0, t.Em)("/activity/drawSignReward", "POST", e),
                    s = e => (0, t.Em)("/game/gameSceneList", "POST", e),
                    d = e => (0, t.Em)("/vegas/wallet/checkInGame", "POST", e),
                    l = e => (0, t.Em)("/v1/bus/saveOksRecords", "POST", e)
            },
            61581: function(e, a, o) {
                "use strict";
                o.d(a, {
                    Em: function() {
                        return c
                    },
                    eu: function() {
                        return i
                    }
                });
                var t = o(98355),
                    r = o(55129);
                const n = "https://ind.nirione.fun/7web",
                    i = t.A.create({});

                function s(e) {
                    e = e || 20;
                    var a = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789";
                    let o = a.length,
                        t = "";
                    for (let r = 0; r < e; r++) t += a.charAt(Math.floor(Math.random() * o));
                    return t
                }

                function d() {
                    let e = (new Date).getTime() + "200419392874727",
                        a = s(12),
                        o = "";
                    for (let t = e.length - 1; t >= 16; t--) o += a.charAt(parseInt(e.charAt(t)) + 2);
                    return {
                        secTime: e,
                        secRandom: a,
                        secValue: o
                    }
                }
                i.interceptors.request.use((e => {
                    let a = d();
                    return "" === e.url ? e.headers = {
                        "user-token": a.secTime + "-" + a.secRandom + "-" + a.secValue
                    } : e.headers = {
                        "Content-Type": "application/json",
                        "access-token": r.A.state.token,
                        "user-token": a.secValue + "-" + a.secTime + "-" + a.secRandom
                    }, e
                }), (e => {
                    console.log(e), Promise.reject(e)
                })), i.interceptors.response.use((e => {
                    r.A.state.spinning = !1;
                    const a = e.data;
                    return a
                }), (e => (r.A.state.spinning = !1, console.log("err" + e), Promise.reject(e))));
                const l = e => e;
                async function c(e, a, o, t) {
                    switch (e = `${n}${e}`, a) {
                        case "GET":
                            return i.get(e, {
                                params: o,
                                ...t
                            }).then(l);
                        case "POST":
                            return o.notSpinning || (r.A.state.spinning = !0), i.post(e, o, t).then(l);
                        case "PUT":
                            return i.put(e, o, t).then(l);
                        case "DELETE":
                            return i.delete(e, o, t).then(l);
                        default:
                            return i.get(e, {
                                params: o,
                                ...t
                            }).then(l)
                    }
                }
            },
            55129: function(e, a, o) {
                "use strict";
                o(44114);
                var t = o(66848),
                    r = o(93518),
                    n = o(39325),
                    i = o(44962),
                    s = o(56757);
                t.A.use(r.Ay);
                const d = new r.Ay.Store({
                    state: {
                        lang: "BR",
                        loginShow: !1,
                        loginCallBack: !0,
                        showTopDownload: !0,
                        menuVisible: !1,
                        mineVisible: !1,
                        searchVisible: !1,
                        homeTabActive: 0,
                        payModalVisible: !1,
                        payCodeVisible: !1,
                        isShowPopupCharge: !1,
                        needChargeAmount: 0,
                        extraAmount: 0,
                        popupChargeType: 0,
                        payQRCode: "",
                        token: "",
                        isLogin: 0,
                        currency: "",
                        gameUrl: "",
                        localeLanguage: "IN",
                        gold: 0,
                        code: "",
                        nickName: "",
                        headUrl: "",
                        userId: "",
                        userType: "",
                        VIP: "",
                        loginType: 1,
                        spinning: !1,
                        orderAmount: 0,
                        payType: 0,
                        payTypeCode: 0,
                        withdraw_num: 0,
                        gameId: 0,
                        Ordering: !1,
                        drawForm: {},
                        tipsVisible: 0,
                        gameActivityFlag: 1,
                        Uncharge1000: !1,
                        switchLogin: 0,
                        isShowDial: !1,
                        isDefault: 0,
                        isShowGive: !1,
                        welcomeType: 0,
                        isShowLuckyBag: !1,
                        channelIdAPK: "",
                        isApp: !1,
                        netDataId: 1,
                        withdrawNetDataId: 1,
                        cryptoRate: 1,
                        eighteenPop: !1,
                        chargeTotalAmount: 0,
                        needJumpGameUrl: "",
                        preTaskFlag: 0,
                        bankList: []
                    },
                    mutations: {
                        handleLoginVisible(e, a) {
                            e.loginShow = a
                        },
                        setLoginCallBack(e, a) {
                            e.loginCallBack = a
                        },
                        setShowTopDownload(e, a) {
                            e.showTopDownload = a
                        },
                        setMenuVisible(e, a) {
                            e.menuVisible = a
                        },
                        setMineVisible(e, a) {
                            e.mineVisible = a
                        },
                        setSearchVisible(e, a) {
                            e.searchVisible = a
                        },
                        setHomeTabActive(e, a) {
                            e.homeTabActive = a
                        },
                        setPayModalVisible(e, a) {
                            if (e.payModalVisible = a, 1 == a) {
                                let e = n.A.currentRoute.path,
                                    a = n.A.currentRoute.query;
                                n.A.push({
                                    path: e,
                                    query: {
                                        model: "Paymodel",
                                        ...a
                                    }
                                })
                            }
                        },
                        setPayCodeVisible(e, a) {
                            e.payCodeVisible = a
                        },
                        getRefreshBalance(e, a) {
                            (0, s.D)()
                        }
                    },
                    actions: {
                        handleCheckLogin({
                            commit: e,
                            state: a
                        }) {
                            a.token || 1 != a.switchLogin ? a.token || 0 != a.switchLogin ? a.loginCallBack && a.loginCallBack() : (0, i.rI)() : e("handleLoginVisible", !0)
                        }
                    }
                });
                a.A = d
            },
            99179: function(e, a, o) {
                "use strict";

                function t() {
                    console.log("================adPowerEvent register==================="), i("register", "")
                }

                function r(e) {
                    console.log("================adPowerEvent firstRecharge==================="), i("firstrecharge", e)
                }

                function n(e) {
                    console.log("================adPowerEvent rechargeSuccess==================="), i("totalrecharge", e)
                }

                function i(e, a) {
                    let o = window.adPower;
                    if (o) {
                        let t = {
                            gps_adid: o.gaid,
                            event: e,
                            revenue: a,
                            app_token: o.app_token
                        };
                        $.ajax({
                            url: "https://api.adpower.cn/v1/offer/postback",
                            type: "post",
                            dateType: "json",
                            headers: {
                                "Content-Type": "application/json;charset=utf8"
                            },
                            data: JSON.stringify(t),
                            success: function(e) {},
                            error: function(e) {}
                        })
                    }
                }
                a.Ay = {
                    adPowerRegister: t,
                    adPowerFirstRecharge: r,
                    adPowerRechargeSuccess: n
                }
            },
            43705: function(e, a, o) {
                "use strict";
                o.r(a), o.d(a, {
                    AddH5: function() {
                        return U
                    },
                    changeAmount: function() {
                        return p
                    },
                    changeMoney: function() {
                        return l
                    },
                    changeSeMoney: function() {
                        return Y
                    },
                    changeTime: function() {
                        return j
                    },
                    convertCurrency: function() {
                        return d
                    },
                    getAmountIndex: function() {
                        return u
                    },
                    getGold: function() {
                        return c
                    },
                    getOneNetDataById: function() {
                        return L
                    }
                });
                var t = o(25800),
                    r = o(55129),
                    n = o(93991),
                    i = o(66848),
                    s = new i.A;

                function d() {
                    return m() == n.A.CURRENCY_CONFIG.BRL ? n.A.CURRENCY_CONFIG.BRL_SIGN : m() == n.A.CURRENCY_CONFIG.NGN ? n.A.CURRENCY_CONFIG.NGN_SIGN : m() == n.A.CURRENCY_CONFIG.IDR ? n.A.CURRENCY_CONFIG.IDR_SIGN : m() == n.A.CURRENCY_CONFIG.MXN ? n.A.CURRENCY_CONFIG.MXN_SIGN : m() == n.A.CURRENCY_CONFIG.PHP ? n.A.CURRENCY_CONFIG.PHP_SIGN : m() == n.A.CURRENCY_CONFIG.VND ? n.A.CURRENCY_CONFIG.VND_SIGN : m() == n.A.CURRENCY_CONFIG.THB ? n.A.CURRENCY_CONFIG.THB_SIGN : m() == n.A.CURRENCY_CONFIG.EGP ? n.A.CURRENCY_CONFIG.EGP_SIGN : m() == n.A.CURRENCY_CONFIG.COP ? n.A.CURRENCY_CONFIG.COP_SIGN : m() == n.A.CURRENCY_CONFIG.INR ? n.A.CURRENCY_CONFIG.INR_SIGN : m() == n.A.CURRENCY_CONFIG.PKR ? n.A.CURRENCY_CONFIG.PKR_SIGN : m() == n.A.CURRENCY_CONFIG.BDT ? n.A.CURRENCY_CONFIG.BDT_SIGN : ""
                }

                function l(e, a = !0) {
                    return m() == n.A.CURRENCY_CONFIG.BRL ? h(e) : m() == n.A.CURRENCY_CONFIG.NGN ? g(e) : m() == n.A.CURRENCY_CONFIG.IDR ? y(e) : m() == n.A.CURRENCY_CONFIG.MXN ? A(e) : m() == n.A.CURRENCY_CONFIG.PHP ? C(e) : m() == n.A.CURRENCY_CONFIG.VND ? I(e) : m() == n.A.CURRENCY_CONFIG.THB ? E(e) : m() == n.A.CURRENCY_CONFIG.EGP ? N(e) : m() == n.A.CURRENCY_CONFIG.COP ? T(e) : m() == n.A.CURRENCY_CONFIG.INR ? x(e, a) : m() == n.A.CURRENCY_CONFIG.PKR ? q(e, a) : m() == n.A.CURRENCY_CONFIG.BDT ? B(e, a) : ""
                }

                function c(e, a = !0) {
                    let o = d();
                    return o ? (o += l(e, a), o) : ""
                }

                function p(e) {
                    return m() == n.A.CURRENCY_CONFIG.BRL ? (0, t.accDiv)(e, 100) : m() == n.A.CURRENCY_CONFIG.NGN || m() == n.A.CURRENCY_CONFIG.IDR || m() == n.A.CURRENCY_CONFIG.MXN ? e : m() == n.A.CURRENCY_CONFIG.PHP ? (0, t.accDiv)(e, 100) : m() == n.A.CURRENCY_CONFIG.VND ? e : m() == n.A.CURRENCY_CONFIG.THB || m() == n.A.CURRENCY_CONFIG.EGP ? (0, t.accDiv)(e, 100) : m() == n.A.CURRENCY_CONFIG.COP ? e : m() == n.A.CURRENCY_CONFIG.INR || m() == n.A.CURRENCY_CONFIG.PKR || m() == n.A.CURRENCY_CONFIG.BDT ? (0, t.accDiv)(e, 100) : 0
                }

                function u() {
                    return m() == n.A.CURRENCY_CONFIG.BRL ? 0 : m() == n.A.CURRENCY_CONFIG.NGN ? 1 : m() == n.A.CURRENCY_CONFIG.IDR ? 2 : m() == n.A.CURRENCY_CONFIG.MXN ? 3 : m() == n.A.CURRENCY_CONFIG.PHP ? 4 : m() == n.A.CURRENCY_CONFIG.VND ? 5 : m() == n.A.CURRENCY_CONFIG.THB ? 6 : m() == n.A.CURRENCY_CONFIG.EGP ? 7 : m() == n.A.CURRENCY_CONFIG.COP ? 8 : m() == n.A.CURRENCY_CONFIG.INR ? 9 : m() == n.A.CURRENCY_CONFIG.PKR ? 10 : m() == n.A.CURRENCY_CONFIG.BDT ? 11 : 0
                }

                function m() {
                    if (r.A.state.currency) return r.A.state.currency; {
                        let e = localStorage.getItem(n.A.LOCAL_CONST.GAME_CONFIG);
                        if (e && e.currency) return e.currency
                    }
                    return ""
                }

                function h(e) {
                    let a = "" + e;
                    return a = (0, t.accDiv)(e, 100), f(a)
                }

                function f(e) {
                    let a = "" + e.toFixed(2);
                    return a = a.replace(".", ","), a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ".")
                    }))
                }

                function g(e) {
                    let a = "" + e;
                    return w(a)
                }

                function w(e) {
                    let a = "" + e;
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function y(e) {
                    let a = "" + (0, t.accMul)(e, 10),
                        o = v(a);
                    return Number(a) >= 1e8 ? o = o.substring(0, o.length - 8) + "jt" : Number(a) >= 1e6 && (o = o.substring(0, o.length - 4) + "rb"), o
                }

                function v(e) {
                    let a = "" + e;
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ".")
                    }))
                }

                function A(e) {
                    let a = (0, t.accDiv)(e, 100);
                    return b(a)
                }

                function b(e) {
                    let a = "" + e.toFixed(2);
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function C(e) {
                    let a = (0, t.accDiv)(e, 100);
                    return k(a)
                }

                function k(e) {
                    let a = "" + e.toFixed(2);
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function I(e) {
                    let a = null;
                    a = Number(e) >= 100 ? parseFloat((0, t.accDiv)(e, 100).toFixed(2)) + "K" : parseFloat((0, t.accMul)(e, 10).toFixed(2));
                    let o = P(a);
                    return o
                }

                function P(e) {
                    let a = "" + e;
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function E(e) {
                    let a = (0, t.accDiv)(e, 100);
                    return D(a)
                }

                function D(e) {
                    let a = "" + e.toFixed(2);
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function N(e) {
                    let a = (0, t.accDiv)(e, 100);
                    return S(a)
                }

                function S(e) {
                    let a = ("" + e).toFixed(2);
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function T(e) {
                    let a = (0, t.accDiv)(e, 100).toFixed(2);
                    return R(a) + "K"
                }

                function R(e) {
                    let a = ("" + e).replace(".", ","),
                        o = a.replace(/\d+/, (function(e) {
                            return e.replace(/(?=(\B)(\d{3})+$)/g, ".")
                        }));
                    return o
                }

                function x(e, a = !0) {
                    let o = (0, t.accDiv)(e, 100).toFixed(2);
                    return a || (o = (0, t.accDiv)(e, 100) + ""), F(o)
                }

                function F(e) {
                    let a = "" + e;
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function q(e, a = !0) {
                    let o = (0, t.accDiv)(e, 100).toFixed(2);
                    return a || (o = (0, t.accDiv)(e, 100) + ""), O(o)
                }

                function O(e) {
                    let a = "" + e;
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function B(e, a = !0) {
                    let o = (0, t.accDiv)(e, 100).toFixed(2);
                    return a || (o = (0, t.accDiv)(e, 100) + ""), V(o)
                }

                function V(e) {
                    let a = "" + e;
                    return a.replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function U() {
                    const e = "App-H5",
                        a = document.getElementById("app");
                    a.classList.add(e)
                }

                function j(e) {
                    let a = "";
                    return m() == n.A.CURRENCY_CONFIG.BRL ? a = f(e) : m() == n.A.CURRENCY_CONFIG.NGN ? a = w(e) : m() == n.A.CURRENCY_CONFIG.IDR ? a = v(e) : m() == n.A.CURRENCY_CONFIG.MXN ? a = b(e) : m() == n.A.CURRENCY_CONFIG.PHP ? a = k(e) : m() == n.A.CURRENCY_CONFIG.VND ? a = P(e) : m() == n.A.CURRENCY_CONFIG.THB ? a = D(e) : m() == n.A.CURRENCY_CONFIG.EGP ? a = S(e) : m() == n.A.CURRENCY_CONFIG.COP ? a = R(e) : m() == n.A.CURRENCY_CONFIG.INR ? a = F(e) : m() == n.A.CURRENCY_CONFIG.PKR ? a = O(e) : m() == n.A.CURRENCY_CONFIG.BDT && (a = V(e)), m() == n.A.CURRENCY_CONFIG.BRL || m() == n.A.CURRENCY_CONFIG.COP ? a.split(",")[0] : a.split(".")[0]
                }

                function Y(e) {
                    return e.toString().replace(/\d+/, (function(e) {
                        return e.replace(/(?=(\B)(\d{3})+$)/g, ",")
                    }))
                }

                function L(e) {
                    let a, o = s.ChannelConfig.netList;
                    for (let t = 0; t < o.length; t++)
                        if (o[t].id == e) {
                            a = o[t];
                            break
                        }
                    return a
                }
                a["default"] = {
                    convertCurrency: d,
                    changeMoney: l,
                    getGold: c,
                    getAmountIndex: u,
                    AddH5: U,
                    changeTime: j,
                    changeSeMoney: Y
                }
            },
            89015: function(e, a, o) {
                "use strict";
                o.d(a, {
                    Ay: function() {
                        return y
                    }
                });
                var t = o(66848);

                function r(e) {
                    var a = document.cookie.match("\\b" + e + "=([^;]*)\\b");
                    return a ? a[1] : ""
                }

                function n(e) {
                    let a = window.location.href,
                        o = a.substr(a.indexOf("?"));
                    o || (o = window.location.search);
                    let t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                        r = o.substr(1),
                        n = r.match(t);
                    return null != n ? unescape(n[2]) : ""
                }
                var i = new t.A;

                function s() {
                    return window.fbq
                }

                function d(e, a, o) {
                    let t = s();
                    t && t("track", e, a || {}, {
                        eventID: o
                    })
                }

                function l(e) {
                    d("CompleteRegistration", "", e)
                }

                function c(e, a, o, t) {
                    let r = !1;
                    null != e && (r ? d(o, {
                        value: e,
                        currency: a
                    }, t) : "rechargesuccess" == o ? d("Purchase", {
                        value: e,
                        currency: i.ChannelConfig.currency
                    }, t) : (d("Purchase", {
                        value: e,
                        currency: i.ChannelConfig.currency
                    }, t), d(o, {
                        value: e,
                        currency: i.ChannelConfig.currency
                    }, t)))
                }

                function p() {
                    d("login")
                }

                function u(e, a) {
                    let o = !1;
                    if (null != e) {
                        let t = parseInt(e);
                        d("purchase", o ? {
                            value: t,
                            currency: a
                        } : {
                            value: t,
                            currency: "BRL"
                        })
                    }
                }

                function m() {
                    console.log("gamestart"), d("gamestart")
                }

                function h() {
                    let e = r("_fbc");
                    if (e) return e;
                    let a = f();
                    if (a) {
                        let e = a.split("."),
                            o = e[1],
                            t = e[2],
                            r = n("fbclid");
                        if (r) return `fb.${o}.${t}.${r}`
                    }
                    return ""
                }

                function f() {
                    let e = r("_fbp");
                    return e
                }

                function g() {
                    return window.location.href
                }

                function w() {
                    return navigator.userAgent
                }
                var y = {
                    EventRegistr: l,
                    EventDoCharge: c,
                    EventdailyLogin: p,
                    EventPay: u,
                    EventStartgame: m,
                    getFbc: h,
                    getFbp: f,
                    getEventUrl: g,
                    getUserAgent: w
                }
            },
            77988: function(e, a, o) {
                "use strict";
                var t = o(66848),
                    r = new t.A;

                function n() {
                    return window.kwaiq
                }

                function i(e, a) {
                    let o = n();
                    o && o.ccKwaiqId && (a ? o.instance(o.ccKwaiqId).track(e, a) : o.instance(o.ccKwaiqId).track(e))
                }

                function s() {
                    i("completeRegistration")
                }

                function d(e) {
                    let a = {
                        value: e,
                        currency: r.ChannelConfig.currency
                    };
                    i("purchase", a)
                }

                function l(e) {
                    let a = {
                        value: e,
                        currency: r.ChannelConfig.currency
                    };
                    i("firstDeposit", a)
                }

                function c(e) {
                    let a = {
                        value: e,
                        currency: r.ChannelConfig.currency
                    };
                    i("addToCart", a)
                }

                function p(e) {
                    let a = window.location.href,
                        o = a.substr(a.indexOf("?"));
                    o || (o = window.location.search);
                    let t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                        r = o.substr(1),
                        n = r.match(t);
                    return null != n ? unescape(n[2]) : null
                }

                function u(e) {
                    let a = p("click_id"),
                        o = p("pixel_id"),
                        t = "";
                    return a && o && (t = `click_id=${a}&pixel_id=${o}`, e = -1 == e.indexOf("?") ? e + "?" + t : e + "&" + t), e
                }
                a.Ay = {
                    EventRegistrKwaiq: s,
                    EventDoChargeKwaiq: d,
                    EventFirstChargeKwaiq: l,
                    EventDoAddToCartKwaiq: c,
                    getKwaiqAddtionParam: u
                }
            },
            51608: function(e, a, o) {
                "use strict";
                var t = o(66848),
                    r = o(61581),
                    n = o(65261),
                    i = o(93991),
                    s = new t.A;

                function d() {
                    p("EVENT_COMPLETE_REGISTRATION", {})
                }

                function l(e) {
                    let a = {
                        value: e,
                        items: [{
                            value: e,
                            price: e,
                            quantity: 1,
                            currency: s.ChannelConfig.currency
                        }]
                    };
                    p("EVENT_FIRST_DEPOSIT", a)
                }

                function c(e) {
                    let a = {
                        value: e,
                        items: [{
                            value: e,
                            price: e,
                            quantity: 1,
                            currency: s.ChannelConfig.currency
                        }]
                    };
                    p("EVENT_PURCHASE", a)
                }

                function p(e, a) {
                    if (window.oks) {
                        let o = localStorage.getItem("IP_ADDRESS"),
                            t = localStorage.getItem(i.A.LOCAL_CONST.DEVICE_ID),
                            s = {
                                eid: e,
                                ft: window.oks.oksPixelId,
                                data: a,
                                ip: o,
                                ext: window.oks.oksExt,
                                dId: t,
                                timeStamp: (new Date).getTime()
                            },
                            d = {
                                eid: e,
                                pixel_click_id: window.oks.oksPixelId,
                                data: a,
                                ip: o,
                                ext: window.oks.oksExt,
                                dId: t,
                                timeStamp: (new Date).getTime()
                            };
                        r.eu.post("https://s.oksp.in/e/s2s", JSON.stringify(s)), (0, n.f6)(JSON.stringify(d))
                    }
                }
                a.Ay = {
                    oksRegister: d,
                    oksFirstRecharge: l,
                    oksRechargeSuccess: c
                }
            },
            25800: function(e, a, o) {
                "use strict";

                function t(e, a) {
                    var o, t, r;
                    try {
                        o = e.toString().split(".")[1].length
                    } catch (n) {
                        o = 0
                    }
                    try {
                        t = a.toString().split(".")[1].length
                    } catch (n) {
                        t = 0
                    }
                    return r = Math.pow(10, Math.max(o, t)), Math.round(e * r + a * r) / r
                }

                function r(e, a) {
                    var o, t, r, n;
                    try {
                        o = e.toString().split(".")[1].length
                    } catch (i) {
                        o = 0
                    }
                    try {
                        t = a.toString().split(".")[1].length
                    } catch (i) {
                        t = 0
                    }
                    return r = Math.pow(10, Math.max(o, t)), n = o >= t ? o : t, (Math.round(e * r - a * r) / r).toFixed(n)
                }

                function n(e, a) {
                    var o, t, r, n;
                    try {
                        o = e.toString().split(".")[1].length
                    } catch (i) {
                        o = 0
                    }
                    try {
                        t = a.toString().split(".")[1].length
                    } catch (i) {
                        t = 0
                    }
                    return r = Number(e.toString().replace(".", "")), n = Number(a.toString().replace(".", "")), r / n * Math.pow(10, t - o)
                }

                function i(e, a) {
                    var o = 0,
                        t = e.toString(),
                        r = a.toString();
                    try {
                        o += t.split(".")[1].length
                    } catch (n) {}
                    try {
                        o += r.split(".")[1].length
                    } catch (n) {}
                    return Number(t.replace(".", "")) * Number(r.replace(".", "")) / Math.pow(10, o)
                }

                function s() {
                    let e = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890",
                        a = "";
                    for (let o = 0; o < 32; o++) a += e.charAt(Math.floor(Math.random() * e.length));
                    return a
                }

                function d(e, a) {
                    return Math.floor(Math.random() * (a - e)) + e
                }

                function l(e, a) {
                    let o;
                    const t = {
                        "Y+": a.getFullYear().toString(),
                        "m+": (a.getMonth() + 1).toString(),
                        "d+": a.getDate().toString(),
                        "H+": a.getHours().toString(),
                        "M+": a.getMinutes().toString(),
                        "S+": a.getSeconds().toString()
                    };
                    for (let r in t) o = new RegExp("(" + r + ")").exec(e), o && (e = e.replace(o[1], 1 == o[1].length ? t[r] : t[r].padStart(o[1].length, "0")));
                    return e
                }
                o.r(a), o.d(a, {
                    accAdd: function() {
                        return t
                    },
                    accDiv: function() {
                        return n
                    },
                    accMul: function() {
                        return i
                    },
                    accSub: function() {
                        return r
                    },
                    dateFormat: function() {
                        return l
                    },
                    getRandom32: function() {
                        return s
                    },
                    getRandomNumber: function() {
                        return d
                    }
                }), a["default"] = {
                    accAdd: t,
                    accSub: r,
                    accDiv: n,
                    accMul: i,
                    getRandom32: s,
                    getRandomNumber: d
                }
            },
            6730: function(e, a, o) {
                var t = {
                    "./injection.png": 54609,
                    "./shouzhi.gif": 54853,
                    "./turntable.png": 61437,
                    "./turntable_arrow.png": 30047,
                    "./turntable_arrowid.png": 79432,
                    "./turntable_arrowmx.png": 29096,
                    "./turntable_arrowph.png": 75479,
                    "./turntable_arrowvn.png": 6627,
                    "./turntable_bg.png": 44579,
                    "./turntable_money.png": 91540,
                    "./turntable_moneymx.png": 74219,
                    "./turntable_moneyph.png": 48308,
                    "./turntable_moneyvn.png": 2532,
                    "./turntable_sq.png": 94670,
                    "./turntable_title.png": 46846,
                    "./turntable_titleid.png": 97965,
                    "./turntable_titlemx.png": 69045,
                    "./turntable_titleph.png": 92318,
                    "./turntable_titlevn.png": 28542,
                    "./turntableid.png": 75550,
                    "./turntablemx.png": 78350,
                    "./turntableph.png": 63973,
                    "./turntablevn.png": 18641,
                    "./xz1.png": 54833,
                    "./xz2.png": 33722
                };

                function r(e) {
                    var a = n(e);
                    return o(a)
                }

                function n(e) {
                    if (!o.o(t, e)) {
                        var a = new Error("Cannot find module '" + e + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    return t[e]
                }
                r.keys = function() {
                    return Object.keys(t)
                }, r.resolve = n, e.exports = r, r.id = 6730
            },
            18462: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            19541: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            48375: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABx5JREFUeF7lW0toXFUYvvOeTDJ5tTa2laYxPsBqlQqCVaiI4kJculARdFNdiOBGSEAICIkIIrjSbiKI3bgUF1KRFiQLQdFoBZXaB9rS2qZJp5nMe+RL+Ccn5/7neW+mkWQzmZxz/8d3vv9xzrlJBNv8J7HN/Q+6DsDzx1aO/Hkt+cxtxeqRm9XCYSxAX648928pd+ruHa2vvzjac6qbi9I1AOD4Yq0+TU6rnAQYt2cyL3z2Ws+FbgARGYDD7994pdzM3QNjC6nqH+MDmW9l4x+aqU73ZFMTLg4lmuVX597u/1R85uVPVvadWao/SfriYIw3AFjRHy9mP9pVbB+UHVsoJY4f3FM7lm8HZ7+/lJ0ZLrZfdHGe5kLO71OplwDy5XLvW5yuqIzxBuDRDxptH6dcn7lSSsxzjotyCChX2Zi/5QGwcQognZlKPWgzV57jDcD4VPNnrEy13g5yGbUY07iP0bLMW8IAn8Tm46zNM3cU60/4lk9vBsAwYgF+p1Xp9ieS4Ik3+h+zAYqbEwkAVIK/S5mTJFikZrd+v6uvPhqlZ4gEABxHiaq0emYr9XQwUGgGS+VUVz6hOwr1adEiAyCCgGTYrRCIw/lIZVCOJwoHALCZP0uV5PyhPbU3fZNebGWQcxKt6i8LydeTiWSn7QUr4gqLlVpz5qeJ3GScAMcSArJBAAItcG++5dUCy/KWK8njj+yuTURJdirQNgUAUkabF/TxA/lWaM8gJs58prHBRlB9pLD8Ibe52pIMQA6AYarYxPg/i/Wxa+Xep/ftXN7/19XePgIFzt65c/nmhau953YUlk/onDbpcQUnEgNkqmNF9w6V5gazmcm4khQ5RDtCkUlxhIYXAJTsao1sJ9mBwgCg0xQ1W5EpTKdHpWr62VwqGQoh0pVN12YeGG597JMjnAGgcwAyiBxXfa62yc3WfDoIfgW99w5mzuKcQDYWoFYSwRiFSSMI7hedFuVDJsAW/+ZbHp0AgPNnFtInaaVNzsvjrvHpKh/zx4cbThsjawBcnSdndczAHDF0OMBUIOrAcQHBCgDQ8/T19Hkxxm1WU84L4jOc47JM7nmdTDH/HN5de84mJ1gBgG2vbcy7rKINA+Q54ncdu1CNbLbJRgBw8IFsb4O8zQraMEcOH9V3kyxUB1PrrAUA1P/hSv48R10ZEBtKoxoUc42vcJwtNk3U3ODCRFXyVPJ1LMDYgaGG9rxAC8C9U83PU6lk5H6+2Ww59fLUYMWlG0frznsBrMrpy/nOaY+Jbtw4Vtw2GXHPA4i5S9kvdU2QjV0HRirK0qhkgJj4bJTIc7DqOuRdZEZlos4WFgAu9l0MjtN50hsVhId3VdhcwAIQRZmL83SvaMrUcYCgqgghAHybHur5bWMezi9Wi7N4bjBXCl2Exp0TkI+426MQAKJhLrR3cYTTYQtC3PaFAODof30lCIZ6gkD+JIDw90KWR1gGUeeALQhygia7RHtgr/ydC4MQAIfeq7ep55cFy86I4zZdF3WVsmG+cmwdJ31cGGwAgKv9qtWXlauyLJfAVMDS302JVK5SojyOpeK4bOcGAGiFVFRX5QRVgjFlb50eEwimMFCFgxxmLAAqqqvYoANAzCk6h7kxXViJAJgYAH9ojixzAwCcUFOcQbjKUAopjvI2YEC2qo2V2WpKgDQuM8saAF0uGCny207d6ptyiykfiAnVVhZXrTYAcN+77dWLPReBKDcqBvjKk/X/9k4iVK1U+cpkuxyuIQBMArhxVQ8AAHzkiT0HFoQDQBeuOp2yrWwIuBqtSoJkpKk0qfRRe821sCrZJtu1DPAVCqVPjYZ3W740FZ3g8gv1ASZnbdgaKoOXS+u3PS57AVUiBKjlGn+rAzpCh26cW30AG5edoRAgY7je3yW2CDy6RhMN7s+uHZHhCh3z8Fbp/MXs0Ru19eM3msMdbYugutoJueJBTQcA1OzvzuVPkkCX1ae5Y4P6bS100LUYgPnm/NqBK4UPXY9xV2ekA5ups4vF2Sh2iuHaAQA1W1wBV2RhIChtex4g6pNXRQU+nRGKIeNjp6ivAwBHK1sWiKth4wwXwyb2wBbVItnaSfPEUtgBYPfkWhMk/8gI07iOgjYgQA5RnmTq3ikwOW/LBNJ1aXqtuTIC4IouzbcFwUa+7LzNM6Y5IQA2Q4lLTuAM5mLe5JjNOJsDqArYCHCdoytpKsdRIsWk7KpTN//x/esXJbE1QjYGghE2d4OqxshGh2mO3LCxuyzfLsuk/FaPc3mJvRihN7I2cyW6CQaYh3cO5X/C2lAFOINQr3Fd/X8FgkJO9waZ8QUJAIMEiV4db25tdTDgNL2Rxq24vNBWAIgP0euveONzKwAiOuzzWq0zAKqyRe/40T81rlTTowBInG/LHtom07NY0Z5cY3XjhH/OVL1r6JNXYgHAR/FWeWbbA/Afspx1qmTwCY0AAAAASUVORK5CYII="
            },
            32282: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            1688: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            64341: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA/CAYAAABdA76NAAAAAXNSR0IArs4c6QAABN1JREFUeF7tm0toE0EYgGeza5v6qi9QPCjqQaig0IMHaREFD14EIZpasVZjG4v4uqgXNepFe/GNxhjtA7XVguDFmyJVD4KCggUPKhUsVnxVrU3rblYmddJ0O7OZf3ey2w3JpXT7Z3b+73/MP/9MJVT4UAlIBS50Aq6C6evrm9HW0bZb0qSNCOllw1OUunRZv10VqDpfWlr6zS3DuQYmFo/XJFW1UZLQbJryuo56fYpyoC4UanEDjitgovHoUUlDER6FdRlFwqHwMR5ZkTKOg4FAIYq6AcdRMLGmSzF9yLdjrGWH80rquYoaaOElFSWv1tU21In0CrOxHAPDgpKUEw83BWoDJNHihHyro6nDp/lXGSfuJBxHwFyOn31AU9QIhYAYD3ByCsauglCgIsMsZ2DsQiFK8oagSCipakr0gHg8DKW9vb1zpGgbeYuVPOEGHOFgzKDYWXbZy7zUFQwGK0VXyULBbIkOzKuUWu/TPMUOFOJvTsIRBiYav1iBVKWDWoPIylZRpT0LDt5CPEY1y1vDJR9EpAchYJyCkk7I8XiNrqnNRgAYDlLUQDi067FdOLbBOA3FKTi2wLCgiLScmeXx+yVN6cyF51gG4zaUkYRMz212jWMJDO6l5DrGITnCLJx1Wa20knPAYMYblGyek6piLayKIDDjFUou4HCDMSuuOvUta0XVD5AQosniIrMCtTyj1VOQIpMLjJMVp10w2fZqvHCygjHruuVijyICjAg4pmDc2NWKAkPgWO0GMsF4HYrdbiAVjFnnbGdo72qRVnVqLKhOo8CI6ro5pSz0PZAoSIPJdyjQVmkaDIsmbkVuXF99kAwsulMGtbpVeWx48t3bd2+eop1vZbZd02Ci0egn1jly5mTcPlOGgsl2Rm7ULRwOz0ltI9LlNCcYLI/hkAGgE3VantfgRr2yhhJLkWCwauZ4D6vhxnzbV15jUEPJLPnSBs43MMZT0TF1DO5t+JB/4SgY8lClMVl5FQz2CqQVjer6JVHinbFnk3WvhAHR2g2eBcPZmymAYSQg18DgnLY2Kq2bNBHVvfsyaXKpP7k0tfFL+F4tnNX/u/8Pit0P6/fsJHha8uXt5rkCZsOVgZUveorOFcu+FAzWZ1BLviqfO7TnTn3JI96VJVPOU2Bwh+31d6U78VdJ6+CfoCL8u/EnFsDPlkxX51vpEHoKzJoLP598/D5lBVE6E5DxGQGlacmbbyLyZqjXeAYM9pbnn/3dLAAEBO3vVrzGM2BWNP6s/TE45TqxvBkI4klEZlrxr21PD0xtgniNZ8Asjmg3ZNlXzfIYs+dWwskzYBZFtJeZKxHEY/AK9TYiL8tLj8kEA4GCYeQ1mPKTf3XaMs0TWhjki0MTuOou4lWeCaWyE7rOqlWMyZYGK6/BZOYIaDh1HZYKHkMrAPMaTMFjKOuqnRyDhyt4zP9NpTGc8hqM1VWp4DH/Ww205dsTHoMv4NDKcx9S3rPK9tM925vteMz+ude2QrYESaQuMP7vpdAOHus+LWSSWPZMb/2or0DrmH2zr0BfOUae9xYnd8EEOdFjzZ6AgQIh8nbBQE5Q+cEwbmFDTJjpMVA4+D12wEAvRHODwRPDIaUj9bik+st4LgAYoRlDCQLVKhgMRFcSXRJSjkAuQoPAQBXxsnwBDMN6/wB9yVGLzCvdRwAAAABJRU5ErkJggg=="
            },
            20973: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            82785: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA/CAYAAAC4nXvhAAAAAXNSR0IArs4c6QAABU9JREFUaEPtWk1oG0cUntndKDYEDOkhufdUuYeSXuNDm6sDDYhINaUxqJYaQumtSQpp0wSaprcSQiq5AruUVA6CBuJr0oNzbcgh3p56Tw4tGAJ2lP0pb92RR+v52523skDVxYbdnXnf+957836Gkgn90QnFTUYGfLnT+Zi4/bkw7L9Jg6kypeQYKD2OyYvY2/Fdt/QXCUsbS/X6z6Mgo1DgW1tbR7u97mckIOcZUB0oUATxyJ1apXZrZmbmH937eZ8XBhwYjoLge1PAaQCgAMfzvijKAtCBA8u/9lZ6Tjj1Xl42+O9oKfrp7JmFi9jsowLHBs0UELk7v39YWaxggkcF/mPnh0cyphPTPRw9iMJotVb5yGcgduPAL2XHdc5Fr5zTMtcA8J/WP38fw4pgDTTgrU7raxqSqyLBTM0VlHDvt7s3477ziWid2CVXm/XmNxjgUYC3OrdP0tDbEAUo4gWVZv3C4yzCQmCMw2BVDD6Yy7qekIwsAsnelZl47OYXUqZMLJO3ZlwmIHW9c7ZHkYx5G4Uy8qyBL6/cWU77JBYrIKTImiBmLC2eX7KxVmvgrVbreToSY7DNQIlYhxOi2WwePzDgEIXX1rp/8wJgCJUGJFJutVp7w+Zct2Jc5N+YZs4UIDJ3Wz+3Ai4yQwz/SzMuiiO27oQOHDPJYAoQJUdjB3wiGJ9YH5/YqA4+KDpqbCMuH9zG8hwHASc3c5NUZrZRN1GqpErDsCir40yVYMAzGwHHvjpL/By5Hof1SOD1RN0YG2UO9fJsEv2hICSo0thzSGpM2sWsHa3q5NhWZWhlKQ9e13ODfjkhwUNRz40Q75Sq/45dA6D4OAO/e66vbRASl3WWlAwOoOn330RF9f7Yd1lBeOwWcxGgE4XrmMn7XNV1NV2ziIKnEB9njN/r9eZD8nLRdpoCbLvkyMrZSmXdpukgUjQa43AEwVBA1hM3ZVn2HlR9MIzAaC2jmDoAjklwzZZdU8WAFVDifWWrgNyM66YeaiDUj9ztJKo74fQxk1MgvZ7pdEZqQaaa5t9TZVbp9djMDIb+b03f/+PkwoNN0Z6P756e/XP7g3fh8oBqhsZ/uztLzz6pyWXqJtGaDfdnp9d7MqA6hYMiNrfnKyaXCvJE/0ymLipBhwFQn7ruTdsJSlopu1VaeFHlEllbXsbAdeloltsL79x49a1DncsAMIqjG08vH/5SZwHwXHfLIktaawRcxXTWIAOg+0EpAc1+Ja9vDF4XVE2Z1wJXzr1zDAZPfPc63nntJZinDgUE/oe/Ty4d0srCK0s9StbP0ZWbFTGnLl+PYwaYB+JfoZmAw7eyPgA809Xt0s2S2rjb9bGbAQCcAeYVkAe4CjycLLVarSxLdaXAZX5t20tjwNOs5wXOgp7oBoXK34XApcN+hLk0NuPMemREyUxeCFx8dFG/Wq3O2VZJmD7OxwiZa8qOuH3ApY1Di/ssvIBpU2cmb2PqbP0ssu8DLmI7S2KgS0R4U7eN6qK9TOUfAg75sf9y/tm+QgOJbVi3SMZVUb58ZP1tvm4YAi5OVqjfaDRmdUyaPi/Kx/n92+32ZjqvTxcyQ8BFH9geX2mFFBXV9VndMIED4KKRLyxme8kmDZylrPw5nidlVVmYCZYBcFF6ihnUmKC2RYqpSwnvx3G1xR5wwQgoT4FvIljestRk7b2jbf+lYj6TGwDXaSjLpuPwrs6CB8CLuER3kArQXVMZAG+3W4Oq6SAFLnrvRqOZYP4fuKqnVjQLo1qfP6X2fFxyq2FUQo1iH75ETaWsox0HjQIs7CEaO2Xuc41K2KL3mVjg/wJJJw18bGHJrAAAAABJRU5ErkJggg=="
            },
            61656: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            52202: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA+CAYAAACbQR1vAAAAAXNSR0IArs4c6QAABBBJREFUaEPtW01ME0EUntkfaCO/cpBEg9HoBS7qTYQYSIgnvSl4UAi1rUYTbyAc+PEAws1Eg0stAT0I6klPhgRiQLypF3vRaCSa4KHya1rYnzEDWZgdtrTd7pZWpqcmnXk/33tv5r03rxDs8Q/c4/oDywCc6F3t4SDXVgQjiN8H3hfliO0vfO636QD04mDk7MKa3KP+BacXkBtqSOv91JbbboW3JQCuSJGyz/PCj6gsGHge4j4qK+Ix70xLwbAVYeLtqexfasqTvwZ+aicNjF2iAiqKlcNP/e7ZeDTo3y0BUPdg6d2v+fxKnRgWgASjNGcZlRSLNXZ5BLZ4eF6enFvLN8hL8j1YvDwzfqvgTFoAqO1b0nRhSCHo7yV5kZlSUbxsxTJYEexpc7L8LLzirtQB1nnQvHAoTrQWcGkHwMwLSOGwN0QhaE42LLC7uxAYMgPajCfmkzYATt2TEW0RLBQdCqSgdeXRu30X8jsTsVDrq+Xu8ZCrgz5jYlkfr8O/fbgjJh3SSW/ACpAhkIhCeE0yFnKaPimzJQDwofQlzJ1LVHm87niJ9ibRQ9Fp+ikDkIzimb7WkgdkulLJyMcAMEML379VwlBZMkhm+tpppXnWLB8xeEAgGLyKVLUVAFSe6QpZkw+GIM/3eT2eJ/r+TQCk4MMqqApT1ghn1y7EK9V+z81pLPUmAI+C9yc41VWTXapYk1bjo5PXPbdrDQAMDkrIGrns3OXz+deNv+kBNAAIgd+cILRoIPrNERUV4SWE4IBOG1sFAqHDbl4ccB3VFKWf5IV5xAeAB11+j7/bboF0epIkzZFCwRztsbfphtcJflJQ6oQq6CJpMwDihgDzABYC7Axgh+BevgUAgKH6+vrqwsLCP45cTWm6BhcXF/ePjY1N0fVN3GtwS2kYcgIAWiCceEEIw/bzMi/stgFAJyb2C5JJFGHI5/NVGFJhs2wpk0S2UxZE5DjGfsDwQACtcdfsZJZptOiUe1tLbKMvIEpkjOL4BAIYsFUZBdwwFigwhHj03DYepvRlv94H2NYQIRkHKE8g62e7BHS6GKL7G7GKLdOmKAOAeYDxMGQhQPTQ2BlgEwLsEHS4FmC3ANXmZ9dgjKYrywPMzjSWCLFEiCVChrKYZYIsE9x6TrYpEQQsE2SZoLOvwywVZqmwceSH1QKsFjCfQEmoGMJt8YaGhnI73wmdvAbxe+Do6GgokREccwDWByaVEeOdv9G354Dw3Y5cgB5cwtkmD/JS/q+RBpQjUIWX6LdHyAuN5IDkju8CZgjaofRu0djJg2MOS2+MzdJesFsqpMY3lvUNj6OmfYH/AISdlI8LAF6A3wo5nmvUVrnz9LBhanZxbvf6kGeu9lpTtRH6LZDmyv4v4JwdsoPyP9LUAnsWu2FtAAAAAElFTkSuQmCC"
            },
            12116: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            65775: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/Ox.cc140e6a.png"
            },
            76822: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/Rabbit.f8986e91.png"
            },
            62413: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/Tiger.866a73bc.png"
            },
            3122: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/img_none_jl.ac18b4f1.png"
            },
            1728: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABQCAYAAACj6kh7AAAI8UlEQVR4Xu3df2wbZx3H8e9zPjth4leKgAp1S7K1VENl9VaBgH+qiAlpfxQqhliAAq0YLINWK0PTOoQYmkD7A4kJNYICGitQtgXWLWqZNlAnqwLxu607KiTUErtKNcIkGpgExL/ueO42J3bixL6753GJ874/WsV+nq/ved3po8dPHjtKWh25nJsZGBwV5XxA+fIuX2S9iO+2bMuDCCCAQGIBVdUZc0lE5X2lJiuXvQkZGZ5bXFYtfqA/P7XLE+dB3XlD4nOgAAIIIBBPYCYlqf3/zV4z0dh9IbD0rKpvYPghX/y9LzdQ53xR406t8lzppemijIzoBORAAAEELAgE+fPaq4c8192u/DCDsmEKKedQ6fLUvnr+zAdWX/7it33xxnSbOV85Y5Wtgz+wcFqURAABBNoKpM9M3a6UOqgb9is9cSplh/aFARb886rThdGaI48FYeV53o7qTdedaFuRBggggIBFAff0X292HOd4EFp6ierj5ey1R5TkCv2ZASnoB9frxa7bK1uHHrZ4DpRGAAEEOhZInynsVkoe0XOrS+XZwrBKn734SeV7h3WFfDk7fGPHlWiIAAIIdEEgky/+Sc+wtoijdin9w1P6h53Mrrogz0sggEBkgXT+4h1KvEN6Bf4J1ZcvFPQ+qyFVq20qbdt4IXI1OiCAAAIWBfpOXdjop1Ln9eL7pWCGVQk2hZZni2m2LlhUpzQCCMQTCDeyD+mcUlUdWMEES0SvXy3ZRBqvOr0QQAABswL1nCKwzLpSDQEELAgQWBZQKYkAAnYECCw7rlRFAAELAgSWBVRKIoCAHQECy44rVRFAwIIAgWUBlZIIIGBHgMCy40pVBBCwIEBgWUClJAII2BEgsOy4UhUBBCwIEFgWUCmJAAJ2BAgsO65URQABCwIElgVUSiKAgHmBzJnCV/R3I98fVOazhOZ9qYgAAoYEGsOKwDKEShkEEDAvsDisCCzzxlREAAEDAq3CisAyAEsJBBAwK7BcWBFYZp2phgACCQVWCisCKyEu3RFAwJxAu7AisMxZUwkBBBIIdBJWBFYCYLoigIAZgU7DisAy400VBBCIKRAlrAismMh0QwCB5AJRw4rASm5OBQQQiCEQJ6wIrBjQdEEAgWQCccOKwErmTm8EEIgokCSsCKyI2DRHAIH4AknDisCKb09PBBCIIGAirAisCOA0RQCBeAKmworAiudPLwQQ6FDAZFgRWB2i0wwBBKILmA4rAiv6NaAHAgh0IGAjrAisDuBpggAC0QRshRWBFe060BoBBNoI2AwrAovbDwEEjAnYDisCy9ilohACa1ugG2FFYK3te4zRI2BEoFthRWAZuVwUQWDtCnQzrAistXufMXIEEgt0O6wIrMSXjAIIrE2BKxFWBNbavNcYNQKJBLoRVv6LM1L7ZU7cWz/SdK4qky/4wSPl7LBKNAo6I4BAzwvYDit/+qLUfv4z8f7wGxHPk8z3HiWwev6uYoAIWBCwGVbhjOrJx8U79fumMyewLFxISiLQ6wK2wsr/z7+l9vSkeCeeCWdU9cPZ/DZJ7bhV1ObrmWH1+s3F+BAwKWArrLznT0v1yPdFZi/Pn65a/xZxd31qSVDVG7CGZfLKUguBHhOwElaVilQfPSzer3ILWo4jqZtvkdTOD4uk08sqElg9doMxHARMCdgIK/9vL0j1W98Qf+aFhdO86ipxP71PnC1b2546gdWWiAYIrD0BG2EVvgX87rhIaW7hLeCb3izuXQdE6f87OQisTpRog8AaElgprLzzfxFn0+bIGrVnjklt8ifNC+sb3yqpsf2iXvf6jusRWB1T0RCB3hdYKayqx54Q7/iT4mx/r7i3fWLFtaZGqerRx8R79ngTnqPDyt1/QKSvPxIqgRWJi8YI9K5AJ2FVH73acoOkP/uFtqFVnfih3rLwbBOaunpQ0vfeHzmsgiIEVu/ef4wMgY4FVgyrFqEThkcQWnvvEUmlWr5Oy7B6wxvF1WGlBtZ1fG6NDQmsWGx0QqB3BFYMqyMPi3fyuWUHmxp5n6Q+unvJ8/W3j01PvPo1kv7SV0Xp0Ip7EFhx5eiHQA8ItPttYLD9oHZUf2Qm/8flQ2vPHZJ6z/b552snT0gt2BDaeOi9Ve6+e8S5fksiNQIrER+dEVi9Au3CqnFk3qnfSXXiR0270uef1wvn4cxJ71L3/nxOquNfF9GbQxsP9zN6n9U73p0Yi8BKTEgBBFafQJSwqo/O/9c/w5lTq9lWMHNK7RmTyoNfXhJqqVveL6kPjhpBIrCMMFIEgdUjECesGkdXe/opqR072rSnKnw+2Pz54t+bIIIgc++6d9mF+ahqBFZUMdojsIoFkoZVfejhrvVD31zy1q+JRv8mMH3fA7F/I9iKmcBaxTcfp45AFAFTYTUfWufOhp8LXLxeVX/evfuLiRfZF4+PwIpyxWmLwCoVMB1W7UIr3A2vvybG9KEDq6iX8323PFtMy8hI1fQLUA8BBK6sgK2wqo+q9uuTUnvkOwuD1G8FM197qO0u+Ogqqqr68sVpX/wNqlbbVNq28UL0IvRAAIH/VwHbYVUfd/j9VrlfhD+6+gPNzrZ32iApqszZ4k/F9z/kizNWyQ42xKSN16MmAgh0S6BbYRWOR++7qjxwX7gXy/3c3ZaGqCZV5vnpj4lXPaI/GXSunB16u6VXoiwCCHRRoKth9cq4vKnz4VfFJPnozUpEvnJ2K8nl3MzAcEGvY21wfNkzd+Pw4S668lIIIGBY4EqEleEhtCo3U56Vl/8WYSY/tUvPsPS+e5lzPG/H3E3XnejCCfASCCBgWKBHw0orpUbL2Wsm5v94ql58P6gX3/eGoeXLncy0DN9JlEPAskCvhpVSzqHS1sE7A76Fv/as3xr2rbv2oO97Y6+45n2lxp1q9WTppekiWx4s322URyCBQM+Glajx0mzh8/X8WfLn6TOnC6PiiN5EIesT+NEVAQQQSCCgLukcOlC+YejHjUWWBFb4ZK7Qn17n3KZ8f6dejM/qidiGYHNpglenKwIIILCCgN4UKjLjK/mtft83Wf5HYaLVu7r/AWMshlZxddFCAAAAAElFTkSuQmCC"
            },
            46581: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            16008: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfZJREFUWEftl99NAkEQxr9ZPOSRBoxeA3LXgVagViBWIFagVKBWgFYAVqBWcGsFe1SgLxrDmR2zBxhigNtZwcTEe2Vn5jd/9tuBEPg1M9N8VerYmdesvXtP4zzEFYUYNTKzYwn3AHYm9rli7IdAiAHmBJ/mEAQhAnBlfxtnniyonFaMI0klyGXERD0LTghohrREasPAC0ENFNsu1fWwB9i21MkqzjPwQHVteBXOQn38bQDXS5f5T2YntALaqo3Ox+7WowOIMpMQoT+jC94dCQHIR4x9fFe+zDQjgpFWQwzApDpFa/t6Xor1p+E52F54p+/aJ70FTKpdtLZv5wWJMtMmQm/dAAsrED0NT4nt1VoBALgZSJHG5Q2Y/eraGOkgilswCThQjLOp5o/fCOoBfCjJvrzC0hmYDVBK6fj9WPQ4VfL8FOD3hchlDVI3hbV3X3PgNAA4JML5WmfAEi4+WnF3WV2lWuDdAp/gU7DNzHSYcFk5AL5DyMBNkcQnPg6/IHR+z+C9KhuvCjAjLdJYVzmb/b2Rmb3J4rrUzAcgHyVxLAk+PesjTD4Ag1ESH4UAbOq8zxXiVAlQXjvGWW2yfEhALFEf4KUiVQkgCRhy9h+AIm2epWtUSKkX2OQkUa0VBi5dMaFT/jcst1qlDlYdYJk/S+rBbdWfW1nzTuAeZOAAAAAASUVORK5CYII="
            },
            52867: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAyxJREFUWEftV9Fx2kAQfXtCsj/tAjKgBgJUAO6ADkwHQAWGCowrMK4gpALbFSDSgGBSgMlfjMxusockDhmcjGdMnBnfD9Jp2X27+3b3jrBn+ZN4SISOCHpJPRwWxY4ncYUJt7pvBGc/6+GsKBNM4j4IF0JmmFTLvV2myN08nsRNNqaxrJYHQRSLfhPgDoIekelkskK4AzMR4drKkGmv300jk1kKD46IrgXS1L1lLaRgOr8A83RZD8eZnAXgeFPJhR0AgUaBMHEADMGYugBI0AS4ncmwKTU9XvVdAH4UPxBwAmCWRY2KxoXQJcYchC9pBBaeoC6uN4IwILoEpJXKjBLBwCdM1IAAI08wWKXvWZQIqEC4n4KcLQV1CqL5tYt8aZXb3NporJcZQfirgtKUqPIs/7nHgjOPqCOQ1sp4rRJzW5+dFFuvmRC7kaQginUjN7YUnPqEOA1VJjs2gqvUqPuc63eN7gOgHgeEBxeUArBk26AyXcNMQrh082lY86teYZGsFWmKalk4U+/SyJmREb5xo8SEvqY2401OwmcAAJtzeKXySriSMN/7QNP9o+Y4EfQCz2uIyInHfL+C9InoPHdEiQuMfWMav6tkRqunH7QG7aQWeBaBTSxoDNCCIJWMyW6klMkARSoj4FYhZVZU+UIwsxd0gI6/fc9rt2DgIK/kR7HtZv9qvZCCw0B6twAiAi1yRkO0fWYlp+RaGEvAzWJIrUDELR1rUq7ngrue9wGt81p4WhR0y1XIdJNq+cqV8afzDgnnU1OHzw4dW01Pv+9KwWxZC8M/AGgn1fLNFoBJ3HZ7xQeAV0dACQadbPqbrhVwQlvnATP0mLc4wGQu3KkqgnpRBwi3xY75bsvwMF1oTxUczPjOMrQcKPlNz5gNBx4fT7c4oEeu4Cg7WlnAq+SxS4Ju3rxKfq2o42858NEH/osIvGoWOPeCnOh6IMkuC/mmADrpchKmzWNrGmIt467iNJyJPbatV1FHvn8UzW73nPnevBztmdHeB9NL5ptbLBjQO6Wd2fbSuLkyHQSH3hOequEgPzT4k7htiM7fMh22yQGRmFL/6fOne/X0FzaLG92s5W+bAAAAAElFTkSuQmCC"
            },
            14288: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAYZJREFUWEftmM1RAkEQRl970CshSAYeZamCyUCMQIwAjIAlAsnAIgIIYeUg3CQDNgSueti2hgX5tSgYdsVy5jgz3fP1Nz1btU/YNYwp8MEDggFuQK937nOelBgYk9BnFHV3pZOtyZKpIfoCFJzPPySBEqMSbgpdFxiYDmjjkLyn3ytt3qJwkXcpMDAhaOv0Bx6RUbXDcPBkI1OBganD7FrPZ6jcM4z6c4HVCZDRQzi65imXUpSzdG9Rk0rTCuyB1o6uM8tApS+Uq++o/dad5YiFoKpnKW0uygt0vR3voHfQ1QHXeN+D3kFXB1zjfQ96B10dcI33PegddHXANd734H9w0Eyyw2uu/jH+Az/uJdNAtONcaxYJEqkLlqZ+qoVH+QLLfQVZoDl8LaZ0K6WqvX0xua4nUre0dQkwy5VnVJq5ivjpsERDRoO2XV5HwLeVFhfyjV9/RewKXd0WaGdS2mpRcN5Ac4rKo6Wqq8ZsU/7FqhWqeofMhGaF52KUMUjEFV2iaLp5a1+Gnoe2XJlhRQAAAABJRU5ErkJggg=="
            },
            79691: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAxxJREFUWEftmDtMU2EUx/9fkUJLaXjFNIgiE47iJG0Cd9ER6ugkwooBFxwpIy6S4IqGSTeqI1MlKky2qy7UF8HwkEdftLSfObe9t6UP7qu3lMSTdPke5/y+87jf18NQTgShDSd4BAYBwG2A3yy7zvAgCwMIIQM/NgLL5dSxksFBwQvGXwNoM2xfiwKOMDjzFYOeBXQLCwCf0qK3+mvZHD4HfJLePKBb8AF8tvoGdWjkfAHra09pZxbQLYwBYljrRzh7gPWAPwc4vAnApELQfeYDWFkfq0vvSWfibJoAVwDu1X1OMzdy+Bk8w0Fw+tbVpYQZ3MO8LtFyUP8BK0XHfiuFloEUdt7Yzw1gzT1IYJ2jcdj6T0Wwb+Md9QFosXNcfRiF05MUgTIxhv3VZuy/t108YPu9hOg1giSRwAhSSUwNMQG5xiNw3EmJHKldC7aXHIh/vaLEJc+bBtjYlUbPzDEauzKiscSPBmwttuJ0z6IajhZqAnQMJBEJWhUNUCF0T0bkkBLcr+dOMe+0iipACtW1J8di5f1dbcLO25aKdpyeE7gmovK8EThVHiS4npkjNN9Iy0YPP1rx55WjBLLacKoAuyeP5SQvJNp7ZwP9JKGwUs5JQgXxc96pOeeKT60qxB0jMXR5EyUe+73oQDRoBRVEr+9IzrlqwanyoERF1UihlqqSxtMxhu+zTlx/lq9WGifPafmUnFc4qjwoKaB87ByJo/1+3psE2ZD7ANO6Xb9N8XbQUsmaACXFlUIe+dKIrZetWuwrrtUFSFqLIauZd4XUugFJiWsiIl/+20stOPrUpOgRrQsMAVJO9voOkdqlm6K6oZUOYgiQlNj6UyKg1jtWrScNA6o1pHfdZQAUNs1rr+n1m7wvdAn+uA8KU2B8wfBZzVCQYWMM1E1Ncmoe1bZhqXQgamiuf+jLPnGzXdUVpT01nc+wMeq25t/gnqEX4Gy6phCVjGW4Dxtrc9nnVqHcHZqFhcnt1wuBLeiulgLSSLbbSq3gWjc0D8DZY+qqnn0sVHITgXI+CiaCmtWeC4MjBLAAmrCMQOCgGOcfXcIxxXLxwRAAAAAASUVORK5CYII="
            },
            16034: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAoBJREFUWEftmTFoE1EYx//fJXdCp4CO2nqI4HZJN8FBOnTQwQidCmIEJ5em4FAHTaogDoKZnIRaByehmRwcxMHBqZc4ictLq2MLXeyQi+/T76WJ8Zqh18uZCHcQON697/v+75/vDe/3CEOenK9yPyzrJjFfBjgP4OyweSMYawHUYKJ64M2sD8tH4UHHV0UmrBGQG4GAKClaTFY1LPQvgbavakRYkqz66xfo5ib48yZ4dydKoSPPpdPTkF/mahF08pSJ06xXO4Vz1V6SvkDHV1UQKry/j59v69Dv3x250CgmZubmYV0pgqamwGTVAm9mWfIagbavSkRYE3FB7QnwfXsUNSPnEDez5RUjEozr7YJbNwKdhlKyETpvXv9z58KrECczC4tgYC9guNR3b3cHwf27kVedRIC9vAI6f0H+6jKdaLQ2GFzsvHoB/eljEvUi57Tm5pFdWJS4OjkN5f9+yQePH4DH1HvhFciOth89leGWCGR5a98pRV5pkgHO85cmfSrwuC6nDh7XuV5c6mDqYFwH4sanPZg6GNeBuPFpD6YOxnUgbnzag6mDcR2IG/9f9aChCnJoTwoSRXXTOjON7L2HQhcafw7uE4A9eguxLl5C9sbt7sHdbm4tEeua4LaOgKMJeOTQLod3JqtE8FXOJigBlpMAjwawR6udd90u3fJVEYQNwW/i4rgQyCB+E/eEtvYBpt1Uz4hRHhfAFOcyBwBTE6odz1016GOw5ZzmVgWsDX6VHS2klb9tJ+ao9Bl5s8h4swa3mbqEWuC5hq4eEigDB7ywkiDZH7oNBVgS45ZQ1cEJhyh/72NXKF0DWK4g5Coiiad3DfEh0HodBXcvXOQXmXxiiTbt1eoAAAAASUVORK5CYII="
            },
            64040: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/home.d1127d24.png"
            },
            17229: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/light.5bc8f0c2.png"
            },
            69489: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/money.e569a68c.png"
            },
            97092: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/rewardWait.983f12f9.gif"
            },
            28023: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/tigerWait_step_1.4f473f9d.webp"
            },
            2550: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/tigerWait_step_2.7d546330.webp"
            },
            21425: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/tigerWait_step_3.f7065ac5.webp"
            },
            92218: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/treasure.73ab56a3.png"
            },
            54609: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/injection.990dd162.png"
            },
            54853: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/shouzhi.5aed177f.gif"
            },
            61437: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable.e78bb909.png"
            },
            30047: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_arrow.34892b5c.png"
            },
            79432: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_arrowid.74409b37.png"
            },
            29096: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_arrowmx.0767ce63.png"
            },
            75479: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_arrowph.52f6cd5a.png"
            },
            6627: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_arrowvn.11adb2eb.png"
            },
            44579: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_bg.afe6a43b.png"
            },
            91540: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_money.023e0f19.png"
            },
            74219: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_moneymx.023e0f19.png"
            },
            48308: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_moneyph.023e0f19.png"
            },
            2532: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_moneyvn.023e0f19.png"
            },
            94670: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_sq.6118285c.png"
            },
            46846: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_title.79fa14a3.png"
            },
            97965: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_titleid.2f3554ea.png"
            },
            69045: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_titlemx.64ff9d5c.png"
            },
            92318: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_titleph.76c7d1a3.png"
            },
            28542: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntable_titlevn.1b74def8.png"
            },
            75550: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntableid.2498823e.png"
            },
            78350: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntablemx.e02d334a.png"
            },
            63973: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntableph.dd2b158f.png"
            },
            18641: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/turntablevn.76654d5a.png"
            },
            54833: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/xz1.3c68f210.png"
            },
            33722: function(e, a, o) {
                "use strict";
                e.exports = o.p + "img/xz2.f499a806.png"
            },
            75017: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            }
        },
        a = {};

    function o(t) {
        var r = a[t];
        if (void 0 !== r) return r.exports;
        var n = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o), n.loaded = !0, n.exports
    }
    o.m = e,
        function() {
            var e = [];
            o.O = function(a, t, r, n) {
                if (!t) {
                    var i = 1 / 0;
                    for (c = 0; c < e.length; c++) {
                        t = e[c][0], r = e[c][1], n = e[c][2];
                        for (var s = !0, d = 0; d < t.length; d++)(!1 & n || i >= n) && Object.keys(o.O).every((function(e) {
                            return o.O[e](t[d])
                        })) ? t.splice(d--, 1) : (s = !1, n < i && (i = n));
                        if (s) {
                            e.splice(c--, 1);
                            var l = r();
                            void 0 !== l && (a = l)
                        }
                    }
                    return a
                }
                n = n || 0;
                for (var c = e.length; c > 0 && e[c - 1][2] > n; c--) e[c] = e[c - 1];
                e[c] = [t, r, n]
            }
        }(),
        function() {
            o.n = function(e) {
                var a = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return o.d(a, {
                    a: a
                }), a
            }
        }(),
        function() {
            o.d = function(e, a) {
                for (var t in a) o.o(a, t) && !o.o(e, t) && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: a[t]
                })
            }
        }(),
        function() {
            o.f = {}, o.e = function(e) {
                return Promise.all(Object.keys(o.f).reduce((function(a, t) {
                    return o.f[t](e, a), a
                }), []))
            }
        }(),
        function() {
            o.u = function(e) {
                return "js/" + e + "." + {
                    18: "28a6c8b6",
                    23: "62206334",
                    43: "a5994127",
                    107: "6cd5a1a7",
                    132: "7313a900",
                    136: "0438b50c",
                    137: "6dc4414d",
                    172: "5177ed81",
                    388: "da222a82",
                    424: "98f159f4",
                    440: "d2c24a70",
                    499: "170374c0",
                    506: "af10f844",
                    593: "5a29ffba",
                    624: "ef38adda",
                    668: "704bfe65",
                    791: "2ba37588",
                    871: "48aabcf1",
                    881: "610623db"
                }[e] + ".js"
            }
        }(),
        function() {
            o.miniCssF = function(e) {
                return "css/" + e + "." + {
                    18: "7d084640",
                    23: "583a098d",
                    43: "676d8f53",
                    132: "a30edaeb",
                    136: "789251e6",
                    137: "b6ef487e",
                    172: "73f4ee2d",
                    388: "a707404a",
                    424: "f977567b",
                    499: "fcc6c1b1",
                    506: "892786df",
                    593: "da840177",
                    624: "fe5fdf33",
                    791: "fad2f3a8",
                    881: "342db8b6"
                }[e] + ".css"
            }
        }(),
        function() {
            o.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            o.o = function(e, a) {
                return Object.prototype.hasOwnProperty.call(e, a)
            }
        }(),
        function() {
            var e = {},
                a = "DoubleWinSlots:";
            o.l = function(t, r, n, i) {
                if (e[t]) e[t].push(r);
                else {
                    var s, d;
                    if (void 0 !== n)
                        for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
                            var p = l[c];
                            if (p.getAttribute("src") == t || p.getAttribute("data-webpack") == a + n) {
                                s = p;
                                break
                            }
                        }
                    s || (d = !0, s = document.createElement("script"), s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.setAttribute("data-webpack", a + n), s.src = t), e[t] = [r];
                    var u = function(a, o) {
                            s.onerror = s.onload = null, clearTimeout(m);
                            var r = e[t];
                            if (delete e[t], s.parentNode && s.parentNode.removeChild(s), r && r.forEach((function(e) {
                                    return e(o)
                                })), a) return a(o)
                        },
                        m = setTimeout(u.bind(null, void 0, {
                            type: "timeout",
                            target: s
                        }), 12e4);
                    s.onerror = u.bind(null, s.onerror), s.onload = u.bind(null, s.onload), d && document.head.appendChild(s)
                }
            }
        }(),
        function() {
            o.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            o.nmd = function(e) {
                return e.paths = [], e.children || (e.children = []), e
            }
        }(),
        function() {
            o.p = ""
        }(),
        function() {
            if ("undefined" !== typeof document) {
                var e = function(e, a, t, r, n) {
                        var i = document.createElement("link");
                        i.rel = "stylesheet", i.type = "text/css", o.nc && (i.nonce = o.nc);
                        var s = function(o) {
                            if (i.onerror = i.onload = null, "load" === o.type) r();
                            else {
                                var t = o && o.type,
                                    s = o && o.target && o.target.href || a,
                                    d = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ": " + s + ")");
                                d.name = "ChunkLoadError", d.code = "CSS_CHUNK_LOAD_FAILED", d.type = t, d.request = s, i.parentNode && i.parentNode.removeChild(i), n(d)
                            }
                        };
                        return i.onerror = i.onload = s, i.href = a, t ? t.parentNode.insertBefore(i, t.nextSibling) : document.head.appendChild(i), i
                    },
                    a = function(e, a) {
                        for (var o = document.getElementsByTagName("link"), t = 0; t < o.length; t++) {
                            var r = o[t],
                                n = r.getAttribute("data-href") || r.getAttribute("href");
                            if ("stylesheet" === r.rel && (n === e || n === a)) return r
                        }
                        var i = document.getElementsByTagName("style");
                        for (t = 0; t < i.length; t++) {
                            r = i[t], n = r.getAttribute("data-href");
                            if (n === e || n === a) return r
                        }
                    },
                    t = function(t) {
                        return new Promise((function(r, n) {
                            var i = o.miniCssF(t),
                                s = o.p + i;
                            if (a(i, s)) return r();
                            e(t, s, null, r, n)
                        }))
                    },
                    r = {
                        524: 0
                    };
                o.f.miniCss = function(e, a) {
                    var o = {
                        18: 1,
                        23: 1,
                        43: 1,
                        132: 1,
                        136: 1,
                        137: 1,
                        172: 1,
                        388: 1,
                        424: 1,
                        499: 1,
                        506: 1,
                        593: 1,
                        624: 1,
                        791: 1,
                        881: 1
                    };
                    r[e] ? a.push(r[e]) : 0 !== r[e] && o[e] && a.push(r[e] = t(e).then((function() {
                        r[e] = 0
                    }), (function(a) {
                        throw delete r[e], a
                    })))
                }
            }
        }(),
        function() {
            var e = {
                524: 0
            };
            o.f.j = function(a, t) {
                var r = o.o(e, a) ? e[a] : void 0;
                if (0 !== r)
                    if (r) t.push(r[2]);
                    else {
                        var n = new Promise((function(o, t) {
                            r = e[a] = [o, t]
                        }));
                        t.push(r[2] = n);
                        var i = o.p + o.u(a),
                            s = new Error,
                            d = function(t) {
                                if (o.o(e, a) && (r = e[a], 0 !== r && (e[a] = void 0), r)) {
                                    var n = t && ("load" === t.type ? "missing" : t.type),
                                        i = t && t.target && t.target.src;
                                    s.message = "Loading chunk " + a + " failed.\n(" + n + ": " + i + ")", s.name = "ChunkLoadError", s.type = n, s.request = i, r[1](s)
                                }
                            };
                        o.l(i, d, "chunk-" + a, a)
                    }
            }, o.O.j = function(a) {
                return 0 === e[a]
            };
            var a = function(a, t) {
                    var r, n, i = t[0],
                        s = t[1],
                        d = t[2],
                        l = 0;
                    if (i.some((function(a) {
                            return 0 !== e[a]
                        }))) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (d) var c = d(o)
                    }
                    for (a && a(t); l < i.length; l++) n = i[l], o.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                    return o.O(c)
                },
                t = self["webpackChunkDoubleWinSlots"] = self["webpackChunkDoubleWinSlots"] || [];
            t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        }();
    var t = o.O(void 0, [504], (function() {
        return o(5200)
    }));
    t = o.O(t)
})();