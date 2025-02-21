from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MessageSerializer
from .models import Message

@api_view(['GET'])
def getMessages(request):
    message = 'Hello, Django!'
    return Response({ "message": message }, status=status.HTTP_200_OK)

# Fetch all messages from the database
@api_view(['GET'])
def fetch_all_messages(request):
    try:
        message = Message.objects.first()
        if message:
            serializer = MessageSerializer(message)
            return Response(serializer.data)
        else:
            return Response({ "message": "No messages found." }, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({
            "error": "Failed to fetch all message from database",
            "details": str(e),
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)