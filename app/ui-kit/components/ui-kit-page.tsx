'use client'
import React, { useState } from 'react'
import { Container, Col } from '@/styles/07-objects/objects'
import Text from '@/shared/components/citrica-ui/atoms/text'
import Card from '@/shared/components/citrica-ui/atoms/card'
import Button from '@/shared/components/citrica-ui/molecules/button'
import Icon from '@/shared/components/citrica-ui/atoms/icon'
import Input from '@/shared/components/citrica-ui/atoms/input'
import Loading from '@/shared/components/citrica-ui/atoms/loading'
import Select from '@/shared/components/citrica-ui/atoms/select'
import { addToast } from "@heroui/toast"

const UIKitPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedPriority, setSelectedPriority] = useState('')
  const [showLoading, setShowLoading] = useState(false)
  const [showFullScreenLoading, setShowFullScreenLoading] = useState(false)
  const [inputError, setInputError] = useState('')
  const [showPasswordVisibility, setShowPasswordVisibility] = useState(false)

  const countryOptions = [
    { key: 'pe', label: 'Perú', value: 'peru' },
    { key: 'co', label: 'Colombia', value: 'colombia' },
    { key: 'mx', label: 'México', value: 'mexico' },
    { key: 'ar', label: 'Argentina', value: 'argentina' },
    { key: 'cl', label: 'Chile', value: 'chile' },
    { key: 'ec', label: 'Ecuador', value: 'ecuador' },
    { key: 'bo', label: 'Bolivia', value: 'bolivia' },
  ]

  const categoryOptions = [
    { key: 'tech', label: 'Tecnología', value: 'technology' },
    { key: 'design', label: 'Diseño UX/UI', value: 'design' },
    { key: 'marketing', label: 'Marketing Digital', value: 'marketing' },
    { key: 'sales', label: 'Ventas', value: 'sales' },
    { key: 'finance', label: 'Finanzas', value: 'finance' },
    { key: 'hr', label: 'Recursos Humanos', value: 'hr' },
  ]

  const priorityOptions = [
    { key: 'low', label: 'Baja', value: 'low' },
    { key: 'medium', label: 'Media', value: 'medium' },
    { key: 'high', label: 'Alta', value: 'high' },
    { key: 'urgent', label: 'Urgente', value: 'urgent' },
    { key: 'critical', label: 'Crítica', value: 'critical', isDisabled: true },
  ]

  const handleFormSubmit = () => {
    // Validación simple
    if (!inputValue.trim()) {
      setInputError('El nombre es requerido')
      addToast({
        title: "Error en el formulario",
        description: "Por favor completa todos los campos requeridos",
        color: "danger",
        radius: "sm",
      })
      return
    }

    setInputError('')
    addToast({
      title: "Formulario enviado exitosamente",
      description: `Hola ${inputValue}, hemos procesado tu información correctamente`,
      color: "success",
      radius: "sm",
    })

    // Reset form
    setInputValue('')
    setEmailValue('')
    setPasswordValue('')
    setSelectedCountry('')
    setSelectedCategory('')
    setSelectedPriority('')
  }

  const handleLoadingDemo = () => {
    setShowLoading(true)
    addToast({
      title: "Iniciando proceso",
      description: "Simulando carga de datos...",
      color: "default",
      radius: "sm",
    })
    setTimeout(() => {
      setShowLoading(false)
      addToast({
        title: "Proceso completado",
        description: "Los datos se han cargado exitosamente",
        color: "success",
        radius: "sm",
      })
    }, 3000)
  }

  const handleFullScreenLoadingDemo = () => {
    setShowFullScreenLoading(true)
    setTimeout(() => setShowFullScreenLoading(false), 2500)
  }

  const handleSearch = () => {
    if (searchValue.trim()) {
      addToast({
        title: "Búsqueda realizada",
        description: `Buscando: "${searchValue}"`,
        color: "default",
        radius: "sm",
      })
    }
  }

  const handleValidation = (value: string) => {
    setInputValue(value)
    if (value.length > 0 && value.length < 3) {
      setInputError('El nombre debe tener al menos 3 caracteres')
    } else {
      setInputError('')
    }
  }

  return (
    <div className="pt-[64px] min-h-screen bg-color-surface">
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }}>
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Palette" size={32} />
              <Text variant="display" textColor="color-on-surface">
                UI Kit Demo
              </Text>
            </div>
            <Text variant="body" textColor="color-on-surface">
              Demostración completa del sistema de componentes Citrica UI con ejemplos interactivos y casos de uso reales
            </Text>
          </div>
        </Col>
      </Container>

      {/* Input Components Showcase */}
      <Container>
        <Col cols={{ lg: 6, md: 6, sm: 4 }} className="mb-8">
          <Card>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Edit3" size={24} />
                <Text variant="headline" textColor="color-on-container">
                  Input Components
                </Text>
              </div>

              <div className="space-y-4">
                {/* Basic Input with Validation */}
                <Input
                  label="Nombre completo"
                  placeholder="Ingresa tu nombre completo"
                  value={inputValue}
                  onChange={handleValidation}
                  isRequired
                  isInvalid={!!inputError}
                  errorMessage={inputError}
                  startContent={<Icon name="User" size={16} />}
                />

                {/* Email Input */}
                <Input
                  label="Correo electrónico"
                  placeholder="ejemplo@citrica.com"
                  type="email"
                  value={emailValue}
                  onChange={setEmailValue}
                  isRequired
                  startContent={<Icon name="Mail" size={16} />}
                  variant="bordered"
                />

                {/* Password Input with Visibility Toggle */}
                <Input
                  label="Contraseña"
                  placeholder="Mínimo 8 caracteres"
                  type={showPasswordVisibility ? "text" : "password"}
                  value={passwordValue}
                  onChange={setPasswordValue}
                  isRequired
                  startContent={<Icon name="Lock" size={16} />}
                  endContent={
                    <button
                      type="button"
                      onClick={() => setShowPasswordVisibility(!showPasswordVisibility)}
                      className="focus:outline-none"
                    >
                      <Icon name={showPasswordVisibility ? "EyeOff" : "Eye"} size={16} />
                    </button>
                  }
                />

                {/* Search Input */}
                <Input
                  label="Búsqueda avanzada"
                  placeholder="Busca productos, servicios, usuarios..."
                  value={searchValue}
                  onChange={setSearchValue}
                  startContent={<Icon name="Search" size={16} />}
                  endContent={
                    <Button
                      onClick={handleSearch}
                      label="Buscar"
                      variant="primary"
                      textVariant="label"
                    />
                  }
                />

                {/* Disabled Input */}
                <Input
                  label="Campo deshabilitado"
                  placeholder="Este campo no se puede editar"
                  value="Valor por defecto"
                  isDisabled
                  startContent={<Icon name="Lock" size={16} />}
                />
              </div>
            </div>
          </Card>
        </Col>

        {/* Select Components Showcase */}
        <Col cols={{ lg: 6, md: 6, sm: 4 }} className="mb-8">
          <Card>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="ChevronDown" size={24} />
                <Text variant="headline" textColor="color-on-container">
                  Select Components
                </Text>
              </div>

              <div className="space-y-4">
                {/* Country Select */}
                <Select
                  label="País de residencia"
                  placeholder="Selecciona tu país"
                  options={countryOptions}
                  selectedKey={selectedCountry}
                  onSelectionChange={setSelectedCountry}
                  isRequired
                  startContent={<Icon name="Globe" size={16} />}
                />

                {/* Category Select */}
                <Select
                  label="Área profesional"
                  placeholder="¿En qué área trabajas?"
                  options={categoryOptions}
                  selectedKey={selectedCategory}
                  onSelectionChange={setSelectedCategory}
                  variant="bordered"
                />

                {/* Priority Select with Disabled Option */}
                <Select
                  label="Nivel de prioridad"
                  placeholder="Selecciona la prioridad"
                  options={priorityOptions}
                  selectedKey={selectedPriority}
                  onSelectionChange={setSelectedPriority}
                  startContent={<Icon name="Flag" size={16} />}
                />

                {/* Disabled Select */}
                <Select
                  label="Configuración bloqueada"
                  placeholder="Requiere permisos de administrador"
                  options={[]}
                  isDisabled
                  startContent={<Icon name="ShieldCheck" size={16} />}
                />

                {/* Select with Error State */}
                <Select
                  label="Campo con error"
                  placeholder="Selecciona una opción"
                  options={categoryOptions.slice(0, 3)}
                  isInvalid
                  errorMessage="Este campo es obligatorio"
                  startContent={<Icon name="AlertCircle" size={16} />}
                />
              </div>
            </div>
          </Card>
        </Col>
      </Container>

      {/* Loading Components Showcase */}
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }} className="mb-8">
          <Card>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Loader2" size={24} />
                <Text variant="headline" textColor="color-on-container">
                  Loading Components
                </Text>
              </div>

              {/* Loading Sizes */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 border rounded-lg">
                  <Text variant="subtitle" textColor="color-on-container" className="mb-4">
                    Pequeño
                  </Text>
                  <Loading size="sm" label="Cargando..." />
                </div>

                <div className="text-center p-4 border rounded-lg">
                  <Text variant="subtitle" textColor="color-on-container" className="mb-4">
                    Mediano
                  </Text>
                  <Loading size="md" label="Procesando..." />
                </div>

                <div className="text-center p-4 border rounded-lg">
                  <Text variant="subtitle" textColor="color-on-container" className="mb-4">
                    Grande
                  </Text>
                  <Loading size="lg" label="Sincronizando..." />
                </div>

                <div className="text-center p-4 border rounded-lg">
                  <Text variant="subtitle" textColor="color-on-container" className="mb-4">
                    Sin etiqueta
                  </Text>
                  <Loading size="md" />
                </div>
              </div>

              {/* Loading Colors */}
              <div className="mb-6">
                <Text variant="title" textColor="color-on-container" className="mb-4">
                  Diferentes colores
                </Text>
                <div className="flex flex-wrap gap-6">
                  <Loading size="md" color="primary" label="Primary" />
                  <Loading size="md" color="secondary" label="Secondary" />
                  <Loading size="md" color="success" label="Success" />
                  <Loading size="md" color="warning" label="Warning" />
                  <Loading size="md" color="danger" label="Danger" />
                </div>
              </div>

              {/* Interactive Demos */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={handleLoadingDemo}
                  label={showLoading ? "Cargando..." : "Demo Loading (3s)"}
                  variant="secondary"
                />
                <Button
                  onClick={handleFullScreenLoadingDemo}
                  label="Demo Pantalla Completa"
                  variant="primary"
                />
              </div>

              {showLoading && (
                <div className="mt-6 p-6 border rounded-lg bg-gray-50">
                  <Loading size="md" label="Simulando proceso de carga de datos..." />
                </div>
              )}
            </div>
          </Card>
        </Col>
      </Container>

      {/* Interactive Form Example */}
      <Container>
        <Col cols={{ lg: 8, md: 6, sm: 4 }} className="mb-8 mx-auto">
          <Card>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="FileText" size={24} />
                <Text variant="headline" textColor="color-on-container">
                  Formulario Interactivo Completo
                </Text>
              </div>
              
              <Text variant="body" textColor="color-on-container" className="mb-6">
                Ejemplo práctico combinando todos los componentes con validaciones y estados interactivos
              </Text>

              <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <Text variant="title" textColor="color-on-container" className="mb-4">
                    Información Personal
                  </Text>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Nombre"
                      placeholder="Tu nombre"
                      value={inputValue}
                      onChange={handleValidation}
                      isRequired
                      isInvalid={!!inputError}
                      errorMessage={inputError}
                      startContent={<Icon name="User" size={16} />}
                    />
                    <Input
                      label="Email"
                      placeholder="tu@email.com"
                      type="email"
                      value={emailValue}
                      onChange={setEmailValue}
                      isRequired
                      startContent={<Icon name="Mail" size={16} />}
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <Text variant="title" textColor="color-on-container" className="mb-4">
                    Información Profesional
                  </Text>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      label="País"
                      placeholder="Selecciona tu país"
                      options={countryOptions}
                      selectedKey={selectedCountry}
                      onSelectionChange={setSelectedCountry}
                      isRequired
                      startContent={<Icon name="MapPin" size={16} />}
                    />
                    <Select
                      label="Área de trabajo"
                      placeholder="Tu especialidad"
                      options={categoryOptions}
                      selectedKey={selectedCategory}
                      onSelectionChange={setSelectedCategory}
                      startContent={<Icon name="Briefcase" size={16} />}
                    />
                  </div>
                </div>

                {/* Security */}
                <div>
                  <Text variant="title" textColor="color-on-container" className="mb-4">
                    Seguridad
                  </Text>
                  <Input
                    label="Contraseña"
                    placeholder="Mínimo 8 caracteres"
                    type={showPasswordVisibility ? "text" : "password"}
                    value={passwordValue}
                    onChange={setPasswordValue}
                    isRequired
                    startContent={<Icon name="Lock" size={16} />}
                    endContent={
                      <button
                        type="button"
                        onClick={() => setShowPasswordVisibility(!showPasswordVisibility)}
                        className="focus:outline-none"
                      >
                        <Icon name={showPasswordVisibility ? "EyeOff" : "Eye"} size={16} />
                      </button>
                    }
                  />
                </div>

                {/* Form Actions */}
                <div className="flex gap-4 pt-6 border-t">
                  <Button
                    onClick={() => {
                      setInputValue('')
                      setEmailValue('')
                      setPasswordValue('')
                      setSelectedCountry('')
                      setSelectedCategory('')
                      setSelectedPriority('')
                      setInputError('')
                    }}
                    label="Limpiar"
                    variant="secondary"
                    textVariant="body"
                  />
                  <Button
                    onClick={handleFormSubmit}
                    label="Enviar Formulario"
                    variant="primary"
                    textVariant="body"
                  />
                </div>
              </form>
            </div>
          </Card>
        </Col>
      </Container>

      {/* Component Status Overview */}
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }} className="mb-8">
          <Card>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Activity" size={24} />
                <Text variant="headline" textColor="color-on-container">
                  Estado Actual del Sistema
                </Text>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Typography */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Icon name="Type" size={32} />
                  </div>
                  <Text variant="subtitle" textColor="color-on-container" className="mb-2">
                    Tipografía
                  </Text>
                  <div className="space-y-1">
                    <Text variant="display" className="text-xs">Display</Text>
                    <Text variant="headline" className="text-xs">Headline</Text>
                    <Text variant="title" className="text-xs">Title</Text>
                    <Text variant="body" className="text-xs">Body</Text>
                    <Text variant="label" className="text-xs">Label</Text>
                  </div>
                </div>

                {/* Icons */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Icon name="Star" size={32} />
                  </div>
                  <Text variant="subtitle" textColor="color-on-container" className="mb-2">
                    Iconografía
                  </Text>
                  <div className="grid grid-cols-4 gap-1">
                    <Icon name="Home" size={20} />
                    <Icon name="User" size={20} />
                    <Icon name="Settings" size={20} />
                    <Icon name="Bell" size={20} />
                    <Icon name="Mail" size={20} />
                    <Icon name="Search" size={20} />
                    <Icon name="Heart" size={20} />
                    <Icon name="Shield" size={20} />
                  </div>
                </div>

                {/* Interactive Elements */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Icon name="MousePointer" size={32} />
                  </div>
                  <Text variant="subtitle" textColor="color-on-container" className="mb-2">
                    Interactivos
                  </Text>
                  <div className="space-y-2">
                    <Button onClick={() => {}} label="Primary" variant="primary" />
                    <Button onClick={() => {}} label="Secondary" variant="secondary" />
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Icon name="CheckCircle" size={32} />
                  </div>
                  <Text variant="subtitle" textColor="color-on-container" className="mb-2">
                    Estados
                  </Text>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <Text variant="label" className="text-xs">Éxito</Text>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <Text variant="label" className="text-xs">Error</Text>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <Text variant="label" className="text-xs">Advertencia</Text>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <Text variant="label" className="text-xs">Info</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Container>

      {/* Full Screen Loading */}
      {showFullScreenLoading && (
        <Loading 
          fullScreen 
          size="lg"
          label="Procesando información del sistema..." 
        />
      )}
    </div>
  )
}

export default UIKitPage