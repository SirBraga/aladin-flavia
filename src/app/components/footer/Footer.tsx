import React from 'react';
import { motion } from 'framer-motion';
import { Aladin } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/app/theme/theme';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowUp } from 'react-icons/fa';

interface FooterProps {
  font: {
    className: string;
  };
}

const Footer: React.FC<FooterProps> = ({ font }) => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  } as const;
  
  const linkItem = {
    hidden: { opacity: 0, x: -10 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    },
  } as const;
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b pb-4 from-gray-900 to-gray-950 text-white pt-20">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-pink-500" /> */}
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
        >
          {/* Logo and About */}
          <motion.div 
            className="lg:col-span-2"
            variants={item}
          >
            <div className="flex items-center mb-8">
              <motion.div 
                className="mr-6"
                whileHover={{ rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className='w-40 h-20 relative'>
                  <Image
                    src="/imagens/logo-en.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />

                </div>
              </motion.div>
              
            </div>
            <motion.p 
              className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed"
              variants={item}
            >
              Transformando vidas através da dança e criando memórias inesquecíveis no palco da vida.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={item}
            >
              {[
                { name: 'facebook', icon: <FaFacebook /> },
                { name: 'instagram', icon: <FaInstagram /> },
                { name: 'youtube', icon: <FaYoutube /> },
                { name: 'tiktok', icon: <FaTiktok /> },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all duration-300 group"
                  aria-label={social.name}
                  whileHover={{ y: -3, scale: 1.1, backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-8 text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-yellow-400">
              Links Rápidos
            </h3>
            <motion.ul 
              className="space-y-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {[
                { label: 'Sobre o Espetáculo', href: '#sobre', icon: '🎭' },
                { label: 'Galeria', href: '#galeria', icon: '📸' },
                { label: 'Ingressos', href: '#ingressos', icon: '🎟️' },
                { label: 'Perguntas Frequentes', href: '#faq', icon: '❓' },
                { label: 'Contato', href: '#contato', icon: '✉️' },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={linkItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ x: 5 }}
                  className="mb-3"
                >
                  <Link 
                    href={item.href}
                    className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors group text-lg"
                  >
                    <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-yellow-500 group-hover:text-gray-900 transition-colors">
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-8 text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-yellow-400">
              Entre em Contato
            </h3>
            <ul className="space-y-6">
              <motion.li 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 mr-4 flex-shrink-0 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Endereço</p>
                  <p className="text-gray-400 mt-1">
                    Rua Alvarenga Peixoto, 1679<br />
                    Santo Agostinho, Belo Horizonte - MG<br />
                    CEP: 30180-121
                  </p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 mr-4 flex-shrink-0 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Telefone</p>
                  <a 
                    href="tel:+5531999999999" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors mt-1 block"
                  >
                    (31) 99999-9999
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 mr-4 flex-shrink-0 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">E-mail</p>
                  <a 
                    href="mailto:contato@enlair.com.br" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors mt-1 block"
                  >
                    contato@enlair.com.br
                  </a>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>© {currentYear} En L'air Centro de Dança. Todos os direitos reservados.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="/politica-de-privacidade" 
              className="hover:text-yellow-400 transition-colors hover:underline"
            >
              Política de Privacidade
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              href="/termos-de-uso" 
              className="hover:text-yellow-400 transition-colors hover:underline"
            >
              Termos de Uso
            </Link>
          </div>
        </motion.div>
        
        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      </div>
    </footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'facebook':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.016c2.672 0 2.988-.01 4.042-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.016c0-2.672-.01-2.988-.058-4.042-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12L10 15V9l5.194 3z" clipRule="evenodd" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-.99.05-2.04.06-3.04.01-2.89 0-5.79 0-8.68 0-.09 0-.18 0-.28 1.64.1 3.27.06 4.91.04-.01.79-.01 1.58-.01 2.38z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;
