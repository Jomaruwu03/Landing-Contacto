<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-orange-50">
    <!-- Barra de navegación mejorada -->
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
          <div class="flex items-center">
            <span class="text-2xl">🌍</span>
            <span class="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500">Wanderlust</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-700 hover:text-orange-500 font-medium transition">Inicio</a>
            <a href="#destinations" class="text-gray-700 hover:text-orange-500 font-medium transition">Destinos</a>
            <a href="#testimonials" class="text-gray-700 hover:text-orange-500 font-medium transition">Experiencias</a>
            <a href="#contact" class="text-gray-700 hover:text-orange-500 font-medium transition">Contacto</a>
          </div>
          <button class="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section Rediseñada -->
    <section class="relative h-screen overflow-hidden">
      <div class="absolute inset-0 bg-black/30 z-10"></div>
      <div class="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div class="text-center max-w-4xl">
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-pink-300">Descubre el mundo</span> con nosotros
          </h1>
          <p class="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Experiencias únicas diseñadas por expertos en viajes. Desde playas paradisíacas hasta aventuras en la montaña, creamos recuerdos inolvidables.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explorar Destinos
            </button>
            <button @click="scrollToContact" class="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
              Planificar Viaje
            </button>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <button @click="scrollToContent" class="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
      <div class="absolute inset-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
             alt="Paisaje de viaje" 
             class="w-full h-full object-cover object-center transition-opacity duration-1000"
             :class="{'opacity-100': heroLoaded, 'opacity-0': !heroLoaded}"
             @load="heroLoaded = true">
      </div>
    </section>

    <!-- Sección de estadísticas -->
    <section class="py-12 bg-gradient-to-r from-blue-500 to-orange-400 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="p-4">
            <div class="text-4xl font-bold mb-2">15K+</div>
            <div class="text-sm uppercase tracking-wider">Viajeros felices</div>
          </div>
          <div class="p-4">
            <div class="text-4xl font-bold mb-2">50+</div>
            <div class="text-sm uppercase tracking-wider">Destinos únicos</div>
          </div>
          <div class="p-4">
            <div class="text-4xl font-bold mb-2">12</div>
            <div class="text-sm uppercase tracking-wider">Años de experiencia</div>
          </div>
          <div class="p-4">
            <div class="text-4xl font-bold mb-2">98%</div>
            <div class="text-sm uppercase tracking-wider">Satisfacción</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Destinos (mejorada) -->
    <section id="destinations" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500">Nuestros Destinos</span> Destacados
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestros paquetes más populares cuidadosamente seleccionados para ofrecerte la mejor experiencia.
          </p>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(destination, index) in featuredDestinations" :key="index" 
               class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <img :src="destination.image" :alt="destination.name" 
                   class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6 w-full">
              <div class="flex justify-between items-end">
                <div>
                  <h3 class="text-xl font-bold text-white">{{ destination.name }}</h3>
                  <p class="text-orange-300 font-medium">{{ destination.days }} días | Desde ${{ destination.price }}</p>
                </div>
                <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition">
                  Ver detalles
                </button>
              </div>
            </div>
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-orange-600 shadow">
              ⭐ {{ destination.rating }}
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button class="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-orange-600 transition-all shadow-lg">
            Ver todos los destinos
          </button>
        </div>
      </div>
    </section>

    <!-- Sección de Experiencias/Testimonios -->
    <section id="testimonials" class="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experiencias <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">Inolvidables</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Lo que nuestros viajeros dicen sobre sus aventuras con Wanderlust
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" 
               class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div class="flex items-center mb-4">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full object-cover">
              <div class="ml-4">
                <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500">{{ testimonial.location }}</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4 italic">"{{ testimonial.quote }}"</p>
            <div class="flex">
              <span v-for="star in 5" :key="star" class="text-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Beneficios -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500">Wanderlust</span>?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos más que solo viajes, creamos experiencias personalizadas.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" 
               class="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl hover:shadow-lg transition">
            <div class="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
              <span class="text-2xl">{{ benefit.icon }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Contacto Mejorada -->
    <section id="contact" class="py-20 bg-gradient-to-br from-blue-500 to-orange-400 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">¿Listo para tu próxima aventura?</h2>
            <p class="text-lg mb-8 opacity-90">
              Completa el formulario y uno de nuestros expertos en viajes se pondrá en contacto contigo para crear el itinerario perfecto.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="bg-white/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Teléfono / WhatsApp</h3>
                  <p class="opacity-90">+1 (234) 567-8900</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="bg-white/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Correo Electrónico</h3>
                  <p class="opacity-90">hola@wanderlusttravel.com</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="bg-white/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Oficina Central</h3>
                  <p class="opacity-90">123 Calle Viajera, Ciudad Wanderlust</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl shadow-2xl p-8 text-gray-800">
            <h3 class="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form @submit.prevent="submitForm" class="space-y-5">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                <input type="text" id="name" v-model="form.name" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input type="email" id="email" v-model="form.email" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input type="tel" id="phone" v-model="form.phone" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Tu mensaje</label>
                <textarea id="message" v-model="form.message" rows="4" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
              </div>
              
              <button type="submit" 
                      class="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-pink-600 transition shadow-lg">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Mejorado -->
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div class="flex items-center mb-4">
              <span class="text-2xl">🌍</span>
              <span class="ml-2 text-xl font-bold">Wanderlust</span>
            </div>
            <p class="text-gray-400 mb-4">
              Creando experiencias de viaje inolvidables desde 2010.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Destinos</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition">Europa</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">Asia</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">América</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">África</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">Oceanía</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Tipos de Viaje</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition">Luna de Miel</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">Aventura</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">Playa</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">Cultural</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">Cruceros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Soporte</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition">FAQs</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">Política de Cancelación</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">Términos y Condiciones</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">Privacidad</a></li>
              <li><a href="#contact" class="text-gray-400 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Wanderlust Travel. Todos los derechos reservados.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition">Política de Privacidad</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition">Términos de Servicio</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const heroLoaded = ref(false)
const currentSlide = ref(0)

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const featuredDestinations = ref([
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 10,
    price: 1899,
    rating: 4.9
  },
  {
    name: "Santorini, Grecia",
    image: "https://images.unsplash.com/photo-1519552928909-67ca7aef9265?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 7,
    price: 2499,
    rating: 4.8
  },
  {
    name: "Kyoto, Japón",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 12,
    price: 2999,
    rating: 4.7
  },
  {
    name: "París, Francia",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 5,
    price: 1599,
    rating: 4.6
  },
  {
    name: "Nueva York, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 6,
    price: 1799,
    rating: 4.5
  },
  {
    name: "Cape Town, Sudáfrica",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    days: 9,
    price: 2199,
    rating: 4.8
  }
])

const testimonials = ref([
  {
    name: "María González",
    location: "Viajó a Bali",
    quote: "La mejor experiencia de viaje que he tenido. Todo estuvo perfectamente organizado y los guías locales fueron excepcionales.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Carlos Martínez",
    location: "Viajó a Japón",
    quote: "Wanderlust entendió exactamente lo que queríamos. El itinerario fue perfecto, con el equilibrio ideal entre actividades y tiempo libre.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Ana Rodríguez",
    location: "Viajó a Italia",
    quote: "Nuestra luna de miel fue mágica gracias a la atención personalizada y los detalles que incluyeron. ¡Totalmente recomendados!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  }
])

const benefits = ref([
  {
    icon: "✈️",
    title: "Vuelos Incluidos",
    description: "Todos nuestros paquetes incluyen vuelos internacionales con las mejores aerolíneas."
  },
  {
    icon: "🏨",
    title: "Hoteles Premium",
    description: "Alojamiento en hoteles cuidadosamente seleccionados por ubicación y comodidad."
  },
  {
    icon: "👨‍✈️",
    title: "Guías Expertos",
    description: "Tours con guías locales certificados que conocen los secretos de cada destino."
  },
  {
    icon: "🛡️",
    title: "Seguro de Viaje",
    description: "Protección completa incluida en todos nuestros paquetes internacionales."
  }
])

onMounted(() => {
  // Animación para el slider de destinos
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % featuredDestinations.value.length
  }, 5000)
})

const scrollToContent = () => {
  document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' })
}

const scrollToContact = () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
}

const submitForm = async () => {
  // Simulación de envío de formulario
  await new Promise(resolve => setTimeout(resolve, 1500))
  alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.')
  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<style>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-fade-in { animation: fade-in 1s ease; }
.animate-bounce { animation: bounce 2s infinite; }
</style>