function ex(){

$.ajax({
    url: "http://localhost/data.json",
    method:"get"
}).done(function(response) {

    var headers = response.exportColumnHeaders;
    var values = response.exportData;
	console.log(headers.length);

	var item = new Array(headers.length);
	var alphabets = [];
	for(var i = 65; i < item.length+65; i++) {
    if (i<=90){
             alphabets.push(String.fromCharCode(i));
		} 
		else if(i<=116){
		alphabets.push('A'+(String.fromCharCode(i-26)))
        }
        else if(i<=142){
        alphabets.push('A'+'A'+(String.fromCharCode(i-52)))
        }
        else if(i<=168){
        alphabets.push('A'+'A'+'A'+(String.fromCharCode(i-78)))
        }
        else if(i<=194){
        alphabets.push('A'+'A'+'A'+'A'+(String.fromCharCode(i-104)))
        }
		else if(i<=220){
        alphabets.push('A'+'A'+'A'+'A'+'A'+(String.fromCharCode(i-130)))
        }
		else if(i<=246){
        alphabets.push('A'+'A'+'A'+'A'+'A'+'A'+(String.fromCharCode(i-156)))
        }
}
	console.log(alphabets);
	var excelObj = {};
    headers.forEach(function(item, index) {
        
            excelObj[alphabets[index]+'1'] = {
                'v': item.displayName,
                't': 's'
            };

        
    });
    console.log(excelObj);
		
    var excelObj2 = {};
	var f;
	var type = 's';
	var count = '';
    values.forEach(function(arr1){
        arr1.forEach(function(item, index){
			if (parseFloat(item.value)) {
				type = 'n'
			} else {
				type = 's'
			}
			count = (index+1).toString();
			excelObj2[alphabets[index]+ count] = {
                'v': item.value,
				't': type		
			};
			
            
        });
    });
	console.log(excelObj2);	
	});
	
	
/***************EXCEL********************
	var wb = new Workbook(),
        ws = excelObj2;
	wb.SheetNames.push(name);
	wb.Sheets[name] = ws;
	var wopts = {
		bookType: 'xlsx',
		bookSST: false,
		type: 'binary'
	},
	wbout = XLSX.write(wb, wopts);
	data = string2ArrayBuffer(wbout);
	saveAs(new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"}), 'demo.xlsx', true);
});
}
function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
}

function string2ArrayBuffer(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
*************/

}

