// IconGrid.js
import React from 'react';
import IconButton from './IconButton';

const icons = [
  { icon: '🎟️', label: 'Aficiones y ocio', link: '/aficiones-y-ocio' },
  { icon: '🐾', label: 'Animales', link: '/animales' },
  { icon: '🛋️', label: 'Casa y jardín', link: '/casa-y-jardin' },
  { icon: '🖱️', label: 'Computación', link: '/computacion' },
  { icon: '🏅', label: 'Deportes y náutica', link: '/deportes-y-nautica' },
  { icon: '📚', label: 'Formación y libros', link: '/formacion-y-libros' },
  { icon: '📷', label: 'Imagen y sonido', link: '/imagen-y-sonido' },
  { icon: '🏠', label: 'Inmobiliaria', link: '/inmobiliaria' },
  { icon: '🎮', label: 'Juegos', link: '/juegos' },
  { icon: '👜', label: 'Moda y accesorios', link: '/moda-y-accesorios' },
  { icon: '🚗', label: 'Motor', link: '/motor' },
  { icon: '👶', label: 'Niños y Bebés', link: '/ninos-y-bebes' },
  { icon: '💳', label: 'Servicios', link: '/servicios' },
  { icon: '📱', label: 'Telefonía', link: '/telefonia' },
  { icon: '🔞', label: 'Contactos', link: '/contactos' },
];

const IconGrid = () => {
  return (
    <div className="flex flex-wrap justify-center container gap-6 p-8 mx-auto">
      {icons.map((item, index) => (
        <IconButton key={index} icon={item.icon} label={item.label} link={item.link} />
      ))}
    </div>
  );
};

export default IconGrid;
