using System.ComponentModel.DataAnnotations;

namespace VacinaCao.API.Models
{
    public class Tutores
    {
    
            [Key]
            public Guid TutorId { get; set; }

            public string Nome_Tutor { get; }

            public string CPF { get; set; }

            public string Cidade { get; set; }

            public string Rua { get; set; }

            public int Numero { get; set; }

            public Guid PacId { get; set; }

            public DateTime Createtime { get; set; }

     }
}
