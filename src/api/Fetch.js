import axios from "./index"
import QiitaArticle from '../models/QiitaArticle'

export default{
	getQiita(){
	  return axios.get(`http://localhost:3000/api/qiita`).then(res => { 
			res.data.map(el => {
				return new QiitaArticle(el.title,el.body,el.url)
			})
    })
	}
}