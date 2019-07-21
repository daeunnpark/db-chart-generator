(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(t,e,a){},223:function(t,e,a){t.exports=a(307)},228:function(t,e,a){},307:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(13),i=a.n(r),s=(a(228),a(57)),c=a(60),l=a(58),u=a(61),d=(a(229),a(175),a(66)),p=a(62),f=(n.Component,a(77)),h=a.n(f),m=a(170),b=a.n(m);a(230)(h.a);var g={chart:{type:"column"},title:{text:"Monthly Average Rainfall"},subtitle:{text:"Source: WorldClimate.com"},xAxis:{categories:[1,2],crosshair:!0},yAxis:{min:0,title:{text:"Rainfall (mm)"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:0,borderWidth:1,groupPadding:.2,shadow:!1}},series:[{name:"Data",data:[42,55]}]},v={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Browser market shares in January, 2018"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"Brands",colorByPoint:!0,data:[{name:"0",y:65,sliced:!0,selected:!0},{name:"1",y:11.84}]}]},y=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(l.a)(e).call(this,t))).calculate=function(t){for(var e,a={},n=[],o=0;o<t.length;o++){var r=t[o];a[r]=a[r]?a[r]+1:1}Object.keys(a).forEach(function(t){var e;e={name:t,y:a[t]},n.push(e)}),e=Object.keys(a);return{data:Object.values(a)},{bar_cate:e,bar_data:Object.values(a),pie_data:n}},a.chartDataParser_bar=function(t){var e=[];return t.forEach(function(t){var a,n=Object.values(t);a={name:n[0],data:n.slice(1,-1).map(Number)},e.push(a)}),e},a.chartDataParser_pie=function(t,e){var a=[];return t.forEach(function(t){var n,o=0;e.forEach(function(e){o+=Number(e[t.toLowerCase()])}),n={name:t,y:o},a.push(n)}),a},a.setChartData=function(t,e,n){a.setState({barChart_options:{xAxis:{categories:t},series:e},pieChart_options:{series:{data:n}}})},a.state={barChart_options:g,pieChart_options:v},a}return Object(u.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t,e,a){if(t!==this.props){var n=this.calculate(this.props.data),o=n.bar_cate,r=n.bar_data,i=n.pie_data;console.log(o),console.log(o.length),console.log(r),console.log(i),this.setState({barChart_options:{xAxis:{categories:o},series:[{name:"Data",data:r}]},pieChart_options:{series:[{data:i}]}})}e!==this.state&&(console.log("State diff"),console.log(e),console.log(this.state))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Charts"),o.a.createElement(b.a,{highcharts:h.a,options:this.state.barChart_options}),o.a.createElement(b.a,{highcharts:h.a,options:this.state.pieChart_options}))}}]),e}(n.Component),O=a(210),w=a.n(O),C=a(120),D=a(219),E=a.n(D),j=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(l.a)(e).call(this,t))).saveToDb=function(){console.log(a.state.isLoading),fetch(new Request("/demo/addAllData",{method:"POST",redirect:"follow",headers:new Headers({"Content-Type":"application/json"})}),{credentials:"include",body:JSON.stringify(a.state.data)}).then(function(t){return console.log}).catch(function(t){return console.error}),console.log(a.state.isLoading)},a.addToDb=function(t){fetch(new Request("/demo/addOrUpdateData",{method:"POST",redirect:"follow",headers:new Headers({"Content-Type":"application/json"})}),{credentials:"include",body:JSON.stringify(t)}).then(function(t){return console.log}).catch(function(t){return console.error})},a.deleteFromDb=function(t){console.log("called"),fetch(new Request("/demo/deleteData",{method:"POST",redirect:"follow",headers:new Headers({"Content-Type":"application/json"})}),{credentials:"include",body:JSON.stringify(t)}).then(function(t){return console.log}).catch(function(t){return console.error})},a.setData=function(){console.log("SETDATA From TABLE");var t,e=[],n=[];a.state.columns.forEach(function(t){e.push(t.title)}),t=a.state.data,console.log("HHHHHHHH"+t),a.state.data.forEach(function(t){n.push(t.embarked)}),console.log(n),a.props.setData({columns:e,data:n})},a.uploadCsvFile=function(t){t.preventDefault(),E.a.parse(t.target.files[0],{header:!0,skipEmptyLines:!0,dynamicTyping:!0,complete:a.updateTable})},a.updateTable=function(t){var e=[],n=[];t.meta.fields.forEach(function(t){e.push({title:t.toUpperCase(),field:t.toLowerCase()})}),t.data.forEach(function(t){var e={};for(var a in t)t.hasOwnProperty(a)&&(e[a.toLowerCase()]=t[a]);n.push(e)}),a.setState({columns:e,data:n}),a.saveToDb()},a.render=function(){var t;return o.a.createElement("div",null,o.a.createElement("h2",null,"Ezops - DB chart generator"),o.a.createElement("div",null,o.a.createElement(C.a,(t={id:"raised-button-file"},Object(d.a)(t,"id","FileUploadBtn"),Object(d.a)(t,"type","file"),Object(d.a)(t,"accept",".csv"),Object(d.a)(t,"onChange",a.uploadCsvFile),t))),o.a.createElement("h3",null,"Database Table"),o.a.createElement(w.a,{options:{showTitle:!1,toolbarButtonAlignment:"left"},isLoading:a.state.isLoading,columns:a.state.columns,data:a.state.data,editable:{onRowAdd:function(t){return new Promise(function(e,n){setTimeout(function(){var n=a.state.data;n.push(t),console.log(t),a.addToDb(t),a.setState({data:n},function(){return e()}),e()},1e3)})},onRowUpdate:function(t,e){return new Promise(function(n,o){setTimeout(function(){var o=a.state.data,r=o.indexOf(e);o[r]=t,a.addToDb(t),a.setState({data:o},function(){return n()}),n()},1e3)})},onRowDelete:function(t){return new Promise(function(e,n){setTimeout(function(){var n=a.state.data,o=n.indexOf(t);n.splice(o,1),a.deleteFromDb(t),a.setState({data:n},function(){return e()}),e()},1e3)})}}}),o.a.createElement("button",{onClick:a.setData},"UpdateChart"))},a.state={columns:[{title:"ID",field:"id",editable:"onAdd"},{title:"COL2",field:"col2",type:"numeric"},{title:"COL3",field:"col3",type:"numeric"},{title:"COL4",field:"col4",type:"numeric"}],data:[{id:"A",col2:80,col3:30,col4:40},{id:"B",col2:30,col3:20,col4:10}],isLoading:!1},a}return Object(u.a)(e,t),e}(n.Component),T=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(l.a)(e).call(this,t))).setData=function(t){console.log("SETDATA APP"),a.setState(t)},a.handleChange=function(t){a.setState({request:t.target.value})},a.handleSubmit=function(t){t.preventDefault()},a.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{setData:a.setData}),o.a.createElement(y,{columns:a.state.columns,data:a.state.data}))},a.state={columns:[],data:[]},a}return Object(u.a)(e,t),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[223,1,2]]]);
//# sourceMappingURL=main.65610318.chunk.js.map