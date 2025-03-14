
      var fruits = {
        name: "banana",
        color: "yellow",
        origin: "Puerto Rico",
        weight: 230,
        size: 17,
      };
      var aFruit = []; //배열객체 선언
      for (var p in fruits) {
        console.log(p + ":" + fruits[p]);
        aFruit.push(fruits[p]); // Array 객체의 메소드 push
      };

      console.log(aFruit);

      alert(aFruit[2]); 
