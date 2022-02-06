import React from 'react';
import { useState } from "react";
import './App.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import MaskedInput from './MaskedInput';
import * as yup from "yup";
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { Col } from 'reactstrap';
import { Button } from 'bootstrap';


const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
  })
  .required();

const initialValues = {
    cnpj: ''
  };


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [propriedade,setPropriedade]= useState(1);
  const [laboratorio,setLaboratorio]= useState(5);
  const [values, setValues] = useState(initialValues);


  const enviarPropriedade = e =>{
    e.prventDefault();
    console.log("id do estado:" + propriedade)
  }
  const enviarLaboratorio = e =>{
    e.prventDefault();
    console.log("id do laboratorio:" + laboratorio)
  }
  
  function onSubmit(userData) {
    console.log(userData);
  }

  // function handleChange(event) {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value
  //   });
  // }

  //console.log(errors);
  return (
    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} onSubmit={enviarLaboratorio} onSubmit={enviarPropriedade}>
      <div className="row">
        <div className="col">
          <Label for="nome">
            Nome
          </Label>
          <Col sm={10}>
            <Input
              id="nome"
              name="nome"
              type="text"
              {...register("name", { required: true })}
              required
            />
            <div className="invalid-feedback">
          Por favor, digite um nome.
        </div>
          </Col>
        </div>
        <div className="col">
          <Label for="data_inicial">
            Data Inicial
          </Label>
          <Col sm={7}>
            <Input
              id="data_inicial"
              name="data_inicial"
              placeholder="12/02/2022"
              {...register("data_inicial", { required: true })}
              type="date"
              required
            />
            <div className="invalid-feedback">
          Por favor, preencha o campo Data Inicial.
        </div>
          </Col>
        </div>
        <div className="col">
          <Label for="data_final">
            Data Final
          </Label>
          <Col sm={7}>
            <Input
              id="data_final"
              name="data_final"
              placeholder="12/02/2022"
              type="date"
              {...register("data_final", { required: true })}
              required
            />
            <div className="invalid-feedback">
          Por favor, preencha o campo Data Final.
        </div>
          </Col>
        </div>
      </div><br /><br />
      <div className="row">
        <div className="col">
          <Label
            for="propriedade"
            sm={3}
          >
            Proriedades
          </Label>
          <Col sm={9}>
            <Input
              id="propriedade"
              name="propriedade"
              type="select"
              value={propriedade} onChange={texto => setPropriedade(texto.target.value)}
            >
              <option value="1">Agrotis 1</option>
              <option value="2">Agrotis 2</option>
              <option value="3">Agrotis 3</option>
              <option value="4">Agrotis 4</option>
            </Input>
            <div className="invalid-feedback">
          Por favor, Selecione a Propriedade.
        </div>
          </Col>
        </div>
        <div className="col">
          <Label
            for="laboratorio"
            sm={3}
          >
            Laboratório
          </Label>
          <Col sm={9}>
            <Input
              id="laboratorio"
              name="laboratorio"
              type="select"
              value={laboratorio} onChange={texto => setLaboratorio(texto.target.value)}
            >
              <option value="5">Agro Skynet</option>
              <option value="6">Umbrella Agro</option>
              <option value="7">Osborn Agro</option>
              <option value="8">Skyrim Agro</option>
              <option value="9">Skyrim Agro</option>
            </Input>
            <div className="invalid-feedback">
            Por favor, Selecione o Laboratorio.
        </div>
          </Col>
        </div>
      </div><br />
      <div className="row">
        <div className="col">
          <Label for="cnpj">
            CNPJ
          </Label>
          <Col sm={4}>
            <Input
              id="cnpj"
              name="cnpj"
              placeholder="XX. XXX. XXX/0001-XX"
              type="text"
              {...register("cnpj", { required: true })}
            />
          </Col>
        </div>
      </div><br/><br/>
      <div className="row">
        <div className="col">
          <Label for="observacao">
            Observações
          </Label>
          <Col sm={11}>
          <textarea className="form-control" id="observacao" rows="3" {...register("observacao")}></textarea>
          </Col>
        </div>
      </div><br/>
      <input className="btn btn-primary" type="submit" value="SALVAR"></input>
    </form>
  );
}

export default App;
