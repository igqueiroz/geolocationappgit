// Arquivo que cria as rotas manipula as interações do usuário com o banco Express
// Cria as APIS consumíveis e retorna ao usuário dados de consulta do banco 

var express = require('express');
var router = express.Router();
var assert = require('assert');

//Cria a API de lista de usuários coletados
router.get('/userlist', (req, res) => {
    let db = req.db.collection('users');
    db.find()
		.then(users => res.send( {users} ))
		.catch(error => {
			console.error(error);
		res.status(404).send('Bad Request');
	});
});

// Permite a interação via POST, recebe os dados da App e envia para o servidor MongoDB
router.post('/userlist', (req, res) => {
	let db = req.db.collection('users');
	const name = req.body.newName;
	const email = req.body.newEmail;
	const userLocationLat = req.body.newUserLocationLat;
	const userLocationLng = req.body.newUserLocationLng;
	const userDevice = req.body.newUserDevice;
	const userRange = req.body.newRange;
	const universityLat = req.body.newUniversityLat;
	const universityLng = req.body.newuniversityLng;
	
	// Quando tiver validação de dados no lado do servidor, colocar nesse espaço
	// Insere os dados coletados via POST vindos da App no nosso banco 
	db.insert({
		'name': name,
		'email': email,
		'userLocationLat': userLocationLat,
		'userLocationLng': userLocationLng,
		'userDevice': userDevice,
		'userRange': userRange,
		'universityLat': universityLat,
		'universityLng': universityLng
	})
});
   
module.exports = router;
