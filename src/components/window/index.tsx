import React, { useEffect } from 'react'

import { Container } from './styles'

const Window: React.FC<{ notLoading: () => void; loading: boolean }> = ({
  children,
  notLoading,
  loading
}) => {
  useEffect(notLoading, [])

  return <Container loading={loading}>{children}</Container>
}

export default Window
