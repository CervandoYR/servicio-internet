import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, Row, Col, Spinner } from 'react-bootstrap';
import AnimatedButton from './AnimatedButton'; // Usamos el botón nuevo
import { Send } from 'lucide-react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzyKIt1fHs6q8avqDymVh8S_a57HAH-_ZPWm3R1l1prwPH9zmPIbyx_09CMsalrdYDsRQ/exec";

const contactSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio."),
  lastname: z.string().min(1, "El apellido es obligatorio."),
  email: z.string().min(1, "El email es obligatorio.").email("Email inválido."),
  phone: z.string().min(9, "Debe tener 9 dígitos.").regex(/^[0-9]{9}$/, "Debe tener 9 dígitos numéricos."),
  message: z.string().min(10, "El mensaje es muy corto."),
});

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched'
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    // ... (misma lógica de append) ...
    formData.append('name', data.name);
    formData.append('lastname', data.lastname);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message);

    try {
      const response = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
      // ... (misma lógica de SweetAlert) ...
      reset();
      Swal.fire({
        title: "¡Mensaje Enviado!",
        text: "Tu consulta ha sido recibida. Te contactaremos pronto.",
        icon: "success",
        background: 'var(--bg-dark)',
        color: 'var(--text-primary)',
        confirmButtonColor: 'var(--accent-cyan)',
      });
    } catch (error) {
      // ... (misma lógica de SweetAlert de error) ...
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glassmorphism p-4 p-md-5 mx-auto" style={{ maxWidth: '900px' }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-4">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text" 
                className="form-control-dark"
                isInvalid={!!errors.name}
                {...register("name")} 
              />
              <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="lastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control 
                type="text" 
                className="form-control-dark"
                isInvalid={!!errors.lastname}
                {...register("lastname")} 
              />
              <Form.Control.Feedback type="invalid">{errors.lastname?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control 
                type="email" 
                className="form-control-dark"
                isInvalid={!!errors.email}
                {...register("email")} 
              />
              <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Teléfono (9 dígitos)</Form.Label>
              <Form.Control 
                type="tel" 
                className="form-control-dark"
                isInvalid={!!errors.phone}
                {...register("phone")} 
              />
              <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group controlId="message">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control 
                as="textarea"
                rows={5}
                className="form-control-dark"
                isInvalid={!!errors.message}
                {...register("message")}
              />
              <Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12} className="text-center mt-5">
            <AnimatedButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Consulta <Send size={18} style={{ marginLeft: '10px' }} />
                </>
              )}
            </AnimatedButton>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ContactForm;