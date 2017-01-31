import Vue from 'vue'
import VueResource from 'vue-resource'
import favlist from './components/Favlist.vue'
import mycomponentA from './componentA'
import mycomponentB from './componentB'
import compTable from './compTable'
Vue.use(VueResource)
new Vue({
	el:'#app',
	data:{
		message:'Good boy',
		currentView:'mycomponentA',
		views:[
			'mycomponentA',
			'mycomponentB',
		],
		tableData: [{
	            date: '2016-05-02',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1518 弄'
	          }, {
	            date: '2016-05-04',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1517 弄'
	          }, {
	            date: '2016-05-01',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1519 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }]
	},
	components:{
		favlist,mycomponentA,mycomponentB,compTable
	},
	beforeCreate:function(){
		console.log(this.$options);
		var self=this;
		//this.$http.get('/students/getStudents').then(res=>{
		this.$http.post('http://www.qjsesx.cn:8888/students/getStudents').then(res=>{
			console.log(res.body)
			this.tableData=[res.body]
		},res=>{
			console.log(res)
		});
	}
});
