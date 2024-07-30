class MobileDevice:
    def __init__(self, device_id):
        self.device_id = device_id

class MobileNetwork:
    def __init__(self):
        self.devices = {}

    def register_device(self, phone_number, device_id):
        self.devices[phone_number] = MobileDevice(device_id)

    def send_message(self, sender_phone_number, recipient_phone_number, message):
        if recipient_phone_number in self.devices:
            print(f"Message sent from {sender_phone_number} to {recipient_phone_number}: {message}")
        else:
            print(f"Recipient {recipient_phone_number} is not associated with any registered device.")

# Example usage:
network = MobileNetwork()

# Register devices with phone numbers and device IDs
network.register_device("1234567890", "device_id_1")
network.register_device("9876543210", "device_id_2")

# Attempt to send messages
network.send_message("1234567890", "9876543210", "Hello there!")  # Should succeed
network.send_message("1234567890", "5555555555", "Hello there!")  # Should fail
