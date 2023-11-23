using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace VacinaCao.API.Models
{

   
    public class Pacientes
    {

        [Key]
        public int PacId { get; set; }

        public string Nome { get; set; }

        public string Data_Nascimento { get; set; }

        
        public string Peso { get; set; }

        public string Raca { get; set; }

        public string Especie { get; set; }
        public string Sexo { get; set; }


    }
    

    public enum EspecieClients
    {

        Cachorros = 0,
        Gatos = 1,
        Aves = 2,
        Roedores = 3,
        Outros = 4
    }
}
