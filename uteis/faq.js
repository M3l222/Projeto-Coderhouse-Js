 // Array para armazenar as perguntas e respostas
        const faq = [
            { pergunta: "O que é o Idea Bazar Vintage?", resposta: "O Idea Bazar Vintage é uma loja online especializada em produtos vintage, oferecendo uma variedade de itens únicos e exclusivos, desde roupas e acessórios até decoração e colecionáveis." },
            { pergunta: "Como faço para encontrar produtos disponíveis no Idea Bazar Vintage?", resposta: "Navegue pela nossa loja online ou entre em contato conosco para descobrir os produtos disponíveis. Também publicamos regularmente novos itens em nossas redes sociais, então siga-nos para ficar atualizado." },
            { pergunta: "Posso comprar diretamente pelo site?", resposta: "Não, as compras não são feitas diretamente pelo site. Os produtos são cotados e as vendas são finalizadas via Whatsapp após o agendamento." },
            { pergunta: "Como faço para cotar um produto?", resposta: "Envie uma mensagem para nós pelo Whatsapp informando o produto de interesse. Respondemos com detalhes sobre disponibilidade, preço e outras informações relevantes." },
            { pergunta: "Vocês vendem apenas em São Paulo?", resposta: "Sim, vendemos exclusivamente em São Paulo. Os produtos podem ser retirados pessoalmente ou entregues em locais dentro da cidade." },
            { pergunta: "Qual é a política de devolução e troca?", resposta: "Aceitamos devoluções e trocas dentro de um determinado período de tempo após a compra, sujeito às nossas políticas de retorno. Entre em contato conosco para obter mais detalhes sobre como iniciar o processo de devolução ou troca." },
            { pergunta: "Vocês oferecem serviços de restauração para itens danificados?", resposta: "Sim, oferecemos serviços de restauração para itens danificados, quando possível. Entre em contato conosco para discutir suas necessidades específicas e receber uma cotação personalizada." },
            { pergunta: "Posso reservar um item enquanto decido se quero comprá-lo?", resposta: "Sim, é possível reservar um item por um curto período de tempo, sujeito a disponibilidade. Entre em contato conosco para solicitar uma reserva." },
            { pergunta: "Vocês aceitam pagamentos parcelados?", resposta: "Sim, aceitamos pagamentos parcelados em algumas circunstâncias. Entre em contato conosco para discutir as opções de pagamento disponíveis para o seu pedido." },
            { pergunta: "Como posso entrar em contato com o Idea Bazar Vintage?", resposta: `Você pode entrar em contato conosco através do Whatsapp pelo número (11)98556-3314 ou pelo e-mail Ideaatendimento@gmail.com. Estamos disponíveis para responder às suas perguntas e ajudá-lo com suas compras.` }
        ];

        // Função para exibir as perguntas e respostas na página
        function exibirFAQ() {
            const faqContainer = document.getElementById("faq_container");

            // Itera sobre o array de perguntas e respostas
            faq.forEach(item => {
                // Cria elementos HTML para exibir a pergunta e a resposta
                const perguntaElement = document.createElement("h3");
                perguntaElement.textContent = item.pergunta;

                const respostaElement = document.createElement("p");
                respostaElement.textContent = item.resposta;

                // Adiciona os elementos criados ao contêiner na página
                faqContainer.appendChild(perguntaElement);
                faqContainer.appendChild(respostaElement);
            });
        }

        // Chama a função para exibir o FAQ ao carregar a página
            exibirFAQ() 