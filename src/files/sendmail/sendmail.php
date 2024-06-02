<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'rent.shikauto@gmail.com';              //SMTP username
	$mail->Password   = 'fzlrpbctdrpybbni';                     //SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
	$mail->Port       = 465; 

	//Від кого лист
	$mail->setFrom('rent.shikauto@gmail.com', 'Аренда Авто'); // Вказати потрібний E-mail
	//Кому відправити
	$mail->addAddress('rent.shikauto@gmail.com'); // Вказати потрібний E-mail
	//Тема листа
	$mail->Subject = 'Аренда Авто';

		//Тело письма
		$body = '<h1>Заявка на Аренду Авто</h1>';
	
		if(trim(!empty($_POST['name']))){
			$body .='<p>Имя: <strong>'.$_POST['name'].'</strong></p>';
		}
		if(trim(!empty($_POST['state']))){
			$body.='<p>Город: <strong>'.$_POST['state'].'</strong></p>';
		}
		if(trim(!empty($_POST['phone']))){
					$body.='<p>Телефон: <strong>'.$_POST['phone'].'</strong></p>';
				}


		if(trim(!empty($_POST['first-name']))){
			$body .='<p>First Name: <strong>'.$_POST['first-name'].'</strong></p>';
		}
		if(trim(!empty($_POST['last-name']))){
			$body .='<p>Last Name: <strong>'.$_POST['last-name'].'</strong></p>';
		}
		if(trim(!empty($_POST['email']))){
			$body.='<p>E-mail: <strong>'.$_POST['email'].'</strong></p>';
		}
		if(trim(!empty($_POST['like']))){
			$body.='<p>Chcesz wziąć udział? <strong>'.$_POST['like'].'</strong></p>';
	   	}
		if(trim(!empty($_POST['message']))){
			$body.='<p>Сообщение: <strong>'.$_POST['message'].'</strong></p>';
		}
		if(trim(!empty($_POST['url']))){
			$body.='<p>Your website URL: <strong>'.$_POST['url'].'</strong></p>';
		}
		if(trim(!empty($_POST['company']))){
			$body .='<p>Company: <strong>'.$_POST['company'].'</strong></p>';
		}
		if(trim(!empty($_POST['position']))){
			$body .='<p>Position: <strong>'.$_POST['position'].'</strong></p>';
		}
		if(trim(!empty($_POST['Авто']))){
			$body .='<p>Авто: <strong>'.$_POST['Авто'].'</strong></p>';
		}
		if(trim(!empty($_POST['select']))){
			$body .='<p>Авто: <strong>'.$_POST['select'].'</strong></p>';
		}
		// Календарь
		if(trim(!empty($_POST['start-date']))){
			$body .='<p>От: <strong>'.$_POST['start-date'].'</strong></p>';
		}
		if(trim(!empty($_POST['finish-date']))){
			$body .='<p>До: <strong>'.$_POST['finish-date'].'</strong></p>';
		}

		// Добавляем данные из табов
		if (!empty($_POST['selected-tab'])) {
			$body .= '<p>Selected Tab: <strong>' . $_POST['selected-tab'] . '</strong></p>';
		}
		if (!empty($_POST['range-from']) && !empty($_POST['range-to'])) {
			$body .= '<p>Range: <strong>' . $_POST['range-from'] . ' - ' . $_POST['range-to'] . '</strong></p>';
		}
		
		// if(trim(!empty($_POST['hand']))){
		// 	$body.='<p><strong>Рука:</strong> '.$hand.'</p>';
		// }
		// if(trim(!empty($_POST['age']))){
		// 	$body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
		// }
		
		// if(trim(!empty($_POST['message']))){
		// 	$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
		// }

	//if(trim(!empty($_POST['email']))){
		//$body.=$_POST['email'];
	//}	
	
	//Прикрепить файл
	if(trim(!empty($_FILES['image']['tmp_name'])))  {
		$fileTmpName = $_FILES['image']['tmp_name'];
		$fileName = $_FILES['image']['name'];
		$mail->addAttachment($fileTmpName, $fileName);
	//путь загрузки файла
		// $filePath = __DIR__ . "/files/" . $_FILES['image']['name']; 
		// //грузим файл
		// if (copy($_FILES['image']['tmp_name'], $filePath)){
		// 	$fileAttach = $filePath;
		// 	$body.='<p><strong>Фото в приложении</strong>';
		// 	$mail->addAttachment($fileAttach);
		// }
		}

	$mail->Body = $body;

	//Відправляємо
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Sand Mail!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>