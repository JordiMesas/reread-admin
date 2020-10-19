<?php
require_once '../model/user.php';
require_once '../model/userDAO.php';

if (isset($_POST['email'])) {
    $user = new User($_POST['email'], md5($_POST['psswd']));
    $userDAO = new UserDAO();
    if($userDAO->login($user)){
        echo 'perfect';
        // establecer sesiones
        // redirección a ebook.admin.php
        header('Location: ../view/zona.admin.php');
    }else {
       
    }
}else {
    header('Location: ../view/login.php');
}
