import { render } from '@testing-library/react';
import { OrderStatus } from './order-status';

describe('Order Status', () => {
  it('should display the right UI based on order status Pending', () => {
    const renderedOrderStatus = render(<OrderStatus status="pending" />);

    const orderStatusText = renderedOrderStatus.getByText('Pendente');
    const orderStatusBadge = renderedOrderStatus.getByTestId('badge');

    expect(orderStatusText).toBeInTheDocument();
    expect(orderStatusBadge).toHaveClass('bg-slate-400');
  });

  it('should display the right UI based on order status Canceled', () => {
    const renderedOrderStatus = render(<OrderStatus status="canceled" />);

    const orderStatusText = renderedOrderStatus.getByText('Cancelado');
    const orderStatusBadge = renderedOrderStatus.getByTestId('badge');

    expect(orderStatusText).toBeInTheDocument();
    expect(orderStatusBadge).toHaveClass('bg-rose-500');
  });

  it('should display the right UI based on order status Delivered', () => {
    const renderedOrderStatus = render(<OrderStatus status="delivered" />);

    const orderStatusText = renderedOrderStatus.getByText('Entregue');
    const orderStatusBadge = renderedOrderStatus.getByTestId('badge');

    expect(orderStatusText).toBeInTheDocument();
    expect(orderStatusBadge).toHaveClass('bg-emerald-500');
  });

  it('should display the right UI based on order status Processing', () => {
    const renderedOrderStatus = render(<OrderStatus status="processing" />);

    const orderStatusText = renderedOrderStatus.getByText('Em preparo');
    const orderStatusBadge = renderedOrderStatus.getByTestId('badge');

    expect(orderStatusText).toBeInTheDocument();
    expect(orderStatusBadge).toHaveClass('bg-amber-500');
  });

  it('should display the right UI based on order status Delivering', () => {
    const renderedOrderStatus = render(<OrderStatus status="delivering" />);

    const orderStatusText = renderedOrderStatus.getByText('Em entrega');
    const orderStatusBadge = renderedOrderStatus.getByTestId('badge');

    expect(orderStatusText).toBeInTheDocument();
    expect(orderStatusBadge).toHaveClass('bg-amber-500');
  });
});
