// arquivo da programação funcional que retorna toda as ações da aplicação

export function data(state=[],action){
  // reducer que recebe o fetch na API criada e devolve os dados recebidos
  if(action.type === 'LISTDATA'){
    return action.data;
  }  
} 