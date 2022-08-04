var full_Name = document.querySelector('#fullname');
var email = document.querySelector('#email');
var username = document.querySelector('#user');
var password = document.querySelector('#password');
var form = document.querySelector('#register');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(ListItem) {
    let c = 0;
    ListItem.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            showError(input, 'không được để trống');
            c += 1;
        } else {
            showSuccess(input)
        }
    });

    if (c > 0) {
        return false;;
    } else {
        return true;
    }
}

function checkEmailError(input) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value = input.value.trim()
    let isEmailErro = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess(input);
        return true;
    } else {
        showError(input, 'Email Không hợp lệ');
    }
}


function checkLengtheError(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`)
        return false;
    }
    if (input.value.length > max) {
        showError(input, `không được vượt quá ${max} ký tự`)
        return false
    }
    return true;
}

var app = angular.module('form', []);
app.controller('AppCtrl', function($scope) {
    $scope.datas = [];
    if (localStorage.getItem('userList')) {
        $scope.datas = angular.fromJson(localStorage.getItem('userList'))
    }

    $scope.login = function() {
        console.log($scope.cus)
            // if (($scope.cus.tk && $scope.cus.password) == ()) {
            //     location.href = 'index.html'
            // }
        $scope.datas.forEach((item) => {
            if ($scope.cus.tk == item.tk && item.password == $scope.cus.password) {
                location.href = 'index.html'
            } else {}
        })
    }

    $scope.register = function() {
        let isEmptyEror = checkEmptyError([full_Name, username, email, password]);
        let isEmailErro = checkEmailError(email)
        let isCheckusernameError = checkLengtheError(username, 5, 30)
        let isCheckPassword = checkLengtheError(password, 5, 30)
        if (isEmptyEror && isEmailErro && isCheckusernameError && isCheckPassword) {
            $scope.datas.push($scope.user);
            $scope.user = null;
            console.log($scope.datas);
            localStorage.setItem('userList', angular.toJson($scope.datas))
        }
    }

})