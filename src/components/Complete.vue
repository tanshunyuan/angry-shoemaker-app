<template>
  <div class="container content">
    <br>
    <h3 style="color: white;">Order complete!</h3>

    <p>Congratulations! Your order is received.
      <a href>{{orderDetails.receipt_email}}</a>. We sent you a confirmation email for your records. Thanks so much!
    </p>

    <div v-if="orderDetails">
      <dl>
        <dt>Order Number</dt>
        <dd>{{ orderDetails.id }}</dd>
        <dt>Order Created</dt>
        <dd>{{ orderDetails.created }}</dd>
        <dt>Payment Amount</dt>
        <dd>{{ orderDetails.amount | currency }}</dd>
        <dt>Items Bought</dt>
        <dd style="white-space: pre-wrap" >{{orderDetails.metadata['order_Items']}}</dd>
        <dt>Time Chosen</dt>
        <dd>{{orderDetails.metadata.time}}</dd>
        <dt>Shipping Address</dt>
        <dd>
          {{ orderDetails.shipping.address.line1 }} <br>
          {{orderDetails.shipping.address.line2}}<br>
          Singapore {{ orderDetails.shipping.address.postal_code }}
        </dd>
        <dt>Email</dt>
        <dd>{{ orderDetails.receipt_email }}</dd>
      </dl>
    </div>
  </div>
</template>
<style>
dt {
  font-weight: bold;
}
</style>
<script>
import Api from '@/config/Api'
export default {
  data() {
    return {
      orderDetails: false
    };
  },
  created() {
    var charge_id = this.$route.params.id;
    Api().get(`/charge/${charge_id}`).then(res => {
      this.orderDetails = res.data.charge;
    });
  },
  filters: {
    currency(amount) {
      return `$${(amount / 100).toFixed(2)}`;
    }
  }
};
</script>