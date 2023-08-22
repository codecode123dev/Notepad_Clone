<template>
    <div class="containerMain">
        <div class="container">
            <div id="login">
                <form method="post" class="form-horizontal" role="form">
                    <h1>Reset Password</h1>
                    <div class="form-group">
                        <label for="loginEmail" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-5">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Enter email">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="g-recaptcha">
                                <div style="width: 304px; height: 78px;">
                                    <div>
                                        <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc6x5AbAAAAAEyCYH4LqNLQFOKYna2y0YO6T9R6&co=aHR0cHM6Ly9hbm90ZXBhZC5jb206NDQz&hl=vi&v=x19joXI_IeQnFJ7YnfDapSZq&size=normal&cb=90lejpos2q0" width="304"
                                        height="78"
                                        name="a-b4hjie73h3n1"
                                        frameborder="0"
                                        scrolling="no"
                                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                        >
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-5">
                            <input type="submit" name="submit" id="submit" class="btn btn-primary" value="Reset Password">
                            <router-link :to="{name: 'create_account'}" >Back to login</router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.containerMain {
    margin-top: 2%;
    min-height: 305px;
}
@media screen and (-webkit-min-device-pixel-ratio: 0){
    .containerMain {
        min-height: 385px;
    }

}


h1 {
    font-size: 2em;
    margin: .67em 0;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
.h1, .h2, .h3, h1, h2, h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}
.h1, h1 {
    font-size: 36px;
}
h1 {
    font-size: 2em;
    margin-bottom: .8em;
}
.form-group {
    margin-bottom: 15px;
}

.form-horizontal .form-group {
    margin-right: -15px;
    margin-left: -15px;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}




button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}
input {
    line-height: normal;
}
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
}
.form-control {
    font-size: 16px;
}
.form-group {
    margin-bottom: 15px;
}
.form-horizontal .form-group {
    margin-right: -15px;
    margin-left: -15px;
}

@media (min-width: 768px){
    .col-sm-offset-2 {
        margin-left: 16.66666667%;
    }

}
@media (min-width: 768px){
    .col-sm-10 {
        width: 83.33333333%;
    }

}
@media (min-width: 768px){
    .col-sm-offset-2 {
        margin-left: 16.66666667%;
    }

}
@media (min-width: 768px){
    .col-sm-5 {
        width: 41.66666667%;
    }

}

.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}
a {
    color: #10589b;
}
a {
    color: #337ab7;
    text-decoration: none;
}
a {
    background-color: transparent;
}

.containerMain a {
    cursor: pointer;
    margin-left: .5rem;
}



@media (min-width: 768px){
    .form-horizontal .control-label {
        padding-top: 7px;
        margin-bottom: 0;
        text-align: right;
    }

}
@media (min-width: 768px){
    .col-sm-2 {
        width: 16.66666667%;
    }
    .col-sm-5 {
    width: 41.66666667%;
}

}
@media (min-width: 768px){
    .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {
        float: left;
    }

}





@media (min-width: 768px){

    .container {
        width: 750px;
    }
}
@media (min-width: 992px){
    .container {
        width: 970px;
    }
    
}
@media (min-width: 1200px){
    .container {
        width: 1170px;
    }

}
</style>