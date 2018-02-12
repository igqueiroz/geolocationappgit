// Lógicas do App, envia as requisições aos reducers e mantém as views focadas na exibição de conteúdo

//Envia via POST todos os dados coletados durante as interações do usuário
export default class DataApi {
    static save(name,email,userlocationlat,userlocationlng,userDevice,range,universityLat,universityLng){
      return dispatch => {  
        const requestData = {
          method: 'POST',
          body: JSON.stringify({
            newName: name,
            newEmail: email,
            newUserLocationLat: userlocationlat,
            newUserLocationLng: userlocationlng,
            newUserDevice: userDevice,
            newRange: range,
            newUniversityLat: universityLat,
            newuniversityLng: universityLng
          }),
          headers: new Headers({
            'content-type': 'application/json'
          }),
          json: true
        };
        // Envia os dados para o servidor Express que conecta com o MongoDB
        fetch(`http://localhost:3001/userlist`,requestData)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                else {
                    throw new Error("Não rolou comunicação com a API");
                }
            })
      }
    }
    // Lista os dados recebidos e guardados na API do servidor Express
    static list(list){
      return dispatch => {  
        const requestInfo = {
          method: 'GET',
          mode: 'cors'
        };
        //recebe os dados consumíveis da API criada, o servidor já está no modo Cross-Origin
        fetch(list, requestInfo)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                else {
                    throw new Error("Não rolou comunicação com a API");
                }
            })
            .then(list => {
              //envia a requisição para o reducer do Redux e realiza a ação desejada
              dispatch({type:'LISTDATA',list});
              return list;
          }); 

      }

    }
}

