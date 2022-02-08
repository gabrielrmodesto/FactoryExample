// interfaces

interface PaymentMethod {
  tax: number;
  createPayment(orderId: string): boolean;
  refoundPayment(orderId: string): boolean;
}
// metodo abstrato

abstract class PaymentMethodFactory {
  abstract create(): PaymentMethod;
}

// concretos

class PaypalMethod implements PaymentMethod {
  tax: number = 0.05;
  createPayment(orderId: string): boolean {
    console.log(
      `Cria a ordem de pagamento ${orderId} via Paypal com a taxa ${this.tax}`
    );
    return true;
  }
  refoundPayment(orderId: string): boolean {
    console.log(`Reembolsa a ordem de pagamento ${orderId} via Paypal`);
    return true;
  }
}

class PagseguroMethod implements PaymentMethod {
  tax: number = 0.02;
  createPayment(orderId: string): boolean {
    console.log(
      `Cria a ordem de pagamento ${orderId} via PagSeguro com a taxa ${this.tax}`
    );
    return true;
  }
  refoundPayment(orderId: string): boolean {
    console.log(`Reembolsa a ordem de pagamento ${orderId} via PagSeguro`);
    return true;
  }
}
