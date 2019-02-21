const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
		var str= true;
		starWars.all.forEach(function(elem){
			if(typeof(elem)!= "string")
			{
				str=false;
			}
		});
		expect(str).toEqual(true);
	});

    test('should contain `Luke Skywalker`', () => {
        const sky ='Luke Skywalker';
		var luke=false;
		for (var i = 0; i<starWars.all.length;i++){
			if (starWars.all[i]==sky){
			luke = true;		
			}
		}
		expect(luke).toEqual(true);
    });

    test('should not contain `Ben Quadinaros`', () => {
           const ben ='Ben Quadinaros';
		var qua=true;
		for (var i = 0; i<starWars.all.length;i++){
			if (starWars.all[i]==ben){
			qua = false;		
			}
		}
		expect(qua).toEqual(true);
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
	
      const R1= starWars.random();
	  const R2=starWars.random();
	  console.log(R1);
	  console.log(R2);
	  var starw= true
	  if (R1==R2){
		  starw= false;
	  }
	  expect(starw).toEqual(true);
    });

    test('should return an array of random items if passed a number', () => {
		
      const nombre = starWars.randomint(starWars.all.length); //randomint genere un nombre aletoire, function ajouté dans index.js
	  var arr= starWars.random(nombre);
	  var ran= true;
	  for (var i =0; i<arr.length;i++){
		  console.log(arr[i]);
		  if(!starWars.all.includes(arr[i]))
		  {
			  ran=faux;
			  break;
		  }
		  
	  }
	  expect(ran).toEqual(true);
    });
  });
});
