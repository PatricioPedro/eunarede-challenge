import Vue from 'vue'

/**
 * Pega os dados na API
 * @param {commit} contem o object que faz a mutacao do nosso estado
 */
export async function setDataChart ({ commit }) {
  const url = "http://localhost:3000/graphql"
  try {
    const { data } = await Vue.prototype.$axios.post(url, {
        query: `

        {players {_id name gols team}}
        
        `
    })
    console.log(data.data.players)
    commit('CHART_DATA', data.data.players)
  } catch (error) {
    console.error(error)
  }
}
