const title = document.getElementById('title');
const body = document.getElementById('body');

const getBlogFromServer = async () => {
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get('id');

  const request = await fetch('http://10.20.40.105:8080/api/v1/blog/' + id);

  const data = await request.json();

  title.innerText = data.title;
  body.value = data.body;
};