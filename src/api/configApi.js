const config = {
  url: {
    monsters: 'https://monsters-api-danogo.herokuapp.com/api/v1/monsters',
    monster: `https://monsters-api-danogo.herokuapp.com/api/v1/monster/${this.props.slug}`
  },
  apiCall : url => fetch(url).then(response => response.json())
}

export default config;