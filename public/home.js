document.getElementById('sub-now').addEventListener('click',hidden);
document.getElementById('sub-come').addEventListener('click', show);


function hidden(){
      document.getElementById('coming-soon').classList.add('hidden');
      document.getElementById('now-showing').classList.remove('hidden');
      document.getElementById('sub-now').classList.add('decoration_1');
      document.getElementById('sub-come').classList.remove('decoration_1');
      document.getElementById('top-5-movie').classList.remove('hidden');
       
}

function show(){
    document.getElementById('coming-soon').classList.remove('hidden');
    document.getElementById('coming-soon').classList.remove('hidden');
    document.getElementById('now-showing').classList.add('hidden');
    document.getElementById('sub-now').classList.remove('decoration_1');
    document.getElementById('sub-come').classList.add('decoration_1');
    document.getElementById('top-5-movie').classList.add('hidden');
}

