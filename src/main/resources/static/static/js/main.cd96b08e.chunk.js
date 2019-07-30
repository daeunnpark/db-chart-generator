(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,a){},245:function(e,t,a){e.exports=a(329)},250:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),l=a.n(r),s=(a(250),a(44)),i=a(48),c=a(45),u=a(47),d=(a(190),a(49)),h=a(61),p=a.n(h),m=a(184),f=a.n(m);a(251)(p.a),a(252)(p.a);var b="Source: kaggle",g={chart:{type:"column"},title:{text:"Bar Chart"},subtitle:{text:""},xAxis:{visible:!1,categories:[]},yAxis:{visible:!1,min:0,tickInterval:1,title:{text:"count(person)"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:0,borderWidth:1,groupPadding:.2,shadow:!1}},series:[{showInLegend:!1,colorByPoint:!0,data:[]}],lang:{noData:"No Data to Display"},noData:{style:{fontWeight:"bold",fontSize:"15px",color:"#303030"}}},y={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Pie Chart"},subtitle:{text:""},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{colorByPoint:!0,data:[]}],lang:{noData:"No Data to Display"},noData:{style:{fontWeight:"bold",fontSize:"15px",color:"#303030"}}},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).parseData=function(e){var t=a.countFrequency(e.data);return{newColumn:e.column,newCategories:Object.keys(t),newBarChartData:Object.values(t),newPieChartData:a.parseData_helper(t)}},a.parseData_helper=function(e){var t=[];return Object.keys(e).forEach(function(a){var n;n={name:a,y:e[a]},t.push(n)}),t},a.countFrequency=function(e){for(var t={},a=0;a<e.length;a++){var n=e[a];t[n]=t[n]?t[n]+1:1}return t},a.setChartData=function(e,t,n,o){a.setState({barChart:{title:{text:e},subtitle:{text:b},xAxis:{visible:!0,categories:t},yAxis:{visible:!0},series:[{name:e,data:n}]},pieChart:{title:{text:e},subtitle:{text:b},series:[{name:e,data:o}]}})},a.state={barChart:g,pieChart:y},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){if(e!==this.props){var t=this.parseData(this.props),a=t.newColumn,n=t.newCategories,o=t.newBarChartData,r=t.newPieChartData;this.setChartData(a,n,o,r)}}},{key:"render",value:function(){return o.a.createElement("div",{className:"Section"},o.a.createElement("h2",null,"Charts"),o.a.createElement("div",{className:"chartContainer"},o.a.createElement(f.a,{highcharts:p.a,options:this.state.barChart})),o.a.createElement("div",{className:"chartContainer"},o.a.createElement(f.a,{highcharts:p.a,options:this.state.pieChart})))}}]),t}(n.Component),v=a(185),w=a.n(v),E=a(197),D=a(211),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.search=function(e){fetch("/db/search/?keyword=".concat(a.state.value),{credentials:"include",method:"GET"}).then(function(e){return!!e.ok&&e.json()}).then(function(e){return console.log(e),a.props.setSearchResult(e),e}).catch(function(e){window.alert("There has been a problem with your fetch operation: "+e.message)})},a.render=function(){return o.a.createElement("div",{style:{display:"inline-flex",marginBottom:20}},o.a.createElement("div",null,o.a.createElement(D.a,{id:"standard-name",label:"keyword",onChange:a.handleChange,margin:"normal"})),o.a.createElement("div",{style:{alignSelf:"center"}},o.a.createElement(E.a,{variant:"outlined",onClick:a.search},"Search")))},a.state={value:""},a}return Object(u.a)(t,e),t}(n.Component),S=a(238),k=a.n(S),j=a(199),T=a(201),x=a(202),A=a(203),P=a(226),B=a(207),N=a(176),R=a(173),L=a(204),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleOpen=function(){a.setState({open:!0})},a.handleOk=function(){a.setState({open:!1}),a.props.setSelectedCategoryData(a.state.value)},a.handleClose=function(){a.setState({open:!1})},a.render=function(){return o.a.createElement("div",null,o.a.createElement(E.a,{id:"updateChartsBtn",variant:"contained",color:"secondary",onClick:a.handleOpen,className:"Btn"}," Update Charts"),o.a.createElement(j.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:a.state.open,onClose:a.handleClose},o.a.createElement(A.a,null,"Choose a category to generate charts."),o.a.createElement(x.a,null,o.a.createElement("form",null,o.a.createElement(R.a,{component:"fieldset"},o.a.createElement(N.a,{component:"legend"},"Category"),o.a.createElement(B.a,{"aria-label":"Category",name:"category",value:a.state.value,onChange:a.handleChange},a.props.columns.map(function(e){return o.a.createElement(L.a,{key:e.field,value:e.field,control:o.a.createElement(P.a,null),label:e.title})}))))),o.a.createElement(T.a,null,o.a.createElement(E.a,{onClick:a.handleClose,color:"primary"},"Cancel"),o.a.createElement(E.a,{onClick:a.handleOk,color:"primary"},"Ok"))))},a.state={open:!1,value:""},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState({columns:this.props.columns})}}]),t}(n.Component),U=a(170),I=a(241),W=a.n(I),z=a(208),q=a(181),H=a(240),J=a.n(H),_=a(239),M=[a.n(_).a,J.a],G=M,K={marginRight:10},V=[{backgroundColor:"blue",display:"flex",alignItems:"center"},{backgroundColor:"red",display:"flex",alignItems:"center"}],$={display:"flex",alignItems:"center"},Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).handleClose=function(){a.setState({open:!1})},a.render=function(){return o.a.createElement("div",null,o.a.createElement(z.a,{anchorOrigin:{vertical:a.state.vertical,horizontal:a.state.horizontal},open:a.state.open,autoHideDuration:3e3,onClose:a.handleClose},a.messageWrapper()))},a.state={open:!1,vertical:"top",horizontal:"center",message:"",success:null,flag:0},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(null!==this.props.success&&e!==this.props){var a=this.props.success?"Database has been successfully updated.":"Error in the database. Please try again.",n=this.props.success?0:1;this.setState({message:a,open:!0,flag:n})}}},{key:"messageWrapper",value:function(){var e=G[this.state.flag],t=V[this.state.flag];return o.a.createElement(q.a,{style:t,message:o.a.createElement("span",{id:"client-snackbar",style:$},o.a.createElement(e,{style:K}),this.state.message),action:[o.a.createElement(U.a,{key:"close","aria-label":"close",color:"inherit",onClick:this.handleClose},o.a.createElement(W.a,null))]})}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).parseCsv=function(e){k.a.parse(e.target.files[0],{header:!0,skipEmptyLines:!0,dynamicTyping:!0,complete:a.updateTable})},a.parseData_table=function(e){var t=[],a=[];return console.log(e.meta.fields),console.log(e.data),e.meta.fields.forEach(function(e){t.push({title:e.toUpperCase(),field:e.toLowerCase(),cellStyle:Y})}),t[0].editable="onAdd",e.data.forEach(function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n.toLowerCase()]=e[n]);a.push(t)}),console.log(t),console.log(a),{newColumns:t,newData:a}},a.updateTable=function(e){var t=a.parseData_table(e),n=t.newColumns,o=t.newData;a.setState({isLoading:!0}),a.addAllDataToDb(o).then(function(e){e?(a.setState({columns:n,data:o}),a.setAlert(!0)):a.setAlert(!1),a.setState({isLoading:!1})})},a.addAllDataToDb=function(e){return fetch(new Request("/db/addAll",{method:"POST",redirect:"follow",headers:new Headers({"Content-Type":"application/json"})}),{credentials:"include",body:JSON.stringify(e)}).then(function(e){return!!e.ok}).catch(function(e){window.alert("There has been a problem with your fetch operation: "+e.message)})},a.addDataToDb=function(e){return fetch(new Request("/db/add",{method:"POST",redirect:"follow",headers:new Headers({"Content-Type":"application/json"})}),{credentials:"include",body:JSON.stringify(e)}).then(function(e){return!!e.ok}).catch(function(e){window.alert("There has been a problem with your fetch operation: "+e.message)})},a.updateDataInDb=function(e){return fetch(new Request("/db/update",{method:"PUT",redirect:"follow",headers:new Headers({"Content-Type":"application/json"})}),{credentials:"include",body:JSON.stringify(e)}).then(function(e){return!!e.ok}).catch(function(e){window.alert("There has been a problem with your fetch operation: "+e.message)})},a.deleteDataFromDb=function(e){return fetch(new Request("/db/delete",{method:"DELETE",redirect:"follow",headers:new Headers({"Content-Type":"application/json"})}),{credentials:"include",body:JSON.stringify(e)}).then(function(e){return!!e.ok}).catch(function(e){window.alert("There has been a problem with your fetch operation: "+e.message)})},a.setSelectedCategoryData=function(e){var t=[];a.state.data.forEach(function(a){t.push(a[e])}),t.sort(a.compare),a.props.setChartData({column:e.toUpperCase(),data:t})},a.setAlert=function(e){a.setState({success:e}),a.setState({success:null})},a.setSearchResult=function(e){a.setState({data:e})},a.render=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"DB chart generator"),o.a.createElement("div",{className:"Section"},o.a.createElement("input",{id:"contained-button-file",type:"file",accept:".csv",onChange:a.parseCsv}),o.a.createElement("label",{htmlFor:"contained-button-file"},o.a.createElement(E.a,{id:"uploadBtn",variant:"contained",color:"primary",component:"span"},"Upload CSV File")),o.a.createElement("h2",null,"Database Table"),o.a.createElement(w.a,{options:{showTitle:!1,search:!1,toolbarButtonAlignment:"left",headerStyle:Y,addRowPosition:"first"},isLoading:a.state.isLoading,columns:a.state.columns,data:a.state.data,editable:{onRowAdd:function(e){return new Promise(function(t,n){setTimeout(function(){a.addDataToDb(e).then(function(o){if(o){var r=a.state.data;r.push(e),a.setState({data:r},function(){return t()}),a.setAlert(!0)}else n(),a.setAlert(!1)})},1e3)})},onRowUpdate:function(e,t){return new Promise(function(n,o){setTimeout(function(){a.updateDataInDb(e).then(function(r){if(r){var l=a.state.data,s=l.indexOf(t);l[s]=e,a.setState({data:l},function(){return n()}),a.setAlert(!0)}else o(),a.setAlert(!1)})},1e3)})},onRowDelete:function(e){return new Promise(function(t,n){setTimeout(function(){a.deleteDataFromDb(e).then(function(o){if(o){var r=a.state.data,l=r.indexOf(e);r.splice(l,1),a.setState({data:r},function(){return t()}),a.setAlert(!0)}else n(),a.setAlert(!1)})},1e3)})}},localization:{header:{actions:""},body:{emptyDataSourceMessage:"No Data to Display"}},components:{Toolbar:function(e){return o.a.createElement("div",null,o.a.createElement(v.MTableToolbar,e),o.a.createElement(O,{setSearchResult:a.setSearchResult}))}}}),o.a.createElement(F,{columns:a.state.columns,setSelectedCategoryData:a.setSelectedCategoryData})),o.a.createElement(Q,{success:a.state.success}))},a.state={columns:[],data:[],isLoading:!1,success:null},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"compare",value:function(e,t){return"number"==typeof e?e-t:e>t?1:t>e?-1:0}}]),t}(n.Component),Y={padding:"0 8px"},Z=X,ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this))).setChartData=function(e){a.setState(e)},a.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement(Z,{setChartData:a.setChartData}),o.a.createElement(C,{column:a.state.column,data:a.state.data})))},a.state={column:[],data:[]},a}return Object(u.a)(t,e),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[245,1,2]]]);
//# sourceMappingURL=main.cd96b08e.chunk.js.map