import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import "./styles.css";

type Props = {
  movieId: string;
};

function FormCard({ movieId }: Props) {

  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const score = (event.target as any).score.value;

    const email = (event.target as any).email.value;
    const nome = (event.target as any).nome.value;
    const endereco = (event.target as any).endereco.value;
    const senha = (event.target as any).senha.value;
    const sexo = (event.target as any).sexo.value;
    const telefone = (event.target as any).telefone.value;

    if (!validateEmail(email)) {
      return;
    }

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      data: {
        email: email,
        movieId: movieId,
        score: score,
        nome: nome,
        endereco: endereco,
        senha: senha,
        sexo: sexo,
        telefone: telefone
      }
    }

    axios(config).then(response => {
      navigate("/");
    });
  }

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>

          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" placeholder="meuemail@email.com" />

            <label htmlFor="senha">Informe uma senha</label>
            <input type="password" className="form-control" id="senha" />
          </div>
          <hr className="hr" />

          <div className="form-group dsmovie-form-group">
            <label htmlFor="nome">Informe seu nome</label>
            <input type="nome" className="form-control" id="nome" />

            <label htmlFor="endereco">Informe seu endereço</label>
            <input type="endereco" className="form-control" id="endereco" />

            <label htmlFor="sexo">Informe seu sexo</label>
            <select className="form-control" id="sexo">
              <option disabled selected>Selecione o sexo</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outros</option>
              <option>Prefiro não informar</option>
            </select>

            <label htmlFor="telefone">Informe seu telefone</label>
            <input type="telefone" className="form-control" id="telefone" placeholder="99 99999-9999" />
          </div>
          <hr className="hr" />
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
